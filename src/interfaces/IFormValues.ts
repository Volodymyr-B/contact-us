// interface for form. In this case it is not reused anywhere else,
// it is contained separately because in a larger application it would most likely be reused

export interface IFormValues {
  firsName: string;
  lastName: string;
  email: string;
  phone: string;
  radioGroup: string;
  message: string;
}
