import { useEffect, useState } from "react";
import { TbEye, TbEyeClosed, TbShield, TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Menu from "~/components/Menu/Menu";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
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
import { deleteKey, getAllKeys } from "~/services/keyService";

const Keys = () => {
  let pageTitle = "Anahtarlarım";

  const [visibleKeys, setVisibleKeys] = useState({});

  const [keys, setKeys] = useState([]);
  const [keysLoaded, setKeysLoaded] = useState(false);

  const [selectedKey, setSelectedKey] = useState(null);

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  useEffect(() => {
    if (!keysLoaded) {
      getAllKeys()
        .then((res) => {
          setKeys(res.data.data);
        })
        .catch((err) => {
          toast.error("Anahtarlar yüklenirken bir hata oluştu.");
        })
        .finally(() => {
          setKeysLoaded(true);
        });
    }
  }, [keysLoaded]);

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
          <Alert variant="default">
            <TbShield />
            <AlertTitle>Güvenlik</AlertTitle>
            <AlertDescription>
              Burada yer alan anahtarlarınız, sistemimizde uçtan uca
              şifrelenerek kaydedilmektedir.
            </AlertDescription>
          </Alert>
          <Table className="mt-3 ">
            <TableCaption>Anahtarlar Tablosu</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Adı</TableHead>
                <TableHead className="text-right">Parola</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {keys.map((key) => (
                <TableRow key={key.id}>
                  <TableCell className="font-medium">{key.id}</TableCell>
                  <TableCell>{key.name}</TableCell>
                  <TableCell className="text-right">
                    {visibleKeys[key.id] ? (
                      <span>{key.key}</span>
                    ) : (
                      <span className="text-neutral-300">******</span>
                    )}
                    <Button
                      size="sm"
                      onClick={() =>
                        setVisibleKeys((prev) => ({
                          ...prev,
                          [key.id]: !prev[key.id],
                        }))
                      }
                      variant={"outline"}
                      className="text-xs p-0.5 w-7 h-7 ml-1"
                    >
                      {visibleKeys[key.id] ? (
                        <TbEyeClosed className="rotate-180" />
                      ) : (
                        <TbEye />
                      )}
                    </Button>

                    <Dialog
                      open={openDeleteDialog}
                      onOpenChange={setOpenDeleteDialog}
                    >
                      <DialogTrigger asChild>
                        <Button
                          onClick={() => {
                            setSelectedKey(key.id);
                            setOpenDeleteDialog(true);
                          }}
                          className="text-xs p-0.5 w-7 h-7  ml-1 bg-white border  hover:bg-red-50 transition-colors duration-200 text-red-500 hover:text-red-600 rounded-md shadow-sm"
                        >
                          <TbTrash />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            Silmek istediğine emin misin?
                          </DialogTitle>
                          <DialogDescription>
                            Bu işlem geri alınamaz. Anahtar silindiğinde, bu
                            anahtara erişim hakkını kaybedeceksin.
                          </DialogDescription>
                          <DialogFooter>
                            <Button
                              variant={"destructive"}
                              onClick={() => {
                                deleteKey(selectedKey)
                                  .then((res) => {
                                    toast.success("Anahtar başarıyla silindi.");
                                    setKeysLoaded(false);
                                  })
                                  .catch(() => {
                                    toast.error(
                                      "Anahtar silinirken bir hata oluştu."
                                    );
                                  })
                                  .finally(() => {
                                    setSelectedKey(null);
                                    setOpenDeleteDialog(false);
                                  });
                              }}
                            >
                              Eminim
                            </Button>
                          </DialogFooter>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
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
