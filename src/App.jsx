import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardUser from "./pages/DashboardUser";

export default function App() {
  return (
    <main className="overflow-hidden overflow-y-hidden">
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<DashboardUser />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
