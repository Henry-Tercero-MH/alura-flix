import styles from "./Pie.module.css";
import logo from "./image 1.png";

function Pie() {
  return (
    <footer className={styles.pie}>
      <h2>
        <img src={logo} alt="Alura" />
      </h2>
    </footer>
  );
}
export default Pie;
