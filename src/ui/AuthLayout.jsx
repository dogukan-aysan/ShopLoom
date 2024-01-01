import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AuthLayout() {
  return (
    <div className="auth-layout">
      <Header />
      <main className="auth-main-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AuthLayout;
