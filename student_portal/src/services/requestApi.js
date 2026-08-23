import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const requestApi = createApi({
  reducerPath: "requestApi",
  baseQuery,
  tagTypes: ["Requests"],

  endpoints: (builder) => ({
    // Get requests (pagination + limit + search + status)
    getRequests: builder.query({
      query: ({ page, limit, search, status }) => ({
        url: "/requests",
        params: {
          page,
          limit,
          status,
          ...(search && { search }),
        },
      }),

      providesTags: ["Requests"],

      // Cache data for 5 minutes
      keepUnusedDataFor: 300,
    }),

    // Cancel borrow request
    cancelRequest: builder.mutation({
      query: (requestId) => ({
        url: `/requests/${requestId}/cancel`,
        method: "PATCH",
      }),

      // Refetch getRequests after successful cancellation
      invalidatesTags: ["Requests"],
    }),
  }),
});

export const { useGetRequestsQuery, useCancelRequestMutation } = requestApi;
