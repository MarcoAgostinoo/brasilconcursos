'use client';

import React, { useState } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/header/Header";
import Cards from "@/app/components/cards/Cards";
import ClientOnly from "@/app/components/clientcomponent/ClientOnly"; // Certifique-se de que o caminho está correto

export default function Home() {
  const [data, setData] = useState(null);

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.firstsection}>
        <Link href={"/pages/posts"} className={styles.bannertop}>
          <div className={styles.bannertopleft}>
            <div>
              <Image
                src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Banner 1"
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
          
          <div className={styles.bannertopright}>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              itaque vel cupiditate. Nemo, dolorem quod quia eos sequi acusamus
              obcaecati! Nobis dolores placeat alias blanditiis, deleniti
              consectetur quam aut doloremque.
            </p>
            <div>
              <p>Marco Antonio</p>
              <p>14/Novembro/2024</p>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.cardsfirstsection}>
        {data?.posts.map((post, index) => (
          <Cards
            key={post.id}
            title={post.title}
            author={post.author.name}
            createAt={post.updatedAt}
            subtitle={post.subtitle}
            urlImage={post.coverImage.url} // Passando a URL correta para o componente `Cards`
          />
        ))}
      </div>

      <ClientOnly setData={setData} /> {/* Passa a função setData para o componente cliente */}
    </div>
  );
}
