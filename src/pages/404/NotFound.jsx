import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-neutral-700 font-bold text-5xl">404</h1>
      <span className="text-muted-foreground">
        Aradığınız sayfa bulunamadı. Lütfen adresi kontrol edin.
      </span>
      <Link to="/">
        <Button className="mt-2" size="sm" variant="outline">
          Anasayfa
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
