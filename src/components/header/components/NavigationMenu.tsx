import { FC, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// separated into a component so as not to run unnecessary renders
// options can be link or anything else, depending of client needs

interface NavigationMenuProps {
  toggleNavDrawer?: () => void;
}

export const NavigationMenu: FC<NavigationMenuProps> = ({
  toggleNavDrawer,
}) => {
  const [element, setElement] = useState<null | HTMLElement>(null);
  const open = Boolean(element);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setElement(event.currentTarget);
  };
  const handleAction = () => {
    setElement(null);
    if (toggleNavDrawer) {
      toggleNavDrawer();
    }
  };
  return (
    <>
      <Button onClick={handleClick}>
        Features
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
      <Menu anchorEl={element} open={open} onClose={handleAction}>
        <MenuItem onClick={handleAction}>Option 1</MenuItem>
        <MenuItem onClick={handleAction}>Option 2</MenuItem>
        <MenuItem onClick={handleAction}>Option 3</MenuItem>
      </Menu>
    </>
  );
};
