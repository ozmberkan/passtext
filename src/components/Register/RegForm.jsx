import { Label } from "@radix-ui/react-label";
import { Form, Formik, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { register } from "~/services/authService";
import { toast } from "sonner";
import { useAuthStore } from "~/store/useAuthStore";
import { Separator } from "../ui/separator";

const RegForm = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Geçersiz e-posta adresi")
      .required("E-posta adresi zorunludur"),
  });

  const handleSubmit = (values) => {
    register(values)
      .then((res) => {
        toast.success(
          "Kayıt Başarılı! Parolanızı dikkatlice güvenli bir yerde saklayınız. Sizler için panoya kopyaladık."
        );
        window.navigator.clipboard.writeText(res.data.data.password);
        setUser(res.data.data);
      })
      .catch((err) => {
        toast.error("Kayıt başarısız! Lütfen tekrar deneyin." + err.message);
      });
  };

  return (
    <Card className="w-full border-none shadow-none ">
      <CardHeader>
        <CardTitle>Sisteme kayıt ol</CardTitle>
        <CardDescription>
          Sisteme erişmek için lütfen e-posta adresinizi girin.
          <br />
          <Link to="/giris-yap" className="text-black hover:underline">
            Hesabınız var mı ?
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Formik
          enableReinitialize
          initialValues={{ email: "" }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ errors }) => (
            <Form>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  E-posta
                </Label>
                <Field
                  name="email"
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  className={`w-full text-sm px-2 py-1 border rounded-md ${
                    errors.email ? "border-red-500" : "border-neutral-200"
                  }`}
                />
                {errors.email && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.email}
                  </div>
                )}
              </div>
              <Button type="submit" className="w-full mt-3">
                Kayıt Ol
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default RegForm;
