import { Navigate, Route, Routes } from "react-router-dom";
import Forget from "./pages/auth/Forget";
import Login from "./pages/auth/Login";
import Reset from "./pages/auth/Reset";
import SignUp from "./pages/auth/SignUp";

export default function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/forget" element={<Forget />} />
      <Route path="/auth/reset" element={<Reset />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}
