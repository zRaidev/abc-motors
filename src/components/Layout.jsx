// src/components/Layout.jsx

import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 font-montserrat px-6 py-12">
      {children}
    </div>
  ); 

}

export default Layout;
