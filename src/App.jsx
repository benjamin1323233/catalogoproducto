import Administrador from "./components/pages/Administrador";
import DetalleProducto from "./components/pages/DetalleProducto";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import CardProducto from "./components/pages/producto/CardProducto";
import { Route,Routes,BrowserRouter } from "react-router";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";
import { useState } from "react";

function App() {
  //no hace falta json poruqe no es un objeto
  const usuariologueado = sessionStorage.getItem("userkey")||false 
  const [usuarioAdmin, setUsuarioadmin]=useState(usuariologueado)
  return (
    <>
 <BrowserRouter>
      <Menu></Menu>
      <main>
<Routes>
  <Route path="/" element={<Inicio></Inicio>}></Route>
  <Route path="/detalle" element={<DetalleProducto></DetalleProducto>}></Route>
  <Route path="/login" element={<Login setUsuarioadmin={setUsuarioadmin} ></Login>} ></Route>
  <Route path="/admin" element={<Administrador></Administrador>}></Route>
  <Route path="/admin/crear" element={<FormularioProducto></FormularioProducto>}></Route>
  <Route path="/admin/editar" element={<FormularioProducto></FormularioProducto>}></Route>
  <Route path="*" element={<Error404></Error404>}></Route>
</Routes>
      </main>
      <Footer></Footer>
       </BrowserRouter>
    </>
  );
}

export default App;
