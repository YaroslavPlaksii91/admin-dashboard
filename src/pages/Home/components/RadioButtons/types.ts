export type RadioButtonsProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  options: string[];
};
