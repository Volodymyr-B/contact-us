import { useState } from "react";

import { Navbar } from "./components/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { AppDrawer } from "../UI/AppDrawer";
import { NavbarMobile } from "./components/NavbarMobile";

export const Header = () => {
  // Drawers logic open/closed

  const [isOpenUserDrawer, setIsOpenUserDrawer] = useState(false);
  const [isOpenCartDrawer, setIsOpenCartDrawer] = useState(false);
  const [isOpenNavDrawer, setIsOpenNavDrawer] = useState(false);
  const toggleUserDrawer = () => {
    setIsOpenUserDrawer(!isOpenUserDrawer);
  };
  const toggleCartDrawer = () => {
    setIsOpenCartDrawer(!isOpenCartDrawer);
  };
  const toggleNavDrawer = () => {
    setIsOpenNavDrawer(!isOpenNavDrawer);
  };

  return (
    <div className="flex items-center justify-between px-[5%]  xl:px-24  h-28 max-w-[1440px] w-full">
      <Typography className="text-xl xl:text-2xl font-extrabold">
        Logo Here
      </Typography>

      <div className="cursor-pointer md:hidden">
        <div onClick={toggleNavDrawer}>
          <MenuIcon />
        </div>
      </div>
      <div className="hidden md:block">
        <Navbar
          toggleCartDrawer={toggleCartDrawer}
          toggleUserDrawer={toggleUserDrawer}
        />
      </div>
      {/*Header Drawers */}
      <AppDrawer isOpen={isOpenCartDrawer} toggle={toggleCartDrawer}>
        {/* any React node here */} cart content
      </AppDrawer>
      <AppDrawer isOpen={isOpenUserDrawer} toggle={toggleUserDrawer}>
        {/* any React node here */} user profile content
      </AppDrawer>
      <AppDrawer
        isOpen={isOpenNavDrawer}
        toggle={toggleNavDrawer}
        anchor="top"
        bgColor="black"
        color="white"
      >
        <NavbarMobile
          toggleCartDrawer={toggleCartDrawer}
          toggleUserDrawer={toggleUserDrawer}
          toggleNavDrawer={toggleNavDrawer}
        />
      </AppDrawer>
    </div>
  );
};
