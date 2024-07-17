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
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import { useSignUpMutation } from "../../store/services/Endpoints/auth.Endpoints";
import { Link, useNavigate } from "react-router-dom";

const RegisterPages = () => {
  const nav = useNavigate();
  const { toast } = useToast();
  const [regFun, data] = useSignUpMutation();
  const initialValue = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const handleSubmit = async (values) => {
    // console.log(values);
    const res = await regFun(values);
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Name must be at least 2 letters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be longer than 8 letters"),
    password_confirmation: yup
      .string()
      .required("Need to confirm your password ")
      .oneOf(
        [yup.ref("password"), null],
        "Confirm password must be same your password"
      ),
  });
  useEffect(() => {
    console.log(data);
    if (data.error) {
      const msg = data.error.data.message;
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: msg,
        action: (
          <ToastAction onClick={() => nav("/")} altText="Sign In">
            Sign In
          </ToastAction>
        ),
      });
    } else if (data.data) {
      nav("/");
    }
  }, [data]);
  return (
   <AuthGuard path="/register">
     <ContainerComponents>
      {data.isLoading ? (
        <LoadingComponents />
      ) : (
        <>
          {data.isError ? (
            <>
              <ErrorComponents />
              <Toaster />
            </>
          ) : (
            <Card className=" basis-1/2">
              <CardHeader className="flex-row justify-between items-center text-basic">
                <CardTitle>Sign Up</CardTitle>
                <CardDescription className=" text-basic select-none">
                  <Link to={"/"}>I already have an account !</Link>
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
                            <Label htmlFor="name">Name</Label>
                            <Input
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.name}
                              id="name"
                              type="name"
                              name="name"
                              placeholder="Enter your name"
                              className=" focus-visible:ring-basic"
                            />
                            <ErrorMessage
                              component={"p"}
                              name="name"
                              className=" text-danger text-xs"
                            />
                          </div>
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
                          <div className="flex flex-col space-y-2 text-basic">
                            <Label htmlFor="password_confirmation">
                              Confirm Password
                            </Label>
                            <Input
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.password_confirmation}
                              id="password_confirmation"
                              type="password"
                              name="password_confirmation"
                              placeholder="Confirm your password"
                              className=" focus-visible:ring-basic"
                            />
                            <ErrorMessage
                              component={"p"}
                              name="password_confirmation"
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
                            Sign Up
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

export default RegisterPages;
