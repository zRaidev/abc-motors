// src/pages/GuiaDiseno.jsx
import Layout from "../components/Layout";

function GuiaDiseno() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-rose-600 mb-6 text-center">Guía de Diseño - SMNK Motors</h1>

        {/* Paleta de colores */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🎨 Paleta de Colores</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-rose-600 text-white p-4 rounded">bg-rose-600</div>
            <div className="bg-gray-900 text-white p-4 rounded">bg-gray-900</div>
            <div className="bg-gray-800 text-white p-4 rounded">bg-gray-800</div>
            <div className="bg-white text-gray-800 p-4 rounded border">bg-white</div>
          </div>
        </section>

        {/* Tipografía */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🔤 Tipografía</h2>
          <p className="text-base mb-2">Texto base (text-base)</p>
          <p className="text-lg mb-2">Texto grande (text-lg)</p>
          <p className="text-xl font-semibold mb-2">Título pequeño (text-xl)</p>
          <p className="text-3xl font-bold mb-2">Título de sección (text-3xl)</p>
          <p className="text-5xl font-bold text-rose-600">Título destacado (text-5xl)</p>
        </section>

        {/* Espaciado */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">📏 Espaciados comunes</h2>
          <div className="space-y-2">
            <div className="bg-gray-800 p-2 rounded">p-2 (8px)</div>
            <div className="bg-gray-800 p-4 rounded">p-4 (16px)</div>
            <div className="bg-gray-800 p-6 rounded">p-6 (24px)</div>
          </div>
        </section>

        {/* Botones */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🔘 Botones</h2>
          <button className="bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded transition duration-300">
            Botón primario
          </button>
        </section>

        {/* Transiciones */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">⚙️ Transiciones y animaciones</h2>
          <p className="transition-all duration-300 hover:scale-110 inline-block bg-gray-800 text-white p-2 rounded">
            Hover con escala
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default GuiaDiseno;


//🧠 ¿Por qué se usa rel="noopener noreferrer"?
//Porque al abrir en nueva pestaña, eso:

//Protege contra ataques de tipo reverse tabnabbing 🛡️

//Mejora la seguridad y el rendimiento