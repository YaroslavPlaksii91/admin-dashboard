import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';

export type FileInputProps = {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors;
};
