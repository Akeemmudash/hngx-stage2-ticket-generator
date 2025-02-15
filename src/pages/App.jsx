import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainContentLayout from "../layouts/MainContentLayout";
import FormStepLayout from "../layouts/FormStepLayout";

const App = () => {
  return (
    <>
      <Navbar />
      <MainContentLayout>
        <FormStepLayout>
          <Outlet />
        </FormStepLayout>
      </MainContentLayout>
      <ScrollRestoration />
    </>
  );
};

export default App;
