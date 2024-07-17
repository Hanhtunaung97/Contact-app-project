import React from "react";

const ContainerComponents = ({ children }) => {
  return (
    <div className="w-full  xl:w-3/5 xl:mx-auto my-60 md:my-0 md:flex justify-center items-center h-full">
      {children}
    </div>
  );
};

export default ContainerComponents;
