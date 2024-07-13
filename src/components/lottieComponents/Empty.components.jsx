import React from "react";
import Lottie from "lottie-react";
import empty from "../../lottie/empty.json";

const EmptyComponents = () => {
  return (
    <div className=" h-72 w-72">
      <Lottie animationData={empty} loop={true} />
    </div>
  );
};

export default EmptyComponents;
