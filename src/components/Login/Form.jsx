import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <Card className="w-full border-none shadow-none ">
      <CardHeader>
        <CardTitle>Sisteme giriş yap</CardTitle>
        <CardDescription>
          Sisteme erişmek için lütfen e-posta adresinizi ve parolanızı girin.
          Erişimden önce dikkat metnini dikkate alınız.{" "}
          <Link to="/kayit-ol" className="text-black hover:underline">
            Hesabınız yok mu ?
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">E-Posta</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Parola</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="******"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Giriş
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Form;
