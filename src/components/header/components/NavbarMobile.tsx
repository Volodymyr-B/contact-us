import { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavigationMenu } from "./NavigationMenu";

import { ReactComponent as CartReverseIcon } from "../../../assets/icons/cart-reverse.svg";
import UserReverseIcon from "../../../assets/icons/user-reverse.png";
import { Box, Button, Typography } from "@mui/material";

interface NavbarProps {
  toggleUserDrawer: () => void;
  toggleCartDrawer: () => void;
  toggleNavDrawer?: () => void;
}
//  for some reason cant overwrite css in MUI drawer, so I created a separate component with a custom css
export const NavbarMobile: FC<NavbarProps> = ({
  toggleCartDrawer,
  toggleUserDrawer,
  toggleNavDrawer,
}) => {
  return (
    <Box sx={{ padding: "30px 20px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "10px",
          paddingBottom: "25px",
        }}
      >
        <Typography sx={{ paddingBottom: "40px" }} variant="h6">
          Logo Here
        </Typography>
        <Button onClick={toggleNavDrawer} component={NavLink} to="/">
          Home
        </Button>
        <NavigationMenu toggleNavDrawer={toggleNavDrawer} />
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
      </Box>
      <Box sx={{ display: "flex", gap: "43px", justifyContent: "center" }}>
        <Box
          onClick={toggleUserDrawer}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "28px",
            width: "28px",
            cursor: "pointer",
            borderRadius: "9999px",
            outlineStyle: "solid",
            outlineWidth: "1px",
          }}
        >
          <img
            src={UserReverseIcon}
            alt="letter send pic"
            className="absolute -bottom-10 right-48"
          />
        </Box>
        <Box
          onClick={toggleCartDrawer}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "28px",
            width: "28px",
            cursor: "pointer",
            borderRadius: "9999px",
            outlineStyle: "solid",
            outlineWidth: "1px",
          }}
        >
          <CartReverseIcon />
        </Box>
      </Box>
    </Box>
  );
};
