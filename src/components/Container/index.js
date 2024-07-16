import styles from "./Container.module.css";

function Container({ children }) {
  return (
    <>
      <section class={styles.container}>{children}</section>
    </>
  );
}
export default Container;
