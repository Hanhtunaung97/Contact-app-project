import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ErrorComponents = () => {
  const nav = useNavigate();
  return (
    <div className=" text-danger flex flex-col gap-y-5 justify-center items-center py-3 shadow  my-5">
      <img src="./public/error.svg" alt="errorImage" width={500} />
      <Button onClick={() => nav("/")} className=" text-danger border-danger border rounded-lg bg-white hover:bg-danger hover:text-white duration-300 active:scale-95">
        Go Back
      </Button>
    </div>
  );
};

export default ErrorComponents;
