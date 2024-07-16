import Home from "./pages/Inicio/index.js";
import Pie from "components/Pie/index.js";
import Container from "components/Container/index.js";
import NuevoVideo from "pages/Nuevo";
import Header from "components/Header/index.js";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import ModalEditar from "components/ModalEditar";
const { BrowserRouter, Route, Routes } = require("react-router-dom");

function AppRoutes() {
  const [videoParaEditar, setVideoParaEditar] = useState(null);
  const [agregandoVideos, setAgregandoVideos] = useState([
    {
      id: uuid(),
      nombre: "Desarrollador Front end",
      equipo: "Front end",
      imagen: "",
      video: "https://youtu.be/-Ou5c3A225k?si=Ca4cvFep4uSsWkLZ",
      comentario: "Ruta para volverse un desarrollador Front end",
    },
    {
      id: uuid(),
      nombre: "Equipo Front end ",
      equipo: "Front end",
      imagen: "",
      video: "https://youtu.be/rpvrLaBQwgg?si=_aH8dZZwivfPQ93v",
      comentario: "¿Estás empezando tus estudios de Programación?  ",
    },
    {
      id: uuid(),
      nombre: "Como un desarrollador Front end usa Figma ",
      equipo: "Front end",
      imagen: "",
      video: "https://youtu.be/UuAX5azcvDQ?si=KB70QDIdHFWaQRMS",
      comentario: "¿Cómo un desarrollador Front End utiliza el Figma?  ",
    },
    {
      id: uuid(),
      nombre: "Simplificando el Backend",
      equipo: "Back end",
      imagen: "",
      video: "https://youtu.be/XuSXJ9DUcvY?si=5nLzd56r_nVj4qF7",
      comentario: "¿Cómo un desarrollador Front End utiliza el Figma?  ",
    },

    {
      id: uuid(),
      nombre: "Desmistificando el Back-End",
      equipo: "Back end",
      imagen: "",
      video: "https://www.youtube.com/watch?v=LLt7FreeHfQ",
      comentario: "¿Por qué debería comenzar mi carrera con backend?  ",
    },
    {
      id: uuid(),
      nombre: "De Front End a Back End con Java",
      equipo: "Back end",
      imagen: "",
      video: "https://youtu.be/3aK3Omo2RrU?si=M0FGRk65KvyF5SXV",
      comentario: "¿Por qué debería comenzar mi carrera con backend?  ",
    },
    {
      id: uuid(),
      nombre: "Como desarrollar tu Marca Personal #AluraMás",
      equipo: "Innovacion y Gestion",
      imagen: "",
      video: "https://www.youtube.com/watch?v=LAK-RduBJUs",
      comentario:
        "¿cuál es la importancia de tener una Marca Personal bien desarrollada? ",
    },
    {
      id: uuid(),
      nombre: "7 Soft Skills más demandadas de 2024 ",
      equipo: "Innovacion y Gestion",
      imagen: "",
      video: "https://youtu.be/_-9grhDhxiU?si=KOVgQdZiqtL7a6pl",
      comentario: " Soft Skills",
    },
    {
      id: uuid(),
      nombre: "¿Qué son las Soft Skills? ",
      equipo: "Innovacion y Gestion",
      imagen: "",
      video: "https://youtu.be/vhwspfvI52k?si=8hbHga3Ap3VFbGC6",
      comentario:
        "¿Qué son las Softskills y por qué es tan importante desarrollarlas para posicionarse en el mercado laboral?",
    },
  ]);

  const registrarVideo = (videoNuevo) => {
    setAgregandoVideos([...agregandoVideos, videoNuevo]);
  };

  const eliminarVideo = (id) => {
    setAgregandoVideos((prevVideos) =>
      prevVideos.filter((video) => video.id !== id)
    );
  };

  const editarVideo = (videoActualizado) => {
    setAgregandoVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === videoActualizado.id ? videoActualizado : video
      )
    );
    setVideoParaEditar(null); // Cierra el modal después de guardar
  };

  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                agregandoVideos={agregandoVideos}
                eliminarVideo={eliminarVideo}
                setVideoParaEditar={setVideoParaEditar}
              />
            }
          ></Route>
          <Route
            path="/formulario"
            element={<NuevoVideo registrarVideo={registrarVideo} />}
          ></Route>
        </Routes>
      </Container>
      {videoParaEditar && (
        <ModalEditar
          video={videoParaEditar}
          cerrarModal={() => setVideoParaEditar(null)}
          editarVideo={editarVideo}
        />
      )}
      <Pie />
    </BrowserRouter>
  );
}

export default AppRoutes;
