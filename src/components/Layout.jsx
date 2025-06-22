import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";


function Layout({ children }) {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 font-montserrat px-6 py-12 flex flex-col justify-between">
      <div className="flex-grow">{children}</div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Layout;



