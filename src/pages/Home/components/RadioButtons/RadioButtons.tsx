import { FC } from 'react';
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';

import { RadioButtonsProps } from './types';

export const RadioButtons: FC<RadioButtonsProps> = ({
  value,
  handleChange,
  title,
  options,
}) => {
  return (
    <FormControl sx={{ padding: '15px' }}>
      <FormLabel id="radio-buttons-group-label">{title}</FormLabel>
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {options.map(option => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
