import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import { useAuthStore } from "./store/useAuthStore";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";
import { me } from "./services/authService";

const App = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const loaded = useAuthStore((state) => state.loaded);
  const setLoaded = useAuthStore((state) => state.setLoaded);
  //
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (!user && token) {
      setLoaded(false);
      me()
        .then((res) => {
          const { email } = res.data.data;
          setUser({ email });
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
          localStorage.removeItem("token");
        })
        .finally(() => {
          setLoaded(true);
        });
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Toaster richColors />
      <Routes>
        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
        {/* Private Route */}
        <Route
          path="/"
          element={token ? <Home /> : <Navigate to="/giris-yap" />}
        />
        {/* Auth */}
        <Route path="/giris-yap" element={<Login />} />
        <Route path="/kayit-ol" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
