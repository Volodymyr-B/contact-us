import { Controller, useForm } from "react-hook-form";
import { RadioButton } from "../UI/RadioButton";
import { InputField } from "../UI/InputField";
import { ClickButton } from "../UI/ClickButton";
import { validationSchema } from "../../utils/validationSchema";
import { IFormValues } from "../../interfaces/IFormValues";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormHelperText, FormLabel, RadioGroup } from "@mui/material";

export const ContactForm = () => {
  // using react-hook-form for controlling inputs and forming data,
  // using yup for validation
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({
    defaultValues: {
      firsName: "",
      lastName: "",
      email: "",
      phone: "",
      radioGroup: "",
      message: "",
    },
    reValidateMode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values: IFormValues) => {
    // showing that data actually forming, any logic for sending should be here
    alert(JSON.stringify(values, null, 2));
    reset();
  };

  return (
    <form
      autoComplete="off"
      className="px-3 md:px-12 pt-7 md:pt-14"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="md:columns-2">
        <InputField
          label="First Name"
          register={register}
          value={"firsName"}
          formState={errors.firsName?.message}
        />
        <InputField
          label="Last Name"
          register={register}
          value={"lastName"}
          formState={errors.lastName?.message}
        />
        <InputField
          label="Email"
          register={register}
          value={"email"}
          formState={errors.email?.message}
        />
        <InputField
          label="Phone Number"
          type="number"
          register={register}
          value={"phone"}
          formState={errors.phone?.message}
        />
      </div>
      <FormLabel className="font-semibold text-black">
        Select Subject?
      </FormLabel>
      <FormHelperText>{errors.radioGroup?.message}</FormHelperText>
      {/* A component is changing the uncontrolled value state of RadioGroup to be controlled, to prevent that i use contoller for RadioGroup */}
      <Controller
        control={control}
        name="radioGroup"
        render={({ field }) => (
          <RadioGroup
            {...register("radioGroup")}
            {...field}
            className="pb-11 md:pt-3"
            row
          >
            <RadioButton label="General Inquiry" value="generalInquiry1" />
            <RadioButton label="General Inquiry" value="generalInquiry2" />
            <RadioButton label="General Inquiry" value="generalInquiry3" />
            <RadioButton label="General Inquiry" value="generalInquiry4" />
          </RadioGroup>
        )}
      />
      <InputField
        label="Message"
        placeholder="Write your message.."
        register={register}
        value={"message"}
      />
      <div className="flex justify-end">
        <ClickButton type="submit" label="Send Message" />
      </div>
    </form>
  );
};
