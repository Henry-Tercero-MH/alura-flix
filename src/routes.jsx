const { default: Home } = require("./pages/Inicio");
const { BrowserRouter, Route, Routes } = require("react-router-dom");

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
