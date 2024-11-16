'use client';

import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

// Certifique-se de que o servidor GraphQL aceita o argumento orderBy dessa forma
const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts(orderBy: updatedAt_DESC) {
      id
      slug
      subtitle
      title
      updatedAt
      coverImage {
        url
      }
      author {
        name
      }
    }
  }
`;

interface AllPosts {
  posts: {
    id: string;
    slug: string;
    subtitle: string;
    title: string;
    updatedAt: string;
    coverImage: {
      url: string;
    };
    author: {
      name: string;
    };
  }[];
}

export default function ClientOnly({ setData }: { setData: (data: AllPosts) => void }) {
  const { loading, error, data } = useQuery<AllPosts>(GET_ALL_POSTS);

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data, setData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return null; // Não renderiza nada diretamente, apenas passa os dados para o componente pai
}
