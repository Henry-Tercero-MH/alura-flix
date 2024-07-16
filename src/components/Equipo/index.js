import Card from "components/Card";
import styles from "./Equipo.module.css";

const Equipo = (props) => {
  const { agregandoVideos, eliminarVideo, setVideoParaEditar } = props;
  //destructurar el props
  const { titulo, colorTarjeta, id } = props.datos;
  const obj = {
    backgroundColor: colorTarjeta,
  };
  return (
    <>
      <section className={styles.equipo}>
        <h3 className={styles.titulo} style={obj}>
          {titulo}
        </h3>
        <div className={styles.instructores}>
          {agregandoVideos.map((video, index) => (
            <Card
              datos={video}
              key={index}
              eliminarVideo={eliminarVideo}
              setVideoParaEditar={setVideoParaEditar}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Equipo;
