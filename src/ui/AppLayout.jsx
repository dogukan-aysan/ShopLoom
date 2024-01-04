import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Aside from "./Aside";

function AppLayout() {
  return (
    <div className="app-layout">
      <div className="app-layout__header">
        <Header />
      </div>
      <div className="app-layout__aside">
        <Aside />
      </div>
      <main className="main">
        <Outlet />
      </main>
      <div className="app-layout__footer">
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
