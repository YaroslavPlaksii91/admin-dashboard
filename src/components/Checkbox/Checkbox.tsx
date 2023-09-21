import { FC, useState } from 'react';
import { Checkbox, SvgIcon, Box } from '@mui/material';

export const CheckboxComponent: FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        sx={{ display: 'none' }}
      />
      <Box
        sx={{
          height: '20px',
          cursor: 'pointer',
        }}
      >
        <SvgIcon
          titleAccess={checked ? 'Task completed' : 'Task not completed'}
          sx={{ width: '20px', height: '20px' }}
        >
          <use
            href={`/src/assets/icons/sprite.svg#icon-${
              checked ? 'active' : 'inactive'
            }Checkbox`}
          ></use>
        </SvgIcon>
      </Box>
    </label>
  );
};
