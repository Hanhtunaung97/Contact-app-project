import React, { useEffect } from "react";
import { useProfileQuery } from "../../store/services/Endpoints/auth.Endpoints";
import { useNavigate } from "react-router-dom";
import LoadingComponents from "../tools/Loading.components";

const AuthGuard = ({ check, token, children,path="/" }) => {
  const nav = useNavigate();
  const { isError, isLoading, data } = useProfileQuery();
  useEffect(() => {
    // console.log("authGuard", check, token, isError, isLoading, data);
    if (check) {
      localStorage.setItem("token", JSON.stringify(token));
    } else if (data?.success && localStorage.getItem("token")) {
      nav("/home ");
    } else if (isError) {
      nav(path);
    }
  }, [check, data, isError]);
  return <>{isLoading ? <LoadingComponents /> : <>{children}</>} </>;
};

export default AuthGuard;
