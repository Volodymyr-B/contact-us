import * as yup from "yup";

// phome validation RegExp
const phoneRegExp = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

// form validation for our app
export const validationSchema = yup.object({
  firsName: yup
    .string()
    .required("this field is required")
    .min(2, "2 symbol minimum")
    .max(12, "12 symbols maximum"),
  lastName: yup
    .string()
    .required("this field is required")
    .min(2, "2 symbol minimum"),
  email: yup
    .string()
    .required("this field is required")
    .email("please enter valid email"),
  phone: yup
    .string()
    .required("this field is required")
    .matches(phoneRegExp, "phone number is not valid"),
  radioGroup: yup.string().required("this option is required"),
  message: yup.string(),
});
