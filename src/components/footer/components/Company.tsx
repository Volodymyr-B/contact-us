import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Company = () => {
  // inside navigation links

  return (
    <>
      <div className="flex flex-col items-start gap-6 mt-3">
        <h3 className="pl-2 text-white text-base">Company</h3>
        <Button className="text-xs md:text-base" component={Link} to="/about">
          About
        </Button>
        <Button className="text-xs md:text-base" component={Link} to="/contact">
          Contact
        </Button>
        <Button className="text-xs md:text-base" component={Link} to="/blog">
          Blogs
        </Button>
      </div>
    </>
  );
};
