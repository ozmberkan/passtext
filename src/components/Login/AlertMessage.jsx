import { TbAlertCircle } from "react-icons/tb";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const AlertMessage = () => {
  return (
    <Card className="w-full border-none shadow-none">
      <CardHeader>
        <CardTitle>Dikkat</CardTitle>
        <CardDescription>
          Sistemi kullanmaya başlamadan önce lütfen bu bilgilendirme metnini
          dikkatle okuyunuz.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          Öncelikle sistemimize hoş geldiniz. Bu platform, kullanıcıların
          şifrelerini güvenli ve düzenli bir şekilde saklayabilmeleri amacıyla
          geliştirilmiştir. Güvenlik standartlarımız gereği, kayıt esnasında
          kullanıcıların manuel olarak şifre belirlemeleri yerine, sistem
          tarafından otomatik olarak oluşturulan ve uçtan uca şifrelenen bir
          erişim anahtarı kullanılmaktadır.
          <Alert variant="destructive" className="mt-4">
            <TbAlertCircle />
            <AlertTitle>Önerilmez</AlertTitle>
            <AlertDescription>
              Dilerseniz şifrenizi manuel olarak profilden belirleyebilirsiniz,
              ancak bu işlem önerilmez.
            </AlertDescription>
          </Alert>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertMessage;
