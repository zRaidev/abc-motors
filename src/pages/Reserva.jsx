import Layout from "../components/Layout";
import emailjs from "@emailjs/browser";
import vehiculosData from "../data/vehiculos";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";


function Reserva() {
  const navigate = useNavigate();
  const location = useLocation();

  const formRef = useRef();
  const [form, setForm] = useState(() => {
    if (location.state?.vehiculo) {
      return {
        nombre: "",
        email: "",
        telefono: "",
        vehiculo: location.state.vehiculo,
      };
    }
    return {
      nombre: "",
      email: "",
      telefono: "",
      vehiculo: "",
    };
  });

  useEffect(() => {
    // Any additional effects after form initialization can go here
  }, [location]);
  const vehiculosDisponibles = vehiculosData.filter(
    (v) => v.estado === "Disponible"
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  
   const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_RESERVA,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        e.target.reset();
        navigate("/gracias", {
          state: {
            ...form
          }
        });
      })
      .catch((error) => {
        console.error("❌ Error al enviar el correo:", error);
        alert("Hubo un problema al enviar el correo.");
      });
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-rose-600 mb-8 text-center">
        Reserva tu Vehículo
      </h1>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg space-y-6"
      >
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Nombre completo
          </label>
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
          <label className="block text-sm text-gray-300 mb-1">
            Correo electrónico
          </label>
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
          <label className="block text-sm text-gray-300 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            required
            placeholder="+507 6123-4567"
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
            {vehiculosDisponibles.map((v) => (
              <option key={v.id} value={v.nombre}>
                {v.nombre}
              </option>
            ))}
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
