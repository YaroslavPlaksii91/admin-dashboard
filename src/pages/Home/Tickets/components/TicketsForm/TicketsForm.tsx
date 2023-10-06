import { FC } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Button, Box } from '@mui/material';

import { FormInput } from '@components/FormInput/FormInput';
import { Select } from '@components/Select/Select';
import { DatePicker } from '@components/DatePicker/DatePicker';
import { PRIORITY_OPTIONS } from '@pages/Home/Tickets/constants';

import { TICKETS_FORM_CONFIG, TICKETS_FORM_FIELDS } from './constants';
import { TicketsFormData, TicketsFormProps } from './types';

export const TicketsForm: FC<TicketsFormProps> = ({
  addTicket,
  editTicket,
  activeTicket,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TicketsFormData>();

  const onSubmit: SubmitHandler<TicketsFormData> = data => {
    if (activeTicket) {
      editTicket({ ...data, date: { $d: activeTicket.date } });
    } else {
      addTicket(data);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ margin: '70px 0 24px' }}
    >
      <FormInput
        {...TICKETS_FORM_CONFIG[TICKETS_FORM_FIELDS.TITLE]}
        register={register('title', {
          required: 'Title is required',
          minLength: {
            value: 5,
            message: 'Title must be at least 5 characters',
          },
        })}
        errors={errors}
        defaultValue={activeTicket?.title}
      />

      <FormInput
        {...TICKETS_FORM_CONFIG[TICKETS_FORM_FIELDS.NAME]}
        register={register('name', {
          required: 'Name is required',
          minLength: {
            value: 2,
            message: 'Name must be at least 2 characters',
          },
        })}
        errors={errors}
        defaultValue={activeTicket?.customerName}
      />

      <Controller
        control={control}
        name={TICKETS_FORM_FIELDS.DATE}
        rules={{
          required: {
            value: true && !Boolean(activeTicket),
            message: 'Date is required',
          },
        }}
        render={({ field }) => {
          return (
            <DatePicker
              field={field}
              errors={errors}
              disabled={Boolean(activeTicket)}
              {...TICKETS_FORM_CONFIG[TICKETS_FORM_FIELDS.DATE]}
            />
          );
        }}
      />

      <Select
        {...TICKETS_FORM_CONFIG[TICKETS_FORM_FIELDS.PRIORITY]}
        register={register('priority', {
          validate: value =>
            PRIORITY_OPTIONS.includes(value) || 'Choose priority',
        })}
        errors={errors}
        defaultValue={activeTicket?.priority}
      />

      <Button variant="contained" type="submit" fullWidth>
        Save
      </Button>
    </Box>
  );
};
