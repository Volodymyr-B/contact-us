import { styled, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../../interfaces/IFormValues";

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiInputBase-root": {
    color: "#8D8D8D",
  },
  "& .MuiInputBase-root:hover": {
    color: "black",
  },
});

interface InputFieldProps {
  value: Path<IFormValues>;
  label: string;
  type?: "text" | "number";
  placeholder?: string;
  formState?: string | undefined;
  register: UseFormRegister<IFormValues>;
}
// custom input that can be reuse , styling match with landing requirements
export const InputField: FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder = "",
  register,
  value,
  formState,
}) => {
  return (
    <>
      <Typography className="text-inherit text-sm">{label}</Typography>
      <StyledTextField
        {...register(value)}
        helperText={formState || " "}
        fullWidth
        type={type}
        placeholder={placeholder}
        variant="standard"
        className="pb-3"
      />
    </>
  );
};
