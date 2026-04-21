import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import InvoiceDetailPage from "../pages/InvoiceDetailPage";
import InvoiceListPage from "../pages/InvoiceListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <InvoiceListPage />,
      },
      {
        path: "invoice/:id",
        element: <InvoiceDetailPage />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
