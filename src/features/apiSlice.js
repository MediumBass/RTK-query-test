import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: (builder) => ({

        getPosts: builder.query({
            query: (page) => `posts?_page=${page}`,
        }),
    }),
});

export const { useGetPostsQuery } = postApi;