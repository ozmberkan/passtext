import { TbFingerprint, TbLock, TbPassword } from "react-icons/tb";
import AlertMessage from "~/components/Login/AlertMessage";
import RegForm from "~/components/Register/RegForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const Register = () => {
  return (
    <div className="w-full  min-h-[700px] relative flex flex-col justify-start items-center mt-4">
      <h1 className="text-4xl font-bold mb-4 flex justify-center items-center flex-col tracking-tighter">
        <TbFingerprint className="animate-pulse text-zinc-500" />
        Passtext
      </h1>
      <Tabs
        defaultValue="message"
        className="w-[450px] flex justify-center items-center"
      >
        <TabsList className="flex justify-center items-center ">
          <TabsTrigger value="message">Başlamadan Önce</TabsTrigger>
          <TabsTrigger value="register">Kayıt Ol</TabsTrigger>
        </TabsList>
        <TabsContent value="register" className="w-full">
          <RegForm />
        </TabsContent>
        <TabsContent value="message">
          <AlertMessage />
        </TabsContent>
      </Tabs>

      <TbLock
        size={300}
        className="absolute left-24 bottom-12 rotate-12 text-muted"
      />
      <TbPassword
        size={300}
        className="absolute right-24 bottom-12 rotate-12 text-muted"
      />
    </div>
  );
};

export default Register;
