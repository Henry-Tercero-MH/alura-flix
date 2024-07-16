import { Link } from "react-router-dom";
import logo from "./LogoMain.png";
import HeaderLink from "../HeaderLink/HeaderLink";
import styles from "./Header.module.css";

function Header({ width }) {
  return (
    <header className={styles.cabecera} style={{ width }}>
      <div>
        <Link to="/">
          <section className={styles.logoContainer}>
            <img src={logo} alt="Logo alura-flix" />
          </section>
        </Link>
      </div>
      <div>
        <nav>
          <HeaderLink url="./">HOME</HeaderLink>
          <HeaderLink url="./formulario">NUEVO VIDEO</HeaderLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
