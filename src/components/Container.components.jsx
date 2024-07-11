import React from "react";

const ContainerComponents = ({ children }) => {
  return (
    <div className=" w-3/5 mx-auto h-full flex justify-center items-center">
      {children}
    </div>
  );
};

export default ContainerComponents;
