// "use client";

// import React, { useEffect } from 'react';
// import { gql, useQuery } from '@apollo/client';
// import Loading from "../../components/loading/loading";
// import Empty from "../../components/empty/Empty";

// const GET_ALL_POSTS = gql`
//   query GetAllPosts {
//     posts(orderBy: updatedAt_DESC) {
//       id
//       slug
//       subtitle
//       title
//       updatedAt
//       coverImage {
//         url
//       }
//       author {
//         name
//       }
//     }
//   }
// `;

// interface AllPosts {
//   posts: {
//     id: string;
//     slug: string;
//     subtitle: string;
//     title: string;
//     updatedAt: string;
//     coverImage: {
//       url: string;
//     };
//     author: {
//       name: string;
//     };
//   }[];
// }

// export default function ClientOnly({ setData }: { setData: (data: AllPosts) => void }) {
//   const { loading, error, data } = useQuery<AllPosts>(GET_ALL_POSTS);

//   useEffect(() => {
//     if (data) {
//       setData(data);
//     }
//   }, [data, setData]);

//   if (loading) return <Loading />;
//   if (error || !data || data.posts.length === 0) return <Empty />;

//   return null;
// }
