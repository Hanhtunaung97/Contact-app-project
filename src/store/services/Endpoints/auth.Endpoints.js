import apiServices from "../apiServices";

const authEndpoints = apiServices.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (loginData) => ({
        url: `/login`,
        method: "POST",
        body: loginData,
      }),
    }),
    signUp: builder.mutation({
      query: (regData) => ({
        url: `/register`,
        method: "POST",
        body: regData,
      }),
    }),
  }),
});
export const { useSignInMutation, useSignUpMutation } = authEndpoints;
