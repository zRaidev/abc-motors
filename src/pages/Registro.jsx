import Layout from "../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {
  const [form, setForm] = useState({ nombre: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula registro
    if (form.email && form.password) {
      navigate("/login");
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-xl shadow-lg mt-10">
        <h2 className="text-2xl font-bold text-center text-rose-600 mb-6">
          Registro de Usuario
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Nombre completo</label>
            <input
              type="text"
              name="nombre"
              required
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="w-full bg-gray-900 text-white px-4 py-2 rounded border border-gray-700 focus:ring-2 focus:ring-rose-600"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Correo electrónico</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-gray-900 text-white px-4 py-2 rounded border border-gray-700 focus:ring-2 focus:ring-rose-600"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full bg-gray-900 text-white px-4 py-2 rounded border border-gray-700 focus:ring-2 focus:ring-rose-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 rounded font-semibold"
          >
            Registrarse
          </button>
        </form>
        <p className="text-gray-400 text-center mt-4">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-rose-400 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </Layout>
  );
}

export default Registro;
