import { ComponentProps, FC } from "react";

import { Button } from "@mui/material";

interface ClickButtonProps {
  label: string;
  type?: ComponentProps<"button">["type"];
  onClick?: () => void;
}
// custom button that can be reuse , styling match with landing requirements
export const ClickButton: FC<ClickButtonProps> = ({
  type = "button",
  label,
  onClick,
}) => {
  return (
    <>
      <Button
        onClick={onClick}
        type={type}
        className="md:px-12 py-2 md:py-4 bg-black text-white z-10 w-full md:w-auto"
        variant="contained"
      >
        {label}
      </Button>
    </>
  );
};
