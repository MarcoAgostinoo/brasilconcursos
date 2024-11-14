import React from "react";
import styles from "./post.module.css";
import Header from "@/app/components/header/Header";
import Image from "next/image"; // Componente Image do Next.js
import Link from "next/link";

export default function Posts() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.firstsection}>
        <div className={styles.bannertop}>
        <Link className={styles.linkvoltar} href="/">
          <h1 className="btn text-white btn-primary">Voltar</h1>
        </Link>
          <div className={styles.firstbanner}>
            <Image
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Banner 1"
              fill /* Utiliza a propriedade fill para ocupar o espaço do contêiner */
              style={{ objectFit: "cover" }} /* Cobrir o contêiner sem distorção */
              priority /* Carregamento prioritário se necessário */
            />
          </div>
          
          {/* Repetição de banners: considere mapear dados para evitar duplicação */}
          <div className={styles.bannerbottom}>
          <div className={styles.autoranddata}>
              <p>Marco Antonio</p>
              <p>14/Novembro/2024</p>
            </div>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              itaque vel cupiditate. Nemo, dolorem quod quia eos sequi accusamus
              obcaecati! Nobis dolores placeat alias blanditiis, deleniti
              consectetur quam aut doloremque.
            </p>
          </div>

          <div className={styles.bannerbottom}>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              itaque vel cupiditate. Nemo, dolorem quod quia eos sequi accusamus
              obcaecati! Nobis dolores placeat alias blanditiis, deleniti
              consectetur quam aut doloremque.
            </p>
          </div>
        </div>
      </div> 
    </div>
  );
}
