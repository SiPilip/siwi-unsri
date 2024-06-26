import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense, lazy } from "react";
import SpinnerFullPage from "./ui/SpinnerFullPage";
import ProtectedRoute from "./features/authentication/ProtectedRoute";
import UbahProfile from "./pages/UbahProfile";
import ProtectedAdminRoute from "./features/authentication/ProtectedAdminRoute";
import AdminAppLayout from "./ui/AdminAppLayout";
import Pembayaran from "./pages/Pembayaran";
import PembayaranSukses from "./features/user/pembayaran/PembayaranSukses";
import SeatSystem from "./pages/SeatSystem";
import KartuUndangan from "./pages/KartuUndangan";

// PAGES
// import PageNotFound from "./ui/PageNotFound";
// import AppLayout from "./ui/AppLayout";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Beranda from "./features/user/beranda/Beranda";
// import DataPendaftar from "./pages/DataPendaftar";
// import DataAkademik from "./pages/DataAkademik";
// import TranskripNilai from "./pages/TranskripNilai";
// import USEPT from "./pages/USEPT";
// import FormulirPendaftaran from "./pages/FormulirPendaftaran";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 60 * 1000,
      retry: true,
    },
  },
});

const PageNotFound = lazy(() => import("./ui/PageNotFound"));
const AppLayout = lazy(() => import("./ui/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Beranda = lazy(() => import("./features/user/beranda/Beranda"));
const DataPendaftar = lazy(() => import("./pages/DataPendaftar"));
const DataAkademik = lazy(() => import("./pages/DataAkademik"));
const TranskripNilai = lazy(() => import("./pages/TranskripNilai"));
const USEPT = lazy(() => import("./pages/USEPT"));
const FormulirPendaftaran = lazy(() => import("./pages/FormulirPendaftaran"));

// ADMIN
const AdminBeranda = lazy(() => import("./pages/admin/Beranda"));
const AdminDataPendaftar = lazy(() => import("./pages/admin/DataPendaftar"));
const AdminDataPendaftarDetail = lazy(() =>
  import("./pages/admin/DataPendaftarDetail")
);
const Pengaturan = lazy(() => import("./pages/admin/Pengaturan"));

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="/beranda" />} />
              <Route path="/beranda" element={<Beranda />} />
              <Route path="/datapendaftar" element={<DataPendaftar />} />
              <Route path="/dataakademik" element={<DataAkademik />} />
              <Route path="/transkripnilai" element={<TranskripNilai />} />
              <Route path="/usept" element={<USEPT />} />
              <Route path="/daftar" element={<FormulirPendaftaran />} />
              <Route path="/ubahprofile" element={<UbahProfile />} />
              <Route path="/pembayaran" element={<Pembayaran />} />
              <Route path="/pembayaransukses" element={<PembayaranSukses />} />
              <Route path="/seatsystem" element={<SeatSystem />} />
              <Route path="/kartuundangan" element={<KartuUndangan />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<PageNotFound />} />
            <Route
              element={
                <ProtectedAdminRoute>
                  <AdminAppLayout />
                </ProtectedAdminRoute>
              }
            >
              <Route
                path="/admin"
                element={<Navigate replace to="/admin/beranda" />}
              />
              <Route path="/admin/beranda" element={<AdminBeranda />} />
              <Route
                path="/admin/datapendaftar"
                element={<AdminDataPendaftar />}
              />
              <Route
                path="/admin/datapendaftar/:id"
                element={<AdminDataPendaftarDetail />}
              />
              <Route path="/admin/pengaturan" element={<Pengaturan />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </QueryClientProvider>
  );
}
