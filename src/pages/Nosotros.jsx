import Layout from "../components/Layout";
import { motion } from "framer-motion";

function Nosotros() {
  const equipo = [
  {
    nombre: "Yolima Muñoz",
    cargo: "Fundadora & CEO",
    imagen: "https://i.pravatar.cc/150?img=5",
  },
  {
    nombre: "Cristian Vargas",
    cargo: "Asistente Virtual & Soporte Técnico",
    imagen: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    nombre: "Sergio Mancipe",
    cargo: "Desarrollador Frontend",
    imagen: "https://i.pravatar.cc/150?img=13",
  },
];

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-rose-600 mb-8 text-center">
        Sobre Nosotros
      </h1>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl font-semibold text-white mb-2">¿Quiénes somos?</h2>
        <p className="text-gray-400">
          En <span className="text-white font-semibold">SMNK Motors</span>, somos una empresa comprometida con brindar soluciones de movilidad confiables, modernas y accesibles. Nacimos con el propósito de revolucionar la experiencia de alquiler de vehículos en Colombia.
        </p>
      </motion.section>

      {/* Misión y Visión */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-white mb-2">Misión</h2>
          <p className="text-gray-400">
            Ofrecer soluciones de movilidad eficientes y confiables, priorizando la experiencia del cliente y asegurando vehículos en óptimas condiciones, con atención personalizada.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-white mb-2">Visión</h2>
          <p className="text-gray-400">
            Ser la empresa de alquiler de vehículos más confiable y moderna en Latinoamérica, liderando por innovación, excelencia y compromiso con nuestros usuarios.
          </p>
        </motion.section>
      </div>

      {/* Equipo */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {equipo.map((persona, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={persona.imagen}
                alt={persona.nombre}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-rose-600"
              />
              <h3 className="text-white text-xl font-semibold">{persona.nombre}</h3>
              <p className="text-gray-400">{persona.cargo}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Nosotros;
