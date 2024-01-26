import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './components/Redux/userSlice';
import Step1Form from './components/Step1Form';
import Step2Form from './components/Step2Form';
import DatatableList from './components/BasicTable';
import { RootState } from './components/Redux/rootReducer';
import { Box } from '@mui/material';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({}); // State to hold form data

  const handleStep1Submit = (data: any) => {
    // Update form data with Step 1 data
    setFormData({ ...formData, ...data });
    // Move to Step 2
    setStep(2);
  };

  const handleStep2Submit = (data: any) => {
    // Update form data with Step 2 data
    setFormData({ ...formData, ...data, selectedCountry: data.country });
    // Dispatch an action to save data to Redux store
    dispatch(addUser(formData));
    // Move back to Step 1
    setStep(1);
  };

  return (
    <>
      <div >
        {step === 1 ? (
          <Step1Form onSubmit={handleStep1Submit} />
        ) : (
          <Step2Form onSubmit={handleStep2Submit} />
        )}
      </div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      
        mx="auto"
        mt={3}
        p={3}
        boxShadow={3}
        borderRadius={8}
        bgcolor="white"
      >
      <DatatableList users={users} />
      </Box>
    </>
  );
};

export default App;
