import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import NotFound from "./pages/404/NotFound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import Keys from "./pages/Keys/Keys";
import Profile from "./pages/Profile/Profile";
import { me } from "./services/authService";
import { useAuthStore } from "./store/useAuthStore";

const App = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const loaded = useAuthStore((state) => state.loaded);
  const setLoaded = useAuthStore((state) => state.setLoaded);

  useEffect(() => {
    if (!user) {
      setLoaded(false);
      me()
        .then((res) => {
          const { email, id } = res.data.data;
          setUser({ email, id });
        })
        .catch(() => {
          setUser(null);
        })
        .finally(() => {
          setLoaded(true);
        });
    }
  }, []);

  if (!loaded) return <div>Yükleniyor...</div>;

  return (
    <BrowserRouter>
      <Toaster richColors />
      <Routes>
        <Route path="*" element={<NotFound />} />

        {/* PRIVATE ROUTES */}
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/giris-yap" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/giris-yap" />}
        />
        <Route
          path="/keys"
          element={user ? <Keys /> : <Navigate to="/giris-yap" />}
        />

        {/* AUTH ROUTES */}
        <Route path="/giris-yap" element={<Login />} />
        <Route path="/kayit-ol" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
