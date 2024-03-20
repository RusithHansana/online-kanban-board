import { apiSlice } from "./apiSlice";

const Cards_URL = "http://localhost:5000/api/cards";

export const cardsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.mutation({
      query: (data) => ({
        url: `${Cards_URL}/`,
        method: "POST",
        body: data,
      }),
    }),
    add: builder.mutation({
      query: (data) => ({
        url: `${Cards_URL}/add`,
        method: "POST",
        body: data,
      }),
    }),
    updateCards: builder.mutation({
      query: () => ({
        url: `${Cards_URL}/update`,
        method: "PUT",
      }),
    }),
    deleteCard: builder.mutation({
      query: ({ data }) => ({
        url: `${Cards_URL}/delete`,
        method: "DELETE",
        body: data,
      }),
    }),
    deleteAllCards: builder.mutation({
      query: () => ({
        url: `${Cards_URL}/delete/all`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCardsMutation,
  useAddMutation,
  useUpdateCardsMutation,
  useDeleteCardMutation,
  useDeleteAllCardsMutation,
} = cardsApiSlice;
