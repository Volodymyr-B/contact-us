import { FC, PropsWithChildren } from "react";

import { Box, Button, Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Anchor = "right" | "bottom" | "left" | "top" | undefined;

interface ModalProps {
  isOpen: boolean;
  anchor?: Anchor;
  bgColor?: string;
  color?: string;
  toggle: (value: boolean) => void;
}
// custom Drawer that accepts any content
export const AppDrawer: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  toggle,
  anchor = "right",
  bgColor = "white",
  color = "black",
  children,
}) => {
  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            minWidth: 320,
            backgroundColor: bgColor,
            color,
          },
        }}
        anchor={anchor}
        open={isOpen}
        onClose={() => toggle(false)}
      >
        <div>
          <Box sx={{ position: "absolute", right: 0, top: 30 }}>
            <Button onClick={() => toggle(false)}>
              <CloseIcon />
            </Button>
          </Box>
          {children}
        </div>
      </Drawer>
    </>
  );
};
