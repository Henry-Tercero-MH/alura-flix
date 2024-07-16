import styles from "./Boton.module.css";

const Boton = (props) => {
  return (
    <>
      <div className={styles.boton}>
        <button>{props.nombre}</button>
      </div>
    </>
  );
};
export default Boton;
