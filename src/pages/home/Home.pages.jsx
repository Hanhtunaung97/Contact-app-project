import React from "react";
import {
  AuthGuard,
  EmptyComponents,
  FormComponents,
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

const HomePages = () => {
  return (
    <AuthGuard>
      <Sheet>
        <div className=" bg-slate-50">
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
            <div className=" h-[600px] bg-white shadow rounded-lg flex flex-col gap-y-3 justify-center items-center">
              <EmptyComponents />
              <p className=" text-basic text-lg font-light">
                There is no List....
              </p>
            </div>
          </div>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="font-headings text-basic font-semibold">
                Contact Information
              </SheetTitle>
              <SheetDescription className=" text-basic font-light">
                Make your contact profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <FormComponents />
            </div>
            
          </SheetContent>
        </div>
      </Sheet>
    </AuthGuard>
  );
};

export default HomePages;
