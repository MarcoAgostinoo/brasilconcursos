import React from "react";
import { gql } from "@apollo/client";
import { client } from "@/app/apolloClient";
import styles from "./post.module.css";
import Header from "@/app/components/header/Header";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { notFound } from "next/navigation";

// Definindo a consulta GraphQL fora do JSX
const GET_POST = gql`
  query GetPost($slugPost: String!) {
    post(where: { slug: $slugPost }) {
      id
      title
      subtitle
      slug
      coverImage {
        url
      }
      content {
        json
      }
      coverImage2 {
        url
      }
      content2 {
        json
      }
      author {
        name
      }
      createdAt
    }
  }
`;

// Função para buscar dados com GraphQL
async function fetchPost(slug: string) {
  try {
    const { data } = await client.query({
      query: GET_POST,
      variables: { slugPost: slug },
    });
    return data.post; // Retorna os dados completos do post
  } catch (error) {
    console.error("Erro ao buscar o post:", error); // Log para depuração
    throw error; // Re-lança o erro
  }
}

// Componente que renderiza a página do post
const PostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await fetchPost(params.slug); // Buscando o post com o slug

  if (!post) {
    return <div>Post não encontrado!</div>; // Caso o post não exista
  }

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.firstsection}>
        <div className={styles.bannertop}>
          <Link className={styles.linkvoltar} href="/">
            <h1 className="btn text-white btn-primary">Voltar</h1>
          </Link>
          <div className={styles.firstbanner}>
