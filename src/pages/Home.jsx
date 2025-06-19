import Layout from "../components/Layout";
import vehiculos from "../data/vehiculos";


function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 font-montserrat px-6 py-12">
      {/* Encabezado principal */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-rose-600">Bienvenido a SMNK Motors</h1>
        <p className="mt-4 text-gray-400 text-lg">
          Alquila vehículos de lujo, cómodos y seguros con solo un clic.
        </p>
      </header>

      <section className="my-16 px-4 md:px-8">
        <h2 className="text-2xl text-white font-bold mb-6 text-center">Vehículos Populares</h2>
        <div className="grid md:grid-cols-3 gap-6">
        {/* Muestra solo 3 autos de ejemplo */}
        {vehiculos.slice(0, 3).map((auto, i) => (
        <div key={i} className="bg-gray-800 rounded-lg p-4 shadow-lg">
        <img src={auto.imagen} alt={auto.nombre} className="w-full h-40 object-cover rounded" />
        <h3 className="text-white text-lg font-semibold mt-4">{auto.nombre}</h3>
        <p className="text-gray-400">{auto.precio}</p>
      </div>
    ))}
  </div>
  <div className="text-center mt-6">
    <a href="/vehiculos" className="text-rose-500 hover:underline font-semibold">Ver todos los vehículos →</a>
  </div>
</section>

    <section className="my-16 px-4 md:px-8">
      <h2 className="text-2xl text-white font-bold mb-6 text-center">¿Por qué elegir SMNK Motors?</h2>
      <div className="grid md:grid-cols-3 gap-6 text-gray-300">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
          <span className="text-4xl text-rose-500">🚗</span>
          <h3 className="font-bold text-lg mt-2">Variedad de Vehículos</h3>
          <p>Contamos con modelos para cada necesidad y gusto.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
          <span className="text-4xl text-rose-500">🕒</span>
          <h3 className="font-bold text-lg mt-2">Atención 24/7</h3>
          <p>Estamos para ti en todo momento, sin importar la hora.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
          <span className="text-4xl text-rose-500">💰</span>
          <h3 className="font-bold text-lg mt-2">Precios Justos</h3>
          <p>Transparencia y comodidad en cada reserva.</p>
        </div>
      </div>
    </section>


      {/* Llamado a la acción */}
      <section className="text-center">
        <h3 className="text-xl font-bold mb-2">¿Listo para reservar?</h3>
        <button className="bg-rose-600 hover:bg-rose-700 text-white py-2 px-6 rounded-lg transition duration-300">
          Reserva ahora
        </button>
      </section>
    </div>

    
  );
}

export default Home;
