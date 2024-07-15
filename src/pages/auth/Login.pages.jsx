import React, { useEffect } from "react";
import {
  AuthGuard,
  ContainerComponents,
  ErrorComponents,
  LoadingComponents,
} from "../../components";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import { useSignInMutation } from "../../store/services/Endpoints/auth.Endpoints";
import { Link, useNavigate } from "react-router-dom";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
const LoginPages = () => {
  const { toast } = useToast();
  const nav = useNavigate();
  const [loginFun, data] = useSignInMutation();
  const initialValue = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values) => {
    // console.log(values);
    const res = await loginFun(values);
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be longer than 8 letters"),
  });
  useEffect(() => {
    // console.log(data);
    if (data?.data?.success) {
      nav("/home");
    } else {
      console.log(data?.data);
      const msg = data?.data?.message;
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: msg,
        action: (
          <ToastAction onClick={() => nav("/register")} altText="Sign Up">
            Sign Up
          </ToastAction>
        ),
      });
    }
  }, [data]);
  return (
    <AuthGuard check={data?.data?.success} token={data?.data?.token}>
      <ContainerComponents>
        {data.isLoading ? (
          <LoadingComponents />
        ) : (
          <>
            {data?.data?.success == false ? (
              <>
              <ErrorComponents />
              <Toaster/>
              </>
            ) : (
              <Card className=" basis-1/2">
                <CardHeader className="flex-row justify-between items-center text-basic">
                  <CardTitle>Sign In</CardTitle>
                  <CardDescription className=" text-basic  select-none">
                    <Link to={"/register"}> I don't have an account !</Link>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Formik
                    initialValues={initialValue}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnBlur={false}
                    validateOnChange={false}
                  >
                    {({ values, handleBlur, handleChange, isSubmitting }) => (
                      <>
                        <Form>
                          <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-2 text-basic">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className=" focus-visible:ring-basic"
                              />
                              <ErrorMessage
                                component={"p"}
                                name="email"
                                className=" text-danger text-xs"
                              />
                            </div>
                            <div className="flex flex-col space-y-2 text-basic">
                              <Label htmlFor="password">Password</Label>
                              <Input
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className=" focus-visible:ring-basic"
                              />
                              <ErrorMessage
                                component={"p"}
                                name="password"
                                className=" text-danger text-xs"
                              />
                            </div>
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="mx-auto w-auto bg-basic hover:bg-white hover:border-basic hover:border hover:text-basic duration-200 active:scale-90"
                            >
                              {isSubmitting && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              )}
                              Sign In
                            </Button>
                          </div>
                        </Form>
                      </>
                    )}
                  </Formik>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </ContainerComponents>
    </AuthGuard>
  );
};

export default LoginPages;
