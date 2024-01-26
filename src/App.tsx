import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './components/Redux/userSlice';
import Step1Form from './components/Step1Form';
import Step2Form from './components/Step2Form';
import DatatableList from './components/BasicTable';
import { RootState } from './components/Redux/rootReducer';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);

  const [step, setStep] = useState(1);

  const handleStep1Submit = (data: any) => {
    // Dispatch an action to save data to Redux store
    dispatch(addUser(data));
    // Move to Step 2
    setStep(2);
  };

  const handleStep2Submit = (data: any) => {
    // Dispatch an action to save data to Redux store
    dispatch(addUser(data));
    // Move to Step 1
    setStep(1);
  };

  return (
    <div>
      {step === 1 ? (
        <Step1Form onSubmit={handleStep1Submit} />
      ) : (
        <Step2Form onSubmit={handleStep2Submit} />
      )}
      {/* <DatatableList users={users} /> */}
    </div>
  );
};

export default App;
