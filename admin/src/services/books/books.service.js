import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DEV_BASE_URL } from "../../api/api";
import { customBaseQuery } from "../customBaseQuery";

export const booksAPi = createApi({
  reducerPath: "booksApi",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books/get-books",
    }),
    getBookById: builder.query({
      query: (id) => `/books/${id}`,
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: `/books/add-book`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetBookByIdQuery, useAddBookMutation } =
  booksAPi;
