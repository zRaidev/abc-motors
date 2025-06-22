import { useEffect } from "react";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

function Layout({ children }) {
  useEffect(() => {
    
    const script = document.createElement("script");
    script.src = "//code.tidio.co/0qlw0mvrortlsrtbox0lg8sgjmywtqiv.js"; 
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 font-montserrat px-6 py-12 flex flex-col justify-between">
      <div className="flex-grow">{children}</div>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Layout;




