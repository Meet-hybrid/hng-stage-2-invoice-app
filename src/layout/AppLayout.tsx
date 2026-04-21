import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Outlet />
    </main>
  );
}

export default AppLayout;
