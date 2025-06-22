
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
   <footer className="bg-gray-900 text-gray-400 py-6 px-4 border-t border-gray-700 shadow-inner mt-12">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-2x1 px-4">

        
        {/* Izquierda: Nombre o lema */}
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} SMNK Motors. Todos los derechos reservados.</p>
        </div>

        {/* Derecha: Redes sociales */}
        <div className="flex gap-4 text-xl justify-center">
          <a href="https://www.facebook.com/smnk_motors" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition transform hover:scale-110 duration-300" title="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/smnk_motors" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition transform hover:scale-110 duration-300" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition transform hover:scale-110 duration-300" title="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
