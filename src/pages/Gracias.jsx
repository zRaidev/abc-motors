
import Layout from "../components/Layout";
import { useLocation, Link } from "react-router-dom";
import vehiculosData from "../data/vehiculos";


function Gracias() {
  const location = useLocation();
  const reserva = location.state;
  const vehiculoInfo = vehiculosData.find(v => v.nombre === reserva?.vehiculo);


  return (
    <Layout>
      <div className="max-w-xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg mt-10 text-white">
        <h1 className="text-3xl font-bold text-rose-600 mb-4 text-center">
          ¡Reserva confirmada! 🎉
        </h1>

        {reserva ? (
          <>
            <p className="mb-2"><strong>Nombre:</strong> {reserva.nombre}</p>
            <p className="mb-2"><strong>Email:</strong> {reserva.email}</p>
            <p className="mb-2"><strong>Vehículo:</strong> {reserva.vehiculo}{vehiculoInfo?.imagen && (
            <div className="flex justify-center mb-4">
              <img
                src={vehiculoInfo.imagen}
                alt={vehiculoInfo.nombre}
                className="h-40 object-contain rounded shadow"
              />
            </div>
          )}</p>
            <p className="mb-2"><strong>Fecha de inicio:</strong> {reserva.fechaInicio}</p>
            <p className="mb-2"><strong>Fecha de fin:</strong> {reserva.fechaFin}</p>
            <p className="mb-2"><strong>Método de pago:</strong> {reserva.pago}</p>
            <p className="mt-4 text-lg font-semibold text-rose-400">
              Total por {reserva.dias} día(s): ${reserva.precioTotal?.toLocaleString()}
            </p>
          </>
        ) : (
          <p>No se encontró información de la reserva.</p>
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

export default Gracias;