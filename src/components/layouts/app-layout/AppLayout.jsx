/* eslint-disable */

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppRoutes from "../../../core/app-routes/AppRoutes";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const AppLayout = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <section className="section">
        <AppRoutes />
      </section>
      <Footer />
    </div>
  );
};

export default AppLayout;
