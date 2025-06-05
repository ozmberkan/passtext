import { useState } from "react";
import { TbEye, TbEyeClosed, TbLoader2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import Menu from "~/components/Menu/Menu";
import { Alert, AlertTitle } from "~/components/ui/alert";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import Container from "~/containers/Container";

const Keys = () => {
  let pageTitle = "Anahtarlarım";

  const [visibleKeys, setVisibleKeys] = useState({});

  const keys = [
    { id: 1, name: "Ziraat Bankası", password: "12345678" },
    { id: 2, name: "Garanti Bankası", password: "12345678" },
  ];

  return (
    <Container>
      <Menu />
      <div className="flex flex-col gap-2 w-full">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Anasayfa</Link>
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
          <Table className="mt-3">
            <TableCaption>Anahtarlar Tablosu</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Adı</TableHead>
                <TableHead className="text-right">Parola</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {keys.map(({ id, name, password }) => (
                <TableRow key={id}>
                  <TableCell className="font-medium">{id}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell className="text-right">
                    {visibleKeys[id] ? (
                      <span>{password}</span>
                    ) : (
                      <span className="text-neutral-300">******</span>
                    )}
                    <Button
                      size="sm"
                      onClick={() =>
                        setVisibleKeys((prev) => ({
                          ...prev,
                          [id]: !prev[id],
                        }))
                      }
                      variant={"outline"}
                      className="text-xs p-0.5 w-7 h-7 ml-1"
                    >
                      {visibleKeys[id] ? (
                        <TbEyeClosed className="rotate-180" />
                      ) : (
                        <TbEye />
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Container>
  );
};

export default Keys;
