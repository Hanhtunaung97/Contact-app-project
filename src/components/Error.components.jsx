import React from "react";
import { IoWarning } from "react-icons/io5";

const ErrorComponents = ({ children }) => {
  return (
    <div className=" text-danger flex justify-center items-center py-3 border shadow gap-x-3 my-5">
      <IoWarning />
      <h1>{children}</h1>
    </div>
  );
};

export default ErrorComponents;
