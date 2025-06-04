import { TbFingerprint, TbHome, TbKey, TbLogout, TbUser } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Separator } from "~/components/ui/separator";
import { useAuthStore } from "~/store/useAuthStore";

const Menu = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <div className="bg-neutral-50 min-w-[200px] flex flex-col items-start justify-start  rounded-md p-3 h-full border">
      <h1 className="text-2xl px-2 py-1.5 font-bold flex gap-1 justify-center items-center  tracking-tighter">
        <TbFingerprint size={18} className="animate-pulse text-neutral-700" />
        <span className="text-sm">Passtext</span>
      </h1>
      <Separator className="my-2" />
      <nav className="mt-2 w-full">
        <ul className="flex flex-col gap-3">
          <Link
            className="flex items-center gap-2 text-muted-foreground hover:bg-neutral-200 w-full px-2 py-1.5 rounded-md transition-colors duration-200"
            to="/"
          >
            <TbHome />
            <span className="font-medium text-sm">Anasayfa</span>
          </Link>
          <Link
            className="flex items-center gap-2 text-muted-foreground hover:bg-neutral-200 w-full px-2 py-1.5 rounded-md transition-colors duration-200"
            to="/profile"
          >
            <TbUser />
            <span className="font-medium text-sm">Profilim</span>
          </Link>
          <Link
            className="flex items-center gap-2 text-muted-foreground hover:bg-neutral-200 w-full px-2 py-1.5 rounded-md transition-colors duration-200"
            to="/keys"
          >
            <TbKey />
            <span className="font-medium text-sm">Anahtarlarım</span>
          </Link>
        </ul>
      </nav>
      {user && (
        <div className="mt-auto w-full">
          <Separator className="my-2" />
          <button
            className="flex  items-center gap-2 text-muted-foreground hover:bg-neutral-200 w-full px-2 py-1.5 rounded-md transition-colors duration-200"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            <TbLogout />
            <span className="font-semibold">Çıkış Yap</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
