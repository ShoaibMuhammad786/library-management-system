import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const requestApi = createApi({
  reducerPath: "requestApi",
  baseQuery,
  tagTypes: ["Requests"],
  endpoints: (builder) => ({
    // get requests query (pagination + limit + search)
    getRequests: builder.query({
      query: ({ page, limit, search, status }) => ({
        url: `/requests`,
        params: {
          page,
          limit,
          status,
          ...(search && { search }),
        },
      }),
      providesTags: ["Requests"],
    }),
  }),
});

export const { useGetRequestsQuery } = requestApi;
