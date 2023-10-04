import { FC } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Button, Box } from '@mui/material';

import { FormInput } from '@components/FormInput/FormInput';
import { Select } from '@components/Select/Select';
import { DatePicker } from '@components/DatePicker/DatePicker';
import { PRIORITY_OPTIONS } from '@pages/Home/Tickets/constants';

import { ADD_TICKETS_FIELDS, ADD_TICKETS_CONFIG } from './constants';
import { AddTicketsData, AddTicketsProps } from './types';

export const AddTickets: FC<AddTicketsProps> = ({ addTicket }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddTicketsData>();

  const onSubmit: SubmitHandler<AddTicketsData> = data => {
    addTicket(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ margin: '70px 0 24px' }}
    >
      <FormInput
        {...ADD_TICKETS_CONFIG[ADD_TICKETS_FIELDS.TITLE]}
        register={register('title', {
          required: 'Title is required',
          minLength: {
            value: 5,
            message: 'Title must be at least 5 characters',
          },
        })}
        errors={errors}
      />

      <FormInput
        {...ADD_TICKETS_CONFIG[ADD_TICKETS_FIELDS.NAME]}
        register={register('name', {
          required: 'Name is required',
          minLength: {
            value: 2,
            message: 'Name must be at least 2 characters',
          },
        })}
        errors={errors}
      />

      <Controller
        control={control}
        name={ADD_TICKETS_FIELDS.DATE}
        rules={{
          required: {
            value: true,
            message: 'Date is required',
          },
        }}
        render={({ field }) => {
          return (
            <DatePicker
              field={field}
              errors={errors}
              {...ADD_TICKETS_CONFIG[ADD_TICKETS_FIELDS.DATE]}
            />
          );
        }}
      />

      <Select
        {...ADD_TICKETS_CONFIG[ADD_TICKETS_FIELDS.PRIORITY]}
        register={register('priority', {
          validate: value =>
            PRIORITY_OPTIONS.includes(value) || 'Choose priority',
        })}
        errors={errors}
      />

      <Button variant="contained" type="submit" fullWidth>
        Save
      </Button>
    </Box>
  );
};
