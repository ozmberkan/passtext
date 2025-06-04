import { useState } from "react";
import { TbAlertCircle, TbLoader2 } from "react-icons/tb";
import Menu from "~/components/Menu/Menu";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";
import Container from "~/containers/Container";
import { useAuthStore } from "~/store/useAuthStore";

const Profile = () => {
  let pageTitle = "Profilim";

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("password", password);
  };

  const user = useAuthStore((state) => state.user);

  return (
    <>
      <Container>
        <Menu />
        <div className="flex flex-col gap-2 w-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Anasayfa</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="w-full py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Avatar className="rounded-lg">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>PT</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h1>{user?.email}</h1>
                  <span className="text-xs text-muted-foreground">
                    {user?.email.split("@")[0]}
                  </span>
                </div>
              </div>
              <div>
                <Dialog>
                  <DialogTrigger className="border bg-white rounded-md px-2 py-1.5 text-sm text-muted-foreground shadow transition-colors duration-200">
                    Parolayı Değiştir
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Parolayı Değiştirmek İstediğine Emin misin?
                      </DialogTitle>
                      <DialogDescription>
                        Kayıt esnasında oluşturulan parolalar güvenliğiniz için
                        uçtan uca şifrelenmiş olarak saklanmaktadır. Bu nedenle,
                        parolalarınızı değiştirmemenizi öneriyoruz.
                      </DialogDescription>
                      <div className="flex flex-col gap-3">
                        <Separator className="my-1" />
                        <form onSubmit={handleSubmit} className="flex flex-col">
                          <Label className="mb-1">Parola</Label>
                          <input
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="px-2 py-1 rounded-md border"
                          />
                          <div>
                            <Button
                              className="mt-4"
                              variant="default"
                              type="submit"
                            >
                              Parolayı Değiştir
                            </Button>
                          </div>
                        </form>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <Alert variant="default" className="mt-4">
              <TbAlertCircle />
              <AlertTitle>Lütfen dikkat!</AlertTitle>
              <AlertDescription>
                Kayıt esnasında oluşturulan parolalar, güvenliğiniz için uçtan
                uca şifrelenmiş olarak saklanmaktadır. Bu nedenle,
                parolalarınızı değiştirmeminizi öneriyoruz. parolalarınızı
                güvenli bir yerde saklamanız önemlidir.
              </AlertDescription>
            </Alert>

            <Alert className="mt-3">
              <TbLoader2 className="animate-spin" />
              <AlertTitle>Profil ayarları üzerinde çalışıyoruz!</AlertTitle>
            </Alert>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
