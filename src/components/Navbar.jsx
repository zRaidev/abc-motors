import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Car, CalendarCheck, Users, Phone } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md font-montserrat">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + navegación */}
        <div className="flex items-center gap-28">
          <h1 className="text-3xl font-bold font-montserrat">
            <Link to="/">ABC Motors</Link>
          </h1>
          <ul className="hidden md:flex space-x-6 text-lg font-medium items-center">
            <li className="flex items-center gap-1 hover:text-pink-500 transition duration-200"><Home size={16} /><Link to="/">Inicio</Link></li>
            <li className="flex items-center gap-1 hover:text-pink-500 transition duration-200"><Car size={16} /><Link to="/vehiculos">Vehículos</Link></li>
          <li className="flex items-center gap-1 hover:text-pink-500 transition duration-200"><CalendarCheck size={16} /><Link to="/cotizar">Cotiza</Link></li>
            <li className="flex items-center gap-1 hover:text-pink-500 transition duration-200"><Users size={16} /><Link to="/nosotros">Nosotros</Link></li>
            <li className="flex items-center gap-1 hover:text-pink-500 transition duration-200"><Phone size={16} /><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Botón hamburguesa en móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
            ☰
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <ul className="px-4 pb-4 space-y-2 bg-gray-800 text-sm">
          <li className="flex items-center gap-1 hover:text-pink-500 transition duration-200"><Home size={16} /><Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
          <li className="flex items-center gap-1 hover:text-pink-500 transition duration-200"><Car size={16} /><Link to="/vehiculos" onClick={() => setIsOpen(false)}>Vehículos</Link></li>
          <li className="flex items-center gap-1 hover:text-pink-500 transition duration-200"><CalendarCheck size={16} /><Link to="/reserva" onClick={() => setIsOpen(false)}>Reserva</Link></li>
          <li className="flex items-center gap-1 hover:text-pink-500 transition duration-200"><Users size={16} /><Link to="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link></li>
          <li className="flex items-center gap-1 hover:text-pink-500 transition duration-200"><Phone size={16} /><Link to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
