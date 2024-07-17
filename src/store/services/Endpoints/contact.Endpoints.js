import apiServices from "../apiServices";

const contactEndpoints = apiServices.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (formData) => ({
        url: `/contact`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["contact"],
    }),
    getAllContacts: builder.query({
      query: () => ({
        url: `/contact`,
        method: "GET",
      }),
      providesTags: ["contact"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact"],
    }),
    updateContact: builder.mutation({
      query: (formData) => ({
        url: `/contact/${formData.id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});
export const {
  useCreateContactMutation,
  useGetAllContactsQuery,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactEndpoints;
