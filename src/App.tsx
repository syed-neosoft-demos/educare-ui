import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}
