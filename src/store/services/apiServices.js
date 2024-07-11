import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Base_Endpoints_Url } from "../../lib/constant";

const apiServices = createApi({
  reducerPath: "apiServices",
  baseQuery: fetchBaseQuery({
    baseUrl: Base_Endpoints_Url,
  }),
  endpoints: () => ({}),
});
export default apiServices;
