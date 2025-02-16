import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainContentLayout = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <main className="main-content bg-background-dark border-secondary-light container mt-32 mb-20 flex max-w-3xl flex-col items-center justify-center rounded-4xl border p-12 md:mt-36 md:rounded-[40px]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainContentLayout;
