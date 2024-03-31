import { apiSlice } from "./apiSlice";

const Tasks_URL = "http://localhost:5000/api/tasks";

export const tasksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.mutation({
      query: (data) => ({
        url: `${Tasks_URL}/`,
        method: "POST",
        body: data,
      }),
    }),
    addTasks: builder.mutation({
      query: (data) => ({
        url: `${Tasks_URL}/add`,
        method: "POST",
        body: data,
      }),
    }),
    updateTasks: builder.mutation({
      query: () => ({
        url: `${Tasks_URL}/update`,
        method: "PUT",
      }),
    }),
    deleteTask: builder.mutation({
      query: ({ data }) => ({
        url: `${Tasks_URL}/delete`,
        method: "DELETE",
        body: data,
      }),
    }),
    deleteAllTasks: builder.mutation({
      query: () => ({
        url: `${Tasks_URL}/delete/all`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTasksMutation,
  useAddTasksMutation,
  useUpdateTasksMutation,
  useDeleteTaskMutation,
  useDeleteAllTasksMutation,
} = tasksApiSlice;
