import Layout from "../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula login (luego puedes conectar con Firebase u otro backend)
    if (form.email && form.password) {
      navigate("/reserva"); // redirige a la página de compra
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-xl shadow-lg mt-10">
        <h2 className="text-2xl font-bold text-center text-rose-600 mb-6">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
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
            Iniciar sesión
          </button>
        </form>
        <p className="text-gray-400 text-center mt-4">
          ¿No tienes cuenta?{" "}
          <a href="/registro" className="text-rose-400 hover:underline">
            Regístrate aquí
          </a>
        </p>
      </div>
    </Layout>
  );
}

export default Login;
