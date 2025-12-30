import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vehiculos from "./pages/Vehiculos";
import VehiculoDetalle from "./pages/VehiculoDetalle";
import ContactarAgente from "./pages/ContactarAgente";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";
import GuiaDiseno from "./pages/GuiaDiseno";
import SolicitudEnviada from "./pages/SolicitudEnviada";

function App() {
  return (
    <Router>
      <Navbar /> {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehiculos" element={<Vehiculos />} />
        <Route path="/vehiculo/:id" element={<VehiculoDetalle />} />
        <Route path="/contactar-agente" element={<ContactarAgente />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/guia-abc" element={<GuiaDiseno />} />
        <Route path="/solicitud-enviada" element={<SolicitudEnviada />} />
      </Routes>
    </Router>
  );
}


export default App;

