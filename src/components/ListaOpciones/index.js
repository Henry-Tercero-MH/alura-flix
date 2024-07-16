import React from "react";
import styles from "./ListaOpciones.module.css";

const ListaOpciones = ({ titulo, valor, setEquipo }) => {
  const Equipos = ["Front end", "Back end", "Innovacion y Gestion"];

  const manejarCambio = (e) => {
    setEquipo(e.target.value);
  };

  return (
    <div className={styles.lista}>
      <label>{titulo}</label>
      <select value={valor} onChange={manejarCambio}>
        <option value="" disabled hidden>
          Seleccione una categoría
        </option>
        {Equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
