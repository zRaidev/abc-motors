import Layout from "../components/Layout";
import vehiculosData from "../data/vehiculos";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Vehiculos() {
  const navigate = useNavigate();
  const handleReservar = (vehiculoNombre) => {
  navigate("/reserva", { state: { vehiculo: vehiculoNombre } });
};
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const categoriasDisponibles = ["Todos", ...new Set(vehiculosData.map(v => v.categoria))];

    const vehiculosFiltrados = vehiculosData.filter((auto) => {
    const coincideCategoria = categoria === "Todos" || auto.categoria === categoria;
    const coincideBusqueda = auto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-rose-600 mb-8 text-center">Nuestros Vehículos</h1>

      {/* Búsqueda y filtro */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 px-2">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="px-4 py-2 w-full md:w-1/2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
        />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="px-4 py-2 w-full md:w-1/4 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
        >
          {categoriasDisponibles.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Lista de vehículos */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 px-2">
        {vehiculosFiltrados.map((auto, i) => (
          <div key={i} className="bg-gray-800 rounded-xl shadow-lg p-4 text-white">
            <img
              src={auto.imagen}
              alt={auto.nombre}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{auto.nombre}</h3>
            <p className="text-rose-400 font-bold mt-2">{auto.precio}</p>

            {/* Estado del vehículo */}
            <p
              className={`mt-2 text-sm font-semibold ${
                auto.estado === "Disponible" ? "text-green-400" : "text-yellow-400"
              }`}
            >
              {auto.estado}
            </p>

            {/* Categoría */}
            <p className="text-gray-400 text-sm italic">{auto.categoria}</p>

            {/* Botón Reservar (deshabilitado si no está disponible) */}
            <button
              disabled={auto.estado !== "Disponible"}
              onClick={() => handleReservar(auto.nombre)}
              className={`mt-4 py-2 px-4 rounded w-full transition duration-300 ${
                auto.estado === "Disponible"
                  ? "bg-rose-600 hover:bg-rose-700 text-white"
                  : "bg-gray-500 cursor-not-allowed text-gray-300"
              }`}
            >
              {auto.estado === "Disponible" ? "Reservar" : "No disponible"}
            </button>

          </div>
        ))}
      </div>

      {vehiculosFiltrados.length === 0 && (
        <p className="text-center text-gray-400 mt-8">No se encontraron vehículos.</p>
      )}
    </Layout>
  );
}

export default Vehiculos;
