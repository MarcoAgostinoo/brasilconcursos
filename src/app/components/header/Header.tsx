import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <h1 className="btn text-white btn-primary">Brasil Concursos</h1>
        </Link>
      </div>
    </div>
  );
}
