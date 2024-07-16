import styles from "./Nuevo.module.css";
import Formulario from "components/Formulario";

const NuevoVideo = (props) => {
  const { registrarVideo } = props;
  return (
    <div className={styles.container}>
      <Formulario registrarVideo={registrarVideo} />
    </div>
  );
};

export default NuevoVideo;
