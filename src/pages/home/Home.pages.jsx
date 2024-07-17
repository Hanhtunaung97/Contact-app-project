import React, { useState } from "react";
import {
  AuthGuard,
  DataTableComponents,
  EmptyComponents,
  ErrorComponents,
  FormComponents,
  LoadingComponents,
  NavComponents,
} from "../../components";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGetAllContactsQuery } from "../../store/services/Endpoints/contact.Endpoints";

const HomePages = () => {
  const { isLoading, isError, isSuccess, data } = useGetAllContactsQuery();
  // console.log(isLoading, isError, isSuccess, data);
  const [editData, setEditData] = useState({
    edit: false,
    upData: null,
  });
  const contactsData = data?.contacts?.data;
  const editFunction = (id) => {
    const contactsData = data?.contacts?.data;
    const finder = contactsData?.find((el) => el.id === id);
    console.log(finder);
    setEditData({ edit: true, upData: finder });
  };
  const handleEditForm=() => {
    setEditData({edit:false,upData:null})
  }
  return (
    <AuthGuard>
      {isLoading ? (
        <LoadingComponents />
      ) : (
        <>
          {isError ? (
            <ErrorComponents />
          ) : (
            <Sheet>
              <div className=" bg-slate-50 h-full">
                <NavComponents />
                <div className=" h-16"></div>
                <div className=" container mx-auto flex flex-col  gap-y-5">
                  <div className=" flex justify-end items-center mt-5">
                    <SheetTrigger asChild>
                      <Button className="flex gap-x-3 bg-basic hover:bg-transparent hover:text-basic hover:border-basic hover:border active:scale-95 duration-300">
                        <FaPlus />
                        <p>Create Contact</p>
                      </Button>
                    </SheetTrigger>
                  </div>
                  {contactsData?.length !== 0 ? (
                    <DataTableComponents
                      data={contactsData}
                      editFunction={editFunction}
                    />
                  ) : (
                    <div className=" h-[600px] bg-white shadow rounded-lg flex flex-col gap-y-3 justify-center items-center">
                      <EmptyComponents />
                      <p className=" text-basic text-lg font-light">
                        There is no List....
                      </p>
                    </div>
                  )}
                </div>
                <SheetContent onClose={() =>handleEditForm()}>
                  <SheetHeader>
                    <SheetTitle className="font-headings text-basic font-semibold">
                      Contact Information
                    </SheetTitle>
                    <SheetDescription className=" text-basic font-light">
                      Make your contact profile here. Click save when you're
                      done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <FormComponents editData={editData} handleEditForm={handleEditForm} />
                  </div>
                </SheetContent>
              </div>
            </Sheet>
          )}
        </>
      )}
    </AuthGuard>
  );
};

export default HomePages;
