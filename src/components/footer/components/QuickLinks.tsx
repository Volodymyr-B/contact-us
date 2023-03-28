import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const QuickLinks = () => {
  // depending of tusk here can be outside or inside links

  return (
    <>
      <div className="flex flex-col items-start gap-6 mt-3">
        <h3 className="pl-2 text-white text-base">Quick Links</h3>
        <Button className="text-xs md:text-base" component={Link} to="/">
          Techlabz Keybox
        </Button>
        <Button className="text-xs md:text-base" component={Link} to="/">
          Downloads
        </Button>
        <Button className="text-xs md:text-base" component={Link} to="/">
          Forum
        </Button>
      </div>
    </>
  );
};
