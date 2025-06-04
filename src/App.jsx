import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import { useAuthStore } from "./store/useAuthStore";

const App = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/kayit-ol" />}
        />
        {/* Auth */}
        <Route path="/giris-yap" element={<Login />} />
        <Route path="/kayit-ol" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
