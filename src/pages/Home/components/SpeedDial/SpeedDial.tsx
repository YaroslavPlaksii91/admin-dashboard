import { FC } from 'react';
import {
  SpeedDial as SpeedDialMui,
  SpeedDialAction,
  SvgIcon,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { SpeedDialProps } from './types';

export const SpeedDial: FC<SpeedDialProps> = ({ handleDelete, handleEdit }) => {
  const actions = [
    { icon: <DeleteIcon />, name: 'Delete', onClick: handleDelete },
    { icon: <EditIcon />, name: 'Edit', onClick: handleEdit },
  ];

  return (
    <SpeedDialMui
      ariaLabel="SpeedDial more options"
      sx={{ height: 24 }}
      icon={
        <SvgIcon titleAccess="More options">
          <use href="/sprite.svg#icon-more"></use>
        </SvgIcon>
      }
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          sx={{ height: 24 }}
          onClick={action.onClick}
        />
      ))}
    </SpeedDialMui>
  );
};
