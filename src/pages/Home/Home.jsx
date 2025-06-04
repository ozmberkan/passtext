import { useAuthStore } from "~/store/useAuthStore";
import { Skeleton } from "~/components/ui/skeleton";
import {
  TbDoorExit,
  TbFingerprint,
  TbHome,
  TbLock,
  TbLogout,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { Separator } from "~/components/ui/separator";

const Home = () => {
  const user = useAuthStore((state) => state.user);
  const loaded = useAuthStore((state) => state.loaded);

  return (
    <div className="w-full min-h-svh p-4 flex   justify-start items-start">
      <div className="bg-neutral-100 w-[200px] flex flex-col items-start justify-start  rounded-md p-3 h-full border">
        <h1 className="text-2xl font-bold  flex gap-1 justify-center items-center  tracking-tighter">
          <TbFingerprint className="animate-pulse text-zinc-500" />
          Passtext
        </h1>
        <Separator className="my-2" />
        <nav className="mt-2 w-full">
          <ul className="flex flex-col gap-3">
            <Link
              className="flex items-center gap-2 text-muted-foreground hover:bg-neutral-200 w-full px-2 py-1.5 rounded-md transition-colors duration-200"
              to="/"
            >
              <TbHome />
              <span className="font-semibold">Anasayfa</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-muted-foreground hover:bg-neutral-200 w-full px-2 py-1.5 rounded-md transition-colors duration-200"
              to="/"
            >
              <TbLock />
              <span className="font-semibold">Şifrelerim</span>
            </Link>
          </ul>
        </nav>
        <Separator className="my-2" />
        {user && (
          <button
            className="flex items-center gap-2 text-muted-foreground hover:bg-neutral-200 w-full px-2 py-1.5 rounded-md transition-colors duration-200"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            <TbLogout />
            <span className="font-semibold">Çıkış Yap</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
