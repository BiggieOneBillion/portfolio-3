import { Outlet } from "react-router-dom";
import { Navbar } from "../components/global";
import Footer from "../components/global/footer";

const Root = () => {
  return (
    <main className="flex min-h-[100vh] flex-col bg-[#fff] font-mono containery mx-autou">
      <Navbar />
      <section className="flex-1">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default Root;
