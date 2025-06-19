import Layout from "../components/Layout";
import { useState } from "react";

function Reserva() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    vehiculo: "",
    fechaInicio: "",
    fechaFin: "",
    pago: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reserva enviada correctamente (simulada) ✅");
    // Aquí iría la lógica para guardar en base de datos
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-rose-600 mb-8 text-center">
        Reserva tu Vehículo
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
          <label className="block text-sm text-gray-300 mb-1">Vehículo</label>
          <select
            name="vehiculo"
            value={form.vehiculo}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
          >
            <option value="">Selecciona un vehículo</option>
            <option value="Toyota Corolla">Toyota Corolla</option>
            <option value="Chevrolet Onix">Chevrolet Onix</option>
            <option value="Mazda CX-5">Mazda CX-5</option>
            <option value="Renault Duster">Renault Duster</option>
            <option value="Kia Sportage">Kia Sportage</option>
            <option value="BMW X5">BMW X5</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Fecha de inicio</label>
            <input
              type="date"
              name="fechaInicio"
              value={form.fechaInicio}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Fecha de fin</label>
            <input
              type="date"
              name="fechaFin"
              value={form.fechaFin}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Método de pago</label>
          <select
            name="pago"
            value={form.pago}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
          >
            <option value="">Selecciona una opción</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Tarjeta de crédito">Tarjeta de crédito</option>
            <option value="Nequi / Daviplata">Nequi / Daviplata</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-rose-600 hover:bg-rose-700 py-2 px-4 rounded text-white font-semibold transition duration-300"
        >
          Confirmar reserva
        </button>
      </form>
    </Layout>
  );
}

export default Reserva;
