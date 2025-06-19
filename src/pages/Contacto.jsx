import Layout from "../components/Layout";
import { useState } from "react";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado correctamente (simulado) ✅");
    // Aquí iría lógica de envío real (correo/backend)
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-rose-600 mb-8 text-center">
        Contáctanos
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg space-y-6"
      >
        <div>
          <label className="block text-sm text-gray-300 mb-1">Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Asunto</label>
          <input
            type="text"
            name="asunto"
            value={form.asunto}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Mensaje</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-rose-600 hover:bg-rose-700 py-2 px-4 rounded text-white font-semibold transition duration-300"
        >
          Enviar mensaje
        </button>
      </form>
    </Layout>
  );
}

export default Contacto;
