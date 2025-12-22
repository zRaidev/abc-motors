import Layout from "../components/Layout";
import emailjs from "@emailjs/browser";
import vehiculosData from "../data/vehiculos";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";


function Reserva() {
  const navigate = useNavigate();
  const location = useLocation();

  const [dias, setDias] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  const calcularPrecio = (vehiculoNombre, fechaInicio, fechaFin) => {
  const vehiculo = vehiculosDisponibles.find(v => v.nombre === vehiculoNombre);
  if (!vehiculo || !fechaInicio || !fechaFin) return;

  const inicio = new Date(fechaInicio);
  const fin = new Date(fechaFin);
  const diffTime = Math.abs(fin - inicio);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const precioNum = Number(vehiculo.precio.replace(/[^0-9]/g, ""));
  const total = diffDays * precioNum;

  setDias(diffDays);
  setPrecioTotal(total);
};


  const formRef = useRef();
  const [form, setForm] = useState(() => {
    if (location.state?.vehiculo) {
      return {
        nombre: "",
        email: "",
        vehiculo: location.state.vehiculo,
        fechaInicio: "",
        fechaFin: "",
        pago: "",
      };
    }
    return {
      nombre: "",
      email: "",
      vehiculo: "",
      fechaInicio: "",
      fechaFin: "",
      pago: "",
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
        "SMNK-MOTORS",     //  SERVICE ID 
        "template_k5r2kzp",    // TEMPLATE ID 
        formRef.current,
        "hQqICL102n23fi9Sr"      // PUBLIC KEY 
      )
      .then(() => {
        e.target.reset();
        navigate("/gracias", {
  state: {
    ...form,
    dias,
    precioTotal
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
          <label className="block text-sm text-gray-300 mb-1">Vehículo</label>
          <select
            name="vehiculo"
            value={form.vehiculo}
            onChange={(e) => {
              const updatedForm = { ...form, vehiculo: e.target.value };
              setForm(updatedForm);
              calcularPrecio(
                e.target.value,
                form.fechaInicio,
                form.fechaFin
              );
            }}
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

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Fecha de inicio
            </label>
            <input
              type="date"
              name="fechaInicio"
              value={form.fechaInicio}
              onChange={(e) => {
                const updatedForm = { ...form, fechaInicio: e.target.value };
                setForm(updatedForm);
                calcularPrecio(
                  form.vehiculo,
                  e.target.value,
                  form.fechaFin
                );
              }}

              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Fecha de fin
            </label>
            <input
              type="date"
              name="fechaFin"
              value={form.fechaFin}
              onChange={(e) => {
                const updatedForm = { ...form, fechaFin: e.target.value };
                setForm(updatedForm);
                calcularPrecio(
                  form.vehiculo,
                  form.fechaInicio,
                  e.target.value
                );
              }}
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Método de pago
          </label>
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

        {precioTotal > 0 && (
        <div className="text-right text-rose-500 font-bold text-lg">
          Total por {dias} día(s): ${precioTotal.toLocaleString()}
        </div>
      )}

      <input type="hidden" name="total" value={precioTotal} />


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
