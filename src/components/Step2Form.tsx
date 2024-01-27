// Step2Form.tsx

import React, { useEffect, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Box, Autocomplete } from '@mui/material';

interface FormValues {
  address?: string;
  state?: string;
  city?: string;
  country?: string;
  pincode?: number;
}
const Step2FormSchema = yup.object({
  address: yup.string(),
  state: yup.string(),
  city: yup.string(),
  country: yup.string(),
  pincode: yup.number().positive().integer(),
});


const resolver = yupResolver<FormValues>(Step2FormSchema);
interface Step2FormProps {
  onSubmit: SubmitHandler<FormValues>;
}

const Step2Form: React.FC<Step2FormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
  });
  const [countryOptions, setCountryOptions] = useState<string[]>([]);




  useEffect(() => {
    // Fetch country options from the API
    const fetchCountryOptions = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const countryNames = data.map((country: any) => country.name.common);
        setCountryOptions(countryNames);
      } catch (error) {
        console.error('Error fetching country options:', error);
      }
    };

    fetchCountryOptions();
  }, []);

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
        style={{ marginBottom: '16px' }}
      >
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              {...field}
              error={!!errors.address}
              helperText={errors.address?.message}
              style={{ marginBottom: '8px' }}
            />
          )}
        />

        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <TextField
              label="State"
              variant="outlined"
              fullWidth
              {...field}
              error={!!errors.state}
              helperText={errors.state?.message}
              style={{ marginBottom: '8px' }}
            />
          )}
        />

        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              {...field}
              error={!!errors.city}
              helperText={errors.city?.message}
              style={{ marginBottom: '8px' }}
            />
          )}
        />

        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Autocomplete
              fullWidth
              {...field}
              options={countryOptions}
              renderInput={(params) => (
                <TextField label="Country" variant="outlined"  {...params} error={!!errors.country} helperText={errors.country?.message} />
              )}
              style={{ marginBottom: '8px' }}
            />
          )}
        />
        <Controller
          name="pincode"
          control={control}
          render={({ field }) => (
            <TextField
              label="Pincode"
              variant="outlined"
              fullWidth
              {...field}
              error={!!errors.pincode}
              helperText={errors.pincode?.message}
              style={{ marginBottom: '8px' }}
            />
          )}
        />

        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default Step2Form;
