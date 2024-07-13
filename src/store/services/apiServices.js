import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Base_Endpoints_Url } from "../../lib/constant";

const apiServices = createApi({
  reducerPath: "apiServices",
  baseQuery: fetchBaseQuery({
    baseUrl: Base_Endpoints_Url,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${JSON.parse(token)}`);
      } else {
        headers.delete("authorization");
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
export default apiServices;
