import React from "react";
import { EmptyComponents, NavComponents } from "../../components";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

const HomePages = () => {
  return (
    <div className=" bg-slate-50">
      <NavComponents />
      <div className=" h-16"></div>
      <div className=" container mx-auto flex flex-col  gap-y-5">
        <div className=" flex justify-end items-center mt-5">
          <Button className="flex gap-x-3 bg-basic hover:bg-white hover:text-basic hover:border-basic hover:border active:scale-95 duration-300">
            <FaPlus />
            <p>Create Contact</p>
          </Button>
        </div>
        <div className=" h-[600px] bg-white shadow rounded-lg flex flex-col gap-y-3 justify-center items-center">
            <EmptyComponents/>
            <p className=" text-basic text-lg font-light">There is no List....</p>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
