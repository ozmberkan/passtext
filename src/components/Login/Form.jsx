import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuthStore } from "~/store/useAuthStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { login } from "~/services/authService";

const Form = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      toast.error("Lütfen tüm alanları doldurun.");
    } else {
      login(values).then((res) => {
        toast.success("Giriş Başarılı!");
        localStorage.setItem("token", res.data.data.token);
        setUser(res.data.data);

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      });
    }
  };

  return (
    <Card className="w-full border-none shadow-none ">
      <CardHeader>
        <CardTitle>Sisteme giriş yap</CardTitle>
        <CardDescription>
          Sisteme erişmek için lütfen e-posta adresinizi girin. <br />
          <Link to="/kayit-ol" className="text-black hover:underline">
            Hesabınız yok mu ?
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              E-posta adresi
            </label>
            <input
              name="email"
              onChange={handleChange}
              placeholder="ör: m@mail.com"
              type="email"
              className={`w-full px-2 py-1 border placeholder:text-sm rounded-md border-neutral-200`}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Parola
            </label>
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="******"
              className={`w-full px-2 py-1 border placeholder:text-sm rounded-md border-neutral-200`}
            />
          </div>
          <Button className="mt-2" type="submit">
            Giriş Yap
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
