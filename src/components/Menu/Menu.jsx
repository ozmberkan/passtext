import { TbFingerprint, TbHome, TbKey, TbLogout, TbUser } from "react-icons/tb";
import { Link, useLocation, useParams } from "react-router-dom";
import { Separator } from "~/components/ui/separator";
import { useAuthStore } from "~/store/useAuthStore";

const Menu = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  const user = useAuthStore((state) => state.user);
  return (
    <div className="bg-white min-w-[250px] flex flex-col items-start justify-start  rounded-md p-3 h-full border">
      <h1 className="text-2xl px-2 py-1.5 font-bold flex gap-1 justify-center items-center  tracking-tighter">
        <TbFingerprint size={18} className="animate-pulse text-neutral-700" />
        <span className="text-sm">Passtext</span>
      </h1>
      <Separator className="my-2" />
      <nav className="mt-2 w-full">
        <span className="text-[10px] px-2 font-semibold text-neutral-400">
          GENEL
        </span>
        <ul className="flex flex-col gap-2">
          <Link
            className={`flex items-center border gap-2 text-muted-foreground hover:bg-neutral-50 w-full px-2 py-1.5 rounded-md transition-colors duration-200 ${
              pathname === "/"
                ? "bg-neutral-50 border-neutral-200 font-semibold text-black"
                : "border-transparent"
            }`}
            to="/"
          >
            <TbHome />
            <span className="font-medium text-sm">Anasayfa</span>
          </Link>
          <Link
            className={`flex items-center border  gap-2 text-muted-foreground hover:bg-neutral-50 w-full px-2 py-1.5 rounded-md transition-colors duration-200 ${
              pathname.includes("profile")
                ? "bg-neutral-50 border-neutral-200 font-semibold text-black"
                : "border-transparent"
            } `}
            to="/profile"
          >
            <TbUser />
            <span className="font-medium text-sm">Profilim</span>
          </Link>
          <Link
            className={`flex items-center border  gap-2 text-muted-foreground hover:bg-neutral-50 w-full px-2 py-1.5 rounded-md transition-colors duration-200 ${
              pathname.includes("keys")
                ? "bg-neutral-50 border-neutral-200 font-semibold text-black"
                : "border-transparent"
            } `}
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
            className="flex  items-center border gap-2 text-muted-foreground hover:bg-neutral-50 w-full px-2 py-1.5 rounded-md transition-colors duration-200"
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
