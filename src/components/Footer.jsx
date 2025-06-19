function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} SMNK Motors. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-rose-500">Facebook</a>
          <a href="#" className="hover:text-rose-500">Instagram</a>
          <a href="#" className="hover:text-rose-500">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
