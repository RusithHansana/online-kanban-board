import { apiSlice } from "./apiSlice";

const Boards_URL = "http://localhost:5000/api/boards";

export const boardsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBoards: builder.mutation({
      query: (data) => ({
        url: `${Boards_URL}/`,
        method: "POST",
        body: data,
      }),
    }),
    addBoards: builder.mutation({
      query: (data) => ({
        url: `${Boards_URL}/add`,
        method: "POST",
        body: data,
      }),
    }),
    updateBoard: builder.mutation({
      query: () => ({
        url: `${Boards_URL}/update`,
        method: "PUT",
      }),
    }),
    deleteBoard: builder.mutation({
      query: (data) => ({
        url: `${Boards_URL}/delete`,
        method: "DELETE",
        body: data,
      }),
    }),
    deleteAllBoards: builder.mutation({
      query: () => ({
        url: `${Boards_URL}/delete/all`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBoardsMutation,
  useAddBoardsMutation,
  useUpdateBoardMutation,
  useDeleteBoardMutation,
  useDeleteAllBoardsMutation,
} = boardsApiSlice;
