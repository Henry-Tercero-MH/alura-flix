import styles from "./Banner.module.css";
function Banner({ img, color, children }) {
  return (
    <>
      <div
        className={styles.capa}
        style={{ backgroundImage: `url("/img/Banner-${img}.png")` }}
      >
        <div class={styles.cajaPopular}>{children}</div>

        <div
          className={styles.gradient}
          style={{ background: `${color}` }}
        ></div>
      </div>
    </>
  );
}
export default Banner;
