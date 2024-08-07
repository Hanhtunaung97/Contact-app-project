import { Form, Formik, ErrorMessage } from "formik";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as yup from "yup";
import { SheetClose } from "@/components/ui/sheet";
import {
  useCreateContactMutation,
  useUpdateContactMutation,
} from "../../store/services/Endpoints/contact.Endpoints";
const FormComponents = ({ editData, handleEditForm }) => {
  const [addFun, data] = useCreateContactMutation();
  const [updateFun, updateData] = useUpdateContactMutation();
  const closeRef = useRef();
  const initialValue = {
    name: editData.upData?.name || "",
    email: editData.upData?.email || "",
    phone: editData.upData?.phone || "",
    address: editData.upData?.address || "",
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
    phone: yup
      .string()
      .required("Phone number is required")
      .min(9, "Phone number must be at least 9 digits")
      .max(13, "Phone number should not be longer than 13 digits"),
    address: yup.string().required("Address is required"),
  });
  const handleSubmit = async (values) => {
    console.log(values);
    if (editData?.edit) {
      await updateFun({ id: editData.upData.id, ...values });
    } else {
      await addFun(values);
    }
    closeRef.current.click();
  };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {({ handleBlur, handleChange, handleReset, isSubmitting, values }) => (
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
                    type="text"
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
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    id="phone"
                    type="number"
                    name="phone"
                    placeholder="Enter your phone number"
                    className=" focus-visible:ring-basic"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="phone"
                    className=" text-danger text-xs"
                  />
                </div>
                <div className="flex flex-col space-y-2 text-basic">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    id="address"
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    className=" focus-visible:ring-basic"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="address"
                    className=" text-danger text-xs"
                  />
                </div>
                <div className=" mt-5 flex justify-between items-center">
                  <SheetClose asChild ref={closeRef}>
                    <Button
                      type="button"
                      onClick={handleEditForm}
                      variant="outline"
                      className=" w-auto bg-white text-basic border hover:border-0 border-basic hover:bg-basic hover:text-white  duration-300 active:scale-95"
                    >
                      Cancel
                    </Button>
                  </SheetClose>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className=" w-auto bg-basic hover:bg-white hover:border-basic hover:border hover:text-basic duration-300 active:scale-95"
                  >
                    {isSubmitting && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {editData?.edit? "Edit":"Create"}
                  </Button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormComponents;
