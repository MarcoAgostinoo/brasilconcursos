import styles from "./cards.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Cards() {
  return (
    <div className={styles.card}>
      <section className={styles.sectionone}>
        <Link href="/" className={styles.card}>
          <div className={styles.imgcard}>
            <div className={styles.imgInner}>
              <Image
                src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Banner 1"
                layout="fill" 
                objectFit="cover" 
              />
            </div>
          </div>
          <div className={styles.textcard}>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              itaque vel cupiditate. Nemo, dolorem quod quia eos sequi accusamus
              obcaecati! Nobis dolores placeat alias blanditiis, deleniti
              consectetur quam aut doloremque.
            </p>
            <div>
              <p>Marco Antonio</p>
              <p>14/Novembro/2024</p>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
