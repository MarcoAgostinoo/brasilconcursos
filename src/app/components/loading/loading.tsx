import styles from "./loading.module.css";
export default function Loading() {
  return (
    <div className={styles.containerLoading}>
        <h1>Loading...</h1>
      {" "}
      <div className={styles.loader}>
        {" "}
        <div className={styles.orbit}></div>{" "}
      </div>{" "}
    </div>
  );
}
