import styled from "styled-components";
import styles from "./Popular.module.css";
// import logo from "./player.png";

const TituloPopulares = styled.h1`
  width: 296px;
  height: 92px;
  background-color: var(--color-frontend);
  color: var(--color-blanco);
  text-align: center;
  border-radius: 10px;
  align-content: center;
  margin-left: 30px;
  font-family: "Roboto";
`;
const SubTitulo = styled.h2`
  position: absolute;
  width: 332.92px;
  height: 54px;
  left: 40.11px;
  top: 498px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 54px;
  display: flex;
  align-items: center;
  color: var(--color-blanco);
`;
const Texto = styled.label`
  position: absolute;
  width: 662.84px;
  height: 110px;
  left: 43.12px;
  top: 561px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: var(--color-blanco);
`;

function Popular(props) {
  return (
    <>
      <div className={styles.popular}>
        <div className={styles.cajaTexto}>
          <TituloPopulares>FRONTEND</TituloPopulares>
          <SubTitulo>Challenge React</SubTitulo>
          <Texto>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </Texto>
        </div>
        <div className={styles.cajaImagen}>
          <iframe
            src="https://www.youtube.com/embed/rpvrLaBQwgg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default Popular;
