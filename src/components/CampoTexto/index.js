import { useState } from "react";
import styles from "./CampoTexto.module.css";

const CampoTexto = (props) => {
  const [error, setError] = useState("");
  const [placeholder, setPlaceholder] = useState(props.placeholder);

  const manejarCambio = (e) => {
    props.setValor(e.target.value);
    if (e.target.value === "") {
      setError(props.errorText);
    } else {
      setError("");
    }
  };

  const manejarBlur = () => {
    if (props.valor === "") {
      setError(props.errorText);
    }
    setPlaceholder(props.placeholder);
  };

  const manejarFocus = () => {
    setPlaceholder(props.focusPlaceholder);
  };

  return (
    <>
      <div className={styles.CampoTexto}>
        <div>
          <label>{props.titulo}</label>
        </div>
        <div>
          <input
            placeholder={placeholder}
            type={props.type}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            onBlur={manejarBlur}
            onFocus={manejarFocus}
            style={{ borderColor: error ? "var(--color-rojo)" : undefined }}
          />
        </div>
        {error && <p style={{ color: "var(--color-rojo)" }}>{error}</p>}
      </div>
    </>
  );
};

export default CampoTexto;
