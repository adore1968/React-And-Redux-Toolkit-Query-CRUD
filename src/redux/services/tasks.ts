import { Task, Tasks } from "@/utils/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  tagTypes: ["tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query<Tasks, null>({
      query: () => "tasks",
      providesTags: ["tasks"],
    }),
    getTask: builder.query<Task, string>({
      query: (id) => `tasks/${id}`,
      providesTags: ["tasks"],
    }),
    createTask: builder.mutation<null, Task>({
      query: (newTask) => ({
        url: "tasks",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ["tasks"],
    }),
    deleteTask: builder.mutation<null, number | undefined>({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),
    updateTask: builder.mutation<null, Task>({
      query: (newTask) => ({
        url: `tasks/${newTask.id}`,
        method: "PUT",
        body: newTask,
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export default tasksApi;
export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
