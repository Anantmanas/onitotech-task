// Step2Form.tsx

import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Select, MenuItem } from '@mui/material';

interface FormValues {
  address?: string;
  state?: string;
  city?: string;
  country?: string;
  pincode?: number;
}

const Step2FormSchema = yup.object({
  address: yup.string().optional(),
  state: yup.string().optional(),
  city: yup.string().optional(),
  country: yup.string().test({
    name: 'country',
    message: 'Country is required',
    test: function (value, context) {
      const country = context.parent.country;
      return country !== null && country !== undefined && country.length > 0;
    },
  }),
  pincode: yup.number().optional().positive().integer(),
});

interface Step2FormProps {
  onSubmit: SubmitHandler<FormValues>;
}

const Step2Form: React.FC<Step2FormProps> = ({ onSubmit }) => {
  const { control, handleSubmit, formState } = useForm<FormValues>({
    resolver: yupResolver(Step2FormSchema),
  });

  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="address"
        control={control}
        render={({ field }) => (
          <TextField label="Address" variant="outlined" fullWidth {...field} error={!!errors.address} helperText={errors.address?.message} />
        )}
      />

      <Controller
        name="state"
        control={control}
        render={({ field }) => (
          <TextField label="State" variant="outlined" fullWidth {...field} error={!!errors.state} helperText={errors.state?.message} />
        )}
      />

      <Controller
        name="city"
        control={control}
        render={({ field }) => (
          <TextField label="City" variant="outlined" fullWidth {...field} error={!!errors.city} helperText={errors.city?.message} />
        )}
      />

      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <TextField label="Country" variant="outlined" fullWidth {...field} error={!!errors.country} helperText={errors.country?.message} />
        )}
      />

      <Controller
        name="pincode"
        control={control}
        render={({ field }) => (
          <TextField label="Pincode" variant="outlined" fullWidth {...field} error={!!errors.pincode} helperText={errors.pincode?.message} />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Step2Form;
