import Footer from "../Footer";
import Header from "../Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div
        style={{ minHeight: "85vh" }}
        className="px-4 bg-blue-100      text-black"
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
