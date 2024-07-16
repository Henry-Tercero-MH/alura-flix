import styles from "./Formulario.module.css";
import CampoTexto from "../CampoTexto/index.js";
import ListaOpciones from "components/ListaOpciones";
import CajaComentario from "components/CajaComentario";
import Boton from "components/Boton";
import { useState } from "react";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [equipo, setEquipo] = useState("");
  const [comentario, setComentario] = useState("");
  const { registrarVideo } = props;
  const manejarEnvio = (e) => {
    e.preventDefault();

    const datosAEnviar = {
      nombre,
      equipo,
      imagen,
      video,
      comentario,
    };
    registrarVideo(datosAEnviar);
  };

  return (
    <section className={styles.formulario}>
      <form onSubmit={manejarEnvio}>
        <h1 className={styles.titulo}>Nuevo Video</h1>
        <span>
          Complete el formulario para crear una nueva tarjeta de video
        </span>
        <h2>Crear Tarjeta</h2>
        <div className={styles.cajaTexto}>
          <CampoTexto
            titulo={"Título"}
            placeholder={"Ingrese el título"}
            type={"text"}
            required={true}
            valor={nombre}
            setValor={setNombre}
            focusPlaceholder="¿Cuál es el título de este vídeo?"
            errorText="El título es obligatorio"
          />
          <ListaOpciones
            titulo={"Categoria"}
            placeholder={"Seleccione una categoría"}
            valor={equipo}
            setEquipo={setEquipo}
          />
        </div>
        <div className={styles.cajaTexto2}>
          <CampoTexto
            titulo={"Imagen"}
            placeholder={"Ingrese el enlace de la imagen"}
            required={true}
            valor={imagen}
            setValor={setImagen}
            focusPlaceholder="¿Cuál es la url de la imagen?"
            errorText="El enlace es obligatorio"
          />
          <CampoTexto
            titulo={"Video"}
            placeholder={"Ingrese el enlace del video"}
            required={true}
            valor={video}
            setValor={setVideo}
            focusPlaceholder="¿Cuál es la url del video?"
            errorText="El enlace es obligatorio"
          />
        </div>
        <CajaComentario
          titulo={"Descripción"}
          required={true}
          valor={comentario}
          setComentario={setComentario}
        />
        <div className={styles.cajaBotones}>
          <Boton nombre={"Guardar"} />
          <Boton nombre={"Limpiar"} />
        </div>
      </form>
    </section>
  );
};

export default Formulario;
