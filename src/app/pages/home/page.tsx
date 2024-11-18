import React from 'react';
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/header/Header";
import Cards from "@/app/components/cards/Cards";
import Empty from "../../components/empty/Empty";
import { format } from 'date-fns';
import { ptBR } from "date-fns/locale"; 
import { gql } from '@apollo/client';
import { client } from '@/app/apolloClient';

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

async function fetchData() {
  const { data } = await client.query({ query: GET_ALL_POSTS });
  return data.posts;
}

export default async function Home() {
  const posts = await fetchData();

  if (!posts || posts.length === 0) {
    return <Empty />;
  }

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.firstsection}>
        <Link href={"/"} className={styles.bannertop}>
          <div className={styles.bannertopleft}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              {posts[0]?.coverImage?.url && (
                <Image
                  src={posts[0]?.coverImage?.url || ""}
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "10px" }}
                  alt="Imagem de capa"
                />
              )}
            </div>
          </div>

          <div className={styles.bannertopright}>
            <h2>{posts[0]?.title}</h2>
            <p className={styles.subtitle}>{posts[0]?.subtitle}</p>
            <div>
              <p>{posts[0]?.author?.name}</p>
              <p>{format(new Date(posts[0].updatedAt), "dd 'de' MMM 'de' yyyy", { locale: ptBR })}</p>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.cardsfirstsection}>
        {posts.map((post, index) => {
          if (index !== 0) {
            return (
              <Cards
                key={post.id}
                title={post.title}
                author={post.author.name}
                createAt={post.updatedAt}
                subtitle={post.subtitle}
                urlImage={post.coverImage.url}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
