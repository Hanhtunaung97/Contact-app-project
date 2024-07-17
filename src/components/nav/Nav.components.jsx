import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSignOutMutation } from "../../store/services/Endpoints/auth.Endpoints";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const NavComponents = () => {
  const nav = useNavigate();
  const [logoutFun] = useSignOutMutation();
  const handleLogoutBtn = async () => {
    await logoutFun();
    localStorage.removeItem("token");
    nav("/");
    toast.success("You did it.", {
      description: "Your have been successfully logout !",
      richColors: true,
      dismissible: true,
      duration: 3000,
      style: {
        background: "#fff",
        color: "#107a8b",
      },
    });
  };
  return (
    <nav className="  w-full z-50 fixed h-16 backdrop:blur bg-white shadow">
      <div className="container mx-auto  flex justify-between items-center h-full">
        <h1 className=" font-headings font-semibold text-basic select-none text-lg">
          MMS IT
        </h1>
        <div className=" flex items-center justify-end gap-x-5">
          <Button
            onClick={handleLogoutBtn}
            type="button"
            variant="outline"
            className=" w-auto bg-white text-basic border hover:border-0 border-basic hover:bg-basic hover:text-white  duration-300 active:scale-95"
          >
            Sign Out
          </Button>
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
