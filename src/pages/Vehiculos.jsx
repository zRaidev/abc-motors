import Layout from "../components/Layout";

const vehiculos = [
  {
    id: 1,
    nombre: "Toyota Corolla",
    imagen: "https://acortar.link/XHt2qa",
    precio: "$150.000/día",
    estado: "Disponible",
  },
  {
    id: 2,
    nombre: "Chevrolet Onix",
    imagen: "https://acortar.link/kE32qK",
    precio: "$130.000/día",
    estado: "Reservado",
  },
  {
    id: 3,
    nombre: "Mazda CX-5",
    imagen: "https://acortar.link/QVionF",
    precio: "$200.000/día",
    estado: "Disponible",
  },

  {
  id: 4,
  nombre: "Renault Duster",
  imagen: "https://acortar.link/FsVIQP",
  precio: "$170.000/día",
  estado: "Disponible",
},
{
  id: 5,
  nombre: "Kia Sportage",
  imagen: "https://acortar.link/M77etw",
  precio: "$185.000/día",
  estado: "Disponible",
},
{
  id: 6,
  nombre: "BMW X5",
  imagen: "https://acortar.link/ixRVjK",
  precio: "$300.000/día",
  estado: "Reservado",
},

];

function Vehiculos() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-rose-600 mb-8 text-center">Vehículos Disponibles</h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {vehiculos.map((auto) => (
          <div
            key={auto.id}
            className="bg-gray-800 rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={auto.imagen}
              alt={auto.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1 text-white">{auto.nombre}</h2>
              <p className="text-gray-400">{auto.precio}</p>
              <p
                className={`mt-1 text-sm font-medium ${
                  auto.estado === "Disponible" ? "text-green-500" : "text-red-500"
                }`}
              >
                {auto.estado}
              </p>
              <button
                className={`mt-4 w-full py-2 px-4 rounded-md text-white ${
                  auto.estado === "Disponible"
                    ? "bg-rose-600 hover:bg-rose-700"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
                disabled={auto.estado !== "Disponible"}
              >
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Vehiculos;
