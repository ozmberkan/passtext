import { Button } from "~/components/ui/button";
import { useAuthStore } from "~/store/useAuthStore";

const Home = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="w-full min-h-svh flex flex-col justify-center items-center">
      <h1 className="font-semibold text-lg tracking-tighter">Hoş geldin</h1>
      <span className="text-muted-foreground">{user?.email}</span>
      <Button
        size="sm"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
        variant="destructive"
      >
        Çıkış Yap
      </Button>
    </div>
  );
};

export default Home;
