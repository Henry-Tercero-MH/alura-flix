import React from "react";
import styles from "./Card.module.css";
import iconDelete from "./Vector.png";
import iconEdit from "./Edit.png";

const Card = (props) => {
  const { nombre, video, comentario, id } = props.datos;
  const { color, eliminarVideo, setVideoParaEditar } = props;
  const colorSombra = {
    boxShadow: `inset 0 0 15px ${color}`,
  };

  // Función para extraer el ID del video de YouTube desde el enlace
  const getYouTubeId = (youtubeLink) => {
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = youtubeLink.match(youtubeRegex);
    return match && match[1];
  };

  const embedId = getYouTubeId(video);

  return (
    <>
      <div className={styles.card} style={colorSombra}>
        <div className={styles.Cajaimagen}>
          {embedId && (
            <iframe
              src={`https://www.youtube.com/embed/${embedId}`}
              title={nombre}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web- share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className={styles.caja}>
          <h3>{nombre}</h3>
          <h4>{comentario}</h4>
          <div className={styles.containerBoton}>
            <button className={styles.boton} onClick={() => eliminarVideo(id)}>
              <img src={iconDelete} alt="Eliminar" />
              <h3>Eliminar</h3>
            </button>

            <button
              className={styles.boton}
              onClick={() => setVideoParaEditar(props.datos)} // Asegúrate de pasar todos los datos del video
            >
              <img src={iconEdit} alt="Editar" />
              <h3>Editar</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
