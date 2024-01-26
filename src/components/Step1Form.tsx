// Step1Form.tsx

import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

interface FormValues {
  name: string;
  age: number;
  sex: string;
  mobile: string;
  govtIdType: string;
  govtId?: string ;
}

const Step1FormSchema = yup.object({
  name: yup.string().required().min(3),
  age: yup.number().required().positive().integer(),
  sex: yup.string().required().oneOf(['Male', 'Female']),
  mobile: yup.string().required().matches(/^[6-9]\d{9}$/),
  govtIdType: yup.string().required().oneOf(['Aadhar', 'PAN']),
  govtId: yup.string().test({
    name: 'govtId',
    message: 'Invalid Govt ID',
    test: function (value, context) {
      const govtIdType = context.parent.govtIdType;
      if (govtIdType === 'Aadhar') {
        return !!value && /^[2-9]\d{11}$/.test(value);
      } else if (govtIdType === 'PAN') {
        
        return !!value && /[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(value.toUpperCase());
      }
      return true;
    },
  }),
});


const resolver = yupResolver<FormValues>(Step1FormSchema);

interface Step1FormProps {
  onSubmit: SubmitHandler<FormValues>;
}

const Step1Form: React.FC<Step1FormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width={400}
        mx="auto"
        mt={3}
        p={3}
        boxShadow={3}
        borderRadius={8}
        bgcolor="white"
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              {...field}
              error={!!errors.name}
              helperText={errors.name?.message}
              style={{ marginBottom: '2px' }}
            />
          )}
        />
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              type="number"
              {...field}
              error={!!errors.age}
              helperText={errors.age?.message}
              style={{ marginBottom: '2px' }}
            />
          )}
        />
        <Controller
          name="sex"
          control={control}
          render={({ field }) => (
            <TextField
              label="Sex"
              variant="outlined"
              fullWidth
              {...field}
              error={!!errors.sex}
              helperText={errors.sex?.message}
              style={{ marginBottom: '2px' }}
            />
          )}
        />
        <Controller
          name="mobile"
          control={control}
          render={({ field }) => (
            <TextField
              label="Mobile"
              variant="outlined"
              fullWidth
              {...field}
              error={!!errors.mobile}
              helperText={errors.mobile?.message}
              style={{ marginBottom: '2px' }}
            />
          )}
        />
        <Controller
          name="govtIdType"
          control={control}
          render={({ field }) => (
            <Select
              label="Govt ID Type"
              variant="outlined"
              fullWidth
              {...field}
              value={field.value || ''}
              error={!!errors.govtIdType}
              style={{ marginBottom: '2px' }}
            >
              <MenuItem value="Aadhar">Aadhar</MenuItem>
              <MenuItem value="PAN">PAN</MenuItem>
            </Select>
          )}
        />
        <Controller
          name="govtId"
          control={control}
          render={({ field }) => (
            <TextField
              label="Govt ID"
              variant="outlined"
              fullWidth
              {...field}
              error={!!errors.govtId}
              helperText={errors.govtId?.message}
              style={{ marginBottom: '2px' }}
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </form>
  );
};

export default Step1Form;
