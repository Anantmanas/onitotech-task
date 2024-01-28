import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './components/Redux/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Step1Form from './components/Step1Form';
import Step2Form from './components/Step2Form';
import DatatableList from './components/BasicTable';
import { RootState } from './components/Redux/rootReducer';
import { Box } from '@mui/material';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});

  const handleStep1Submit = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(2);
  };

  const handleStep2Submit = (data: any) => {
    setFormData({ ...formData, ...data, selectedCountry: data.country });
    dispatch(addUser(formData));
    setStep(1);
    toast.success('New user added!');
  };

  return (
    <>
      <div>
        <div className=''>
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
          width="auto"
        >
          <DatatableList users={users} />
        </Box>

        <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
      </div>
    </>
  );
};

export default App;
