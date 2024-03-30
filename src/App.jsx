import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Register from "./pages/Register";
import Beranda from "./features/user/beranda/Beranda";
import Login from "./pages/Login";
import DataPendaftar from "./pages/DataPendaftar";
import ProtectedRoute from "./features/authentication/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DataAkademik from "./pages/DataAkademik";
import USEPT from "./pages/USEPT";
import FormulirPendaftaran from "./pages/FormulirPendaftaran";
import TranskripNilai from "./pages/TranskripNilai";
import PageNotFound from "./ui/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
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
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
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
