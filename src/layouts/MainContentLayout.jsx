import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainContentLayout = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <main className="main-content bg-background-dark border-secondary-light mx-auto mt-32 mb-20 flex max-w-3xl flex-col items-center justify-center rounded-4xl border px-4 py-6 sm:px-6 md:mt-36 md:rounded-[40px] md:p-12">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainContentLayout;
