import { FieldErrors, FieldValues } from 'react-hook-form';

export type DatePickerProps = {
  errors: FieldErrors;
  field: FieldValues;
  label: string;
  name: string;
};
