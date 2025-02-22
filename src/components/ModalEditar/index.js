import React, { useState, useEffect } from "react";
import styles from "./ModalEditar.module.css";
import CampoTexto from "../CampoTexto/index.js";
import ListaOpciones from "../ListaOpciones/index.js"; // Ajusta la importación según la ubicación real
import CajaComentario from "../CajaComentario/index.js"; // Ajusta la importación según la ubicación real
import Boton from "../Boton/index.js"; // Ajusta la importación según la ubicación real
import cerrarImg from "./cross.png";

const ModalEditar = ({ video, cerrarModal, editarVideo }) => {
  const [nombre, setNombre] = useState(video.nombre || "");
  const [imagen, setImagen] = useState(video.imagen || "");
  const [videoUrl, setVideoUrl] = useState(video.video || "");
  const [equipo, setEquipo] = useState(video.equipo || "");
  const [comentario, setComentario] = useState(video.comentario || "");

  useEffect(() => {
    if (video) {
      setNombre(video.nombre);
      setImagen(video.imagen);
      setVideoUrl(video.video);
      setEquipo(video.equipo);
      setComentario(video.comentario);
    }
  }, [video]);

  const manejarEnvio = (e) => {
    e.preventDefault();

    const videoActualizado = {
      ...video,
      nombre,
      imagen,
      video: videoUrl,
      equipo,
      comentario,
    };
    editarVideo(videoActualizado);
    cerrarModal(); // Cerrar el modal después de editar
  };

  if (!video) {
    return null; // No renderizar nada si no hay video seleccionado
  }

  return (
    <div className={styles.contenedor}>
      <dialog open={true} className={styles.modal}>
        <form onSubmit={manejarEnvio}>
          <div className={styles.cerrarBoton}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={cerrarModal}
            >
              <img src={cerrarImg} alt="Cerrar" />
            </button>
          </div>
          <h1 className={styles.titulo}>Editar Video</h1>
          <CampoTexto
            titulo="Título"
            placeholder="Ingrese el título"
            type="text"
            required={true}
            valor={nombre}
            setValor={setNombre}
            focusPlaceholder="¿Cuál es el título de este vídeo?"
            errorText="El título es obligatorio"
          />
          <ListaOpciones
            titulo="Categoría"
            valor={equipo}
            setEquipo={setEquipo}
          />
          <CampoTexto
            titulo="Imagen"
            placeholder="Ingrese el enlace de la imagen"
            required={true}
            valor={imagen}
            setValor={setImagen}
            focusPlaceholder="¿Cuál es la url de la imagen?"
            errorText="El enlace es obligatorio"
          />
          <CampoTexto
            titulo="Video"
            placeholder="Ingrese el enlace del video"
            required={true}
            valor={videoUrl}
            setValor={setVideoUrl}
            focusPlaceholder="¿Cuál es la url del video?"
            errorText="El enlace es obligatorio"
          />
          <CajaComentario
            titulo="Descripción"
            required={true}
            valor={comentario}
            setComentario={setComentario}
          />
          <div className={styles.botones}>
            <Boton nombre="Guardar" type="submit" />
            <Boton nombre="Cancelar" type="button" onClick={cerrarModal} />
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ModalEditar;
