import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';

export type FormInputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors;
  isPassword?: boolean;
  defaultValue?: string;
};
