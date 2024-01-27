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
import { FormControl, InputLabel } from '@mui/material';

interface FormValues {
  name: string;
  age: number;
  sex: string;
  mobile: string;
  govtIdType: string;
  govtId?: string;
}

const Step1FormSchema = yup.object({
  name: yup.string().required().min(3),
  age: yup.number().required('Age is required').positive().integer(),
  sex: yup.string().required().oneOf(['Male', 'Female']),
  mobile: yup.string().required('Enter valid mobile number').matches(/^[6-9]\d{9}$/),
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
  p={4}
  boxShadow={3}
  borderRadius={8}
  bgcolor="white"
>
  <Box
    display="flex"
    flexDirection="row"
    alignItems="center"
    gap={2}
    mx="auto"
    mb={2}
    
  >
    <Controller
      name="name"
      control={control}
      render={({ field }) => (
        <TextField
          label="Name"
          variant="outlined"
          {...field}
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
         
          // style={{ marginBottom: '8px' }}
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
          type="number"
          {...field}
          error={!!errors.age}
          helperText={errors.age?.message}
          fullWidth
          // style={{ marginBottom: '8px', marginLeft: '8px' }}
        />
      )}
    />
  </Box>

  <Controller
    name="sex"
    control={control}
    render={({ field }) => (
      <TextField
        label="Sex"
        variant="outlined"
        {...field}
        error={!!errors.sex}
        helperText={errors.sex?.message}
        fullWidth
        style={{ marginBottom: '8px' }}
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
        {...field}
        error={!!errors.mobile}
        helperText={errors.mobile?.message}
        fullWidth
        style={{ marginBottom: '8px' }}
      />
    )}
  />

  <Box
    display="flex"
    flexDirection="row"
    alignItems="center"
    width={1}
    mx="auto"
   mb={2}
   mt={1}
    gap={2}
  >
    <Controller
      name="govtIdType"
      control={control}
      render={({ field }) => (
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="govtIdType">Govt ID Type</InputLabel>
          <Select
            label="Govt ID Type"
            {...field}
            value={field.value || ''}
            error={!!errors.govtIdType}
          >
            <MenuItem value="Aadhar">Aadhar</MenuItem>
            <MenuItem value="PAN">PAN</MenuItem>
          </Select>
        </FormControl>
      )}
    />
    <Controller
      name="govtId"
      control={control}
      render={({ field }) => (
        <TextField
          label="Govt ID"
          variant="outlined"
          {...field}
          error={!!errors.govtId}
          helperText={errors.govtId?.message}
          fullWidth
          // style={{ marginBottom: '8px', marginLeft: '8px' }}
        />
      )}
    />
  </Box>

        <Button type="submit" variant="contained" color="secondary">
          Next
        </Button>
      </Box>
    </form>
  );
};

export default Step1Form;
