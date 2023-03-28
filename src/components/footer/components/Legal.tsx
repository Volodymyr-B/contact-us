import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Legal = () => {
  // depending of tusk here can be outside or inside links

  return (
    <>
      <div className="flex flex-col items-start gap-6 mt-3">
        <h3 className="pl-2 text-white text-base">Legal</h3>
        <Button className="text-xs md:text-base" component={Link} to="/">
          Privacy Policy
        </Button>
        <Button className="text-xs md:text-base" component={Link} to="/">
          Terms & Services
        </Button>
        <Button className="text-xs md:text-base" component={Link} to="/">
          Terms of Use
        </Button>
        <Button className="text-xs md:text-base" component={Link} to="/">
          Refund Policy
        </Button>
      </div>
    </>
  );
};
