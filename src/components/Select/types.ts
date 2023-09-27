import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';

export type SelectProps = {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
};
