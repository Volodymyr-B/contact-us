import { createTheme } from "@mui/material/styles";

// Overriding the MUI font-family for the required in landing
export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "poppins",
      textTransform: "none",
    },
  },
});
