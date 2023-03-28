import { ClickButton } from "../../UI/ClickButton";
import { TextField } from "@mui/material";

export const NewsLetter = () => {
  // here should be logic for mail input and react-hook-form with validation

  return (
    <div className="bg-neutral-900 xl:w-80 h-52 flex flex-col px-1  md:px-3 py-3 gap-4">
      <h3 className="text-white">Join Our Newsletter</h3>
      <TextField
        autoComplete="off"
        placeholder="Your email address"
        sx={{
          "& fieldset": { border: "none" },
        }}
        InputProps={{
          style: { fontSize: 12, color: "#616161" },
          endAdornment: <ClickButton label="Subscrible" />,
        }}
      />
      <span className="text-xs">
        * Will send you weekly updates for your better tool management.
      </span>
    </div>
  );
};
