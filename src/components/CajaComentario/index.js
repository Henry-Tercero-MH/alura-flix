import React, { useState } from "react";
import styles from "./CajaComentario.module.css";

const CajaComentario = (props) => {
  const [error, setError] = useState("");
  const [placeholder, setPlaceholder] = useState("Ingresa tu comentario aquí");

  const manejarCambio = (e) => {
    props.setComentario(e.target.value);
    if (e.target.value === "") {
      setError("El comentario no puede estar vacío");
    } else {
      setError("");
    }
  };

  const manejarBlur = () => {
    if (props.comentario === "") {
      setError("El comentario no puede estar vacío");
    }
    setPlaceholder("Ingresa tu comentario aquí");
  };

  const manejarFocus = () => {
    setPlaceholder("¿De qué se trata este vídeo?");
  };

  return (
    <>
      <div className={styles.cajaComentario}>
        <label>{props.titulo}</label>
        <textarea
          required={props.required}
          onChange={manejarCambio}
          onBlur={manejarBlur}
          onFocus={manejarFocus}
          value={props.comentario}
          placeholder={placeholder}
          style={{ borderColor: error ? "var(--color-rojo)" : undefined }}
        ></textarea>
        {error && <p style={{ color: "var(--color-rojo)" }}>{error}</p>}
      </div>
    </>
  );
};

export default CajaComentario;
