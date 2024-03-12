import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardUser from "./features/user/DashboardUser";
// import NotFound from "./pages/NotFound";
import DashboardAdmin from "./features/admin/DashboardAdmin";
import Beranda from "./features/user/Beranda";
import DataPribadi from "./features/user/DataPribadi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user",
    element: <DashboardUser />,
    children: [
      {
        path: "/user",
        element: <Beranda />,
      },
      {
        path: "/user/beranda",
        element: <Beranda />,
      },
      {
        path: "/user/datapribadi",
        element: <DataPribadi />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardAdmin />,
    children: [{}],
  },
  {
    path: "*",
    element: <Navigate replace to="login" />,
  },
]);

export default function App() {
  return (
    <main className="overflow-hidden overflow-y-hidden">
      <RouterProvider router={router} />
    </main>
  );
}
