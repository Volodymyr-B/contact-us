import { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavigationMenu } from "../components/NavigationMenu";

import { ReactComponent as ShoppingCartIcon } from "../../../assets/icons/shoping-cart.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";
import { Button } from "@mui/material";

interface NavbarProps {
  toggleUserDrawer: () => void;
  toggleCartDrawer: () => void;
  toggleNavDrawer?: () => void;
}

export const Navbar: FC<NavbarProps> = ({
  toggleCartDrawer,
  toggleUserDrawer,
  toggleNavDrawer,
}) => {
  return (
    <div className="flex items-center gap-4 xl:gap-14">
      <div className="flex items-center gap-2">
        <Button onClick={toggleNavDrawer} component={NavLink} to="/">
          Home
        </Button>
        <div>
          <NavigationMenu toggleNavDrawer={toggleNavDrawer} />
        </div>
        <Button onClick={toggleNavDrawer} component={NavLink} to="/blog">
          Blog
        </Button>
        <Button onClick={toggleNavDrawer} component={NavLink} to="/shop">
          Shop
        </Button>
        <Button onClick={toggleNavDrawer} component={NavLink} to="/about">
          About
        </Button>
        <Button onClick={toggleNavDrawer} component={NavLink} to="/contact">
          Contact
        </Button>
      </div>
      <div className="flex gap-4 xl:gap-9">
        <div
          onClick={toggleUserDrawer}
          className="h-7 w-7 cursor-pointer rounded-full outline outline-1
           flex justify-center items-center"
        >
          <UserIcon />
        </div>
        <div
          onClick={toggleCartDrawer}
          className="h-7 w-7 cursor-pointer rounded-full outline outline-1 
          flex justify-center items-center"
        >
          <ShoppingCartIcon />
        </div>
      </div>
    </div>
  );
};
