import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MobileNavbar from "../components/MobileNavbar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-[#F8F8FB] lg:bg-[#F8F8FB]">
      <MobileNavbar />

      <div className="lg:flex lg:min-h-screen">
        <Sidebar />

        <main className="flex-1 px-6 py-8 sm:px-10 lg:px-14 lg:py-18">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
