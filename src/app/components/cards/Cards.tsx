import React from "react";
import styles from "./cards.module.css";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface CardPostProps {
  title: string;
  subtitle: string;
  author: string;
  createAt: string;
  urlImage: string;
}

export default function Cards({
  title,
  subtitle,
  author,
  createAt,
  urlImage,
}: CardPostProps) {
  const formattedDateString = format(new Date(createAt), "dd 'de' MMM 'de' yyyy, HH:mm", { locale: ptBR });

  return (
    <div className={styles.card}>
      <section className={styles.sectionone}>
        <Link href="/" className={styles.card}>
          <div className={styles.imgcard}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "30vh",
                backgroundColor: "blue",
              }}
            >
              <Image
                src={urlImage}
                alt={subtitle}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className={styles.textcard}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <div className={styles.authordata}>
              <p>{author}</p>
              <p style={{ marginTop: "-20px" }}>{formattedDateString}</p>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
