import { FC } from "react";
import { FormControlLabel, Radio } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";

interface RadioButtonProps {
  label: string;
  value: string;
}
// custom radio input that can be reuse , styling match with landing requirements
export const RadioButton: FC<RadioButtonProps> = ({ value, label }) => {
  return (
    <>
      <FormControlLabel
        sx={{ "& .MuiFormControlLabel-label": { fontSize: "12px" } }}
        value={value}
        control={
          <Radio
            size="small"
            className="checked:text-black"
            checkedIcon={<CheckCircleIcon />}
            icon={<CircleIcon className="text-neutral-200" />}
          />
        }
        label={label}
      />
    </>
  );
};
