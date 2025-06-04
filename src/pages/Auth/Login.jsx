import { TbFingerprint, TbLoader2, TbLock, TbPassword } from "react-icons/tb";
import Form from "~/components/Login/Form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";

const Login = () => {
  return (
    <div className="w-full min-h-[700px] relative flex flex-col justify-start items-center mt-4">
      <h1 className="text-4xl font-bold mb-4 flex justify-center items-center flex-col tracking-tighter">
        <TbFingerprint className="animate-pulse text-zinc-500" />
        Passtext
      </h1>
      <Tabs
        defaultValue="login"
        className="w-[450px] flex justify-center items-center"
      >
        <TabsList className="flex justify-center items-center ">
          <TabsTrigger value="login">Giriş Yap</TabsTrigger>
          <TabsTrigger disabled value="forgot">
            <TbLoader2 className="animate-spin" />
            Şifremi Unuttum
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="w-full">
          <Form />
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

export default Login;
