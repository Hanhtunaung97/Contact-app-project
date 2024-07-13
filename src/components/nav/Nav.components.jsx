import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const NavComponents = () => {
  return (
    <nav className="  w-full fixed h-16 backdrop:blur bg-white shadow">
      <div className="container mx-auto  flex justify-between items-center h-full">
        <h1 className=" font-headings font-semibold text-basic select-none text-lg">
          MMS IT
        </h1>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default NavComponents;
