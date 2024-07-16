import Banner from "components/Banner";
import Equipo from "components/Equipo";
import Modal from "components/ModalEditar";
import Popular from "components/Popular";
import { v4 as uuid } from "uuid";
const Home = (props) => {
  const { agregandoVideos, eliminarVideo, setVideoParaEditar } = props;
  const equipos = [
    {
      id: uuid(),
      titulo: "Front end",
      colorTarjeta: "#6bd1ff",
      colorFondoTarjeta: "#191919",
    },
    {
      id: uuid(),
      titulo: "Back end",
      colorTarjeta: "#00c86f",
      colorFondoTarjeta: "#191919",
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorTarjeta: "#ffba05",
      colorFondoTarjeta: "#191919",
    },
  ];

  return (
    <>
      <Banner img="Main">
        <Popular />
      </Banner>
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          agregandoVideos={agregandoVideos.filter(
            (video) => video.equipo === equipo.titulo
          )}
          eliminarVideo={eliminarVideo}
          setVideoParaEditar={setVideoParaEditar}
        />
      ))}
    </>
  );
};

export default Home;
