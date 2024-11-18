import styles from "./empty.module.css";
export default function Empty() {
  return (
    <div className={styles.containerEmpty}>
        <h1>Opa, esse artigo ainda não existe, volte mais tarde</h1>
    </div>
  );
}
