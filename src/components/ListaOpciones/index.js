import React from "react";
import styles from "./ListaOpciones.module.css";

const ListaOpciones = ({ titulo, valor, onChange }) => {
  const Equipos = ["Front end", "Back end", "Innovacion y Gestion"];

  const manejarCambio = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.lista}>
      <label>{titulo}</label>
      <select value={valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
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
