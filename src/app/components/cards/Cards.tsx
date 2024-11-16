import styles from "./cards.module.css";
import Image from "next/image";
import Link from "next/link";

interface CardPostProps {
  title: string;
  subtitle: string;
  author: string;
  createAt: string;
  urlImage: string;
}

export default function Cards({ title, subtitle, author, createAt, urlImage }: CardPostProps) {
  return (
    <div className={styles.card}>
      <section className={styles.sectionone}>
        <Link href="/" className={styles.card}>
          <div className={styles.imgcard}>
            <div className={styles.imgInner}>
              <Image
                src={urlImage} // Corrigindo a propriedade aqui
                layout="fill"
                objectFit="cover"
                alt={title} // Adicionando uma descrição alternativa
              />
            </div>
          </div>
          <div className={styles.textcard}>
            <h2>{subtitle}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              itaque vel cupiditate. Nemo, alias blanditiis, deleniti
              consectetur quam aut doloremque. dolorem quod quia eos sequi acusamus
              obcaecati! Nobis dolores placeat
            </p>
            <div>
              <p>{author}</p>
              <p>{createAt}</p>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
