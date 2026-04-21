import { Outlet } from "react-router-dom";
import MobileNavbar from "../components/MobileNavbar";
import Sidebar from "../components/Sidebar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-[#F8F8FB] lg:flex">
      <Sidebar />

      <div className="flex-1">
        <MobileNavbar />

        <main className="w-full px-6 py-8 lg:px-10 lg:py-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
