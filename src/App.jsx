import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardUser from "./features/user/DashboardUser";
// import NotFound from "./pages/NotFound";
import DashboardAdmin from "./features/admin/DashboardAdmin";

export default function App() {
  return (
    <main className="overflow-hidden overflow-y-hidden">
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboarduser" element={<DashboardUser />} />
          <Route path="dashboardadmin" element={<DashboardAdmin />} />
          <Route path="*" element={<Navigate replace to="login" />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
