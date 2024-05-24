import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="w-full h-full ">
        <div className="w-[80%] mx-auto justify-center items-center">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
