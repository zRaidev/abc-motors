
import Layout from "../components/Layout";
import { useLocation, Link } from "react-router-dom";
import vehiculosData from "../data/vehiculos";


function SolicitudEnviada() {
  const location = useLocation();
  const solicitud = location.state;
  const vehiculoInfo = vehiculosData.find(v => v.nombre === solicitud?.vehiculo);


  return (
    <Layout>
      <div className="max-w-xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg mt-10 text-white">
        <h1 className="text-3xl font-bold text-rose-600 mb-4 text-center">
          ¡Solicitud enviada! 🎉
        </h1>

        {solicitud ? (
          <>
            <p className="mb-2"><strong>Nombre:</strong> {solicitud.nombre}</p>
            <p className="mb-2"><strong>Email:</strong> {solicitud.email}</p>
            <p className="mb-2"><strong>Teléfono:</strong> {solicitud.telefono}</p>
            <p className="mb-2"><strong>Vehículo de interés:</strong> {solicitud.vehiculo}</p>
            {vehiculoInfo?.imagen && (
            <div className="flex justify-center my-4">
              <img
                src={vehiculoInfo.imagen}
                alt={vehiculoInfo.nombre}
                className="h-40 object-contain rounded shadow"
              />
            </div>
          )}
            {vehiculoInfo?.precio && (
              <p className="mt-4 text-lg font-semibold text-rose-400">
                Precio de referencia: {vehiculoInfo.precio}
              </p>
            )}
            <p className="mt-4 text-gray-300 text-sm">
              Un agente se pondrá en contacto contigo pronto para brindarte una cotización personalizada y responder tus preguntas.
            </p>
          </>
        ) : (
          <p>No se encontró información de la solicitud.</p>
        )}

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default SolicitudEnviada;