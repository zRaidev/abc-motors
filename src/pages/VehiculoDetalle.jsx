import Layout from "../components/Layout";
import { useParams, useNavigate, Link } from "react-router-dom";
import vehiculosData from "../data/vehiculos";
import { ArrowLeft, Phone, Mail } from "lucide-react";

function VehiculoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const vehiculo = vehiculosData.find(v => v.id === parseInt(id));

  if (!vehiculo) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-3xl font-bold text-rose-600 mb-4">
            Vehículo no encontrado
          </h1>
          <p className="text-gray-400 mb-6">
            El vehículo que buscas no existe o no está disponible.
          </p>
          <Link
            to="/vehiculos"
            className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded transition duration-300"
          >
            <ArrowLeft size={20} />
            Volver a vehículos
          </Link>
        </div>
      </Layout>
    );
  }

  const handleContactar = () => {
    navigate("/contactar-agente", { state: { vehiculo: vehiculo.nombre } });
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Botón volver */}
        <button
          onClick={() => navigate("/vehiculos")}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition duration-200"
        >
          <ArrowLeft size={20} />
          Volver a vehículos
        </button>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Imagen principal */}
          <div className="w-full h-96 bg-gray-900 md:min-h-[500px]">
            <img
              src={vehiculo.imagen}
              alt={vehiculo.nombre}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Información del vehículo */}
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  {vehiculo.nombre}
                </h1>
                <p className="text-gray-400 text-lg">{vehiculo.categoria}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-3xl font-bold text-rose-500">
                  {vehiculo.precio}
                </p>
                <p
                  className={`text-sm font-semibold mt-1 ${
                    vehiculo.estado === "Disponible"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  {vehiculo.estado}
                </p>
              </div>
            </div>

            {/* Características */}
            <div className="border-t border-gray-700 pt-6 mb-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Características
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-rose-500">✓</span>
                  <span>Categoría: {vehiculo.categoria}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-rose-500">✓</span>
                  <span>Estado: {vehiculo.estado}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-rose-500">✓</span>
                  <span>Precio: {vehiculo.precio}</span>
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div className="border-t border-gray-700 pt-6 mb-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Descripción
              </h2>
              <p className="text-gray-300 leading-relaxed">
                El {vehiculo.nombre} es un vehículo excepcional en la categoría de{" "}
                {vehiculo.categoria}. Con un diseño moderno y características de alta 
                calidad, este vehículo ofrece una experiencia de conducción incomparable. 
                Ideal para quienes buscan comodidad, estilo y rendimiento.
              </p>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-700 pt-6">
              <button
                onClick={handleContactar}
                disabled={vehiculo.estado !== "Disponible"}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2 ${
                  vehiculo.estado === "Disponible"
                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                    : "bg-gray-600 cursor-not-allowed text-gray-400"
                }`}
              >
                <Phone size={20} />
                {vehiculo.estado === "Disponible"
                  ? "Contactar un agente"
                  : "No disponible"}
              </button>
              <Link
                to="/cotizar"
                className="flex-1 py-3 px-6 rounded-lg font-semibold bg-gray-700 hover:bg-gray-600 text-white transition duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Cotizar vehículo
              </Link>
            </div>
          </div>
        </div>

        {/* Vehículos relacionados */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Vehículos similares
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {vehiculosData
              .filter(
                (v) =>
                  v.categoria === vehiculo.categoria &&
                  v.id !== vehiculo.id &&
                  v.estado === "Disponible"
              )
              .slice(0, 3)
              .map((v) => (
                <Link
                  key={v.id}
                  to={`/vehiculo/${v.id}`}
                  className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
                >
                  <img
                    src={v.imagen}
                    alt={v.nombre}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {v.nombre}
                    </h3>
                    <p className="text-rose-400 font-bold mt-2">{v.precio}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default VehiculoDetalle;
