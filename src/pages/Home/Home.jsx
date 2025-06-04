import { TbLoader2 } from "react-icons/tb";
import Menu from "~/components/Menu/Menu";
import { Alert, AlertTitle } from "~/components/ui/alert";
import { Badge } from "~/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import Container from "~/containers/Container";

const Home = () => {
  let pageTitle = "Anasayfa";

  return (
    <Container>
      <Menu />
      <div className="flex flex-col gap-2 w-full">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-full py-3">
          <Alert className="mt-3 flex justify-between items-center">
            <div className="flex items-center gap-1">
              <TbLoader2 className="animate-spin" />
              <AlertTitle>Anasayfa üzerinde çalışıyoruz!</AlertTitle>
            </div>
            <Badge variant={"secondary"}>YAKINDA</Badge>
          </Alert>
        </div>
      </div>
    </Container>
  );
};

export default Home;
