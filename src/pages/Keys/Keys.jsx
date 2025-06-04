import { TbLoader2 } from "react-icons/tb";
import Menu from "~/components/Menu/Menu";
import { Alert, AlertTitle } from "~/components/ui/alert";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import Container from "~/containers/Container";

const Keys = () => {
  let pageTitle = "Anahtarlarım";

  return (
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
          <Alert className="mt-3">
            <TbLoader2 className="animate-spin" />
            <AlertTitle>Anahtarlar üzerinde çalışıyoruz!</AlertTitle>
          </Alert>
        </div>
      </div>
    </Container>
  );
};

export default Keys;
