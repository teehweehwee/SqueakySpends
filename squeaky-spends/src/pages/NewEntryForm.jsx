import React, { useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';
import NewExpense from '../components/NewExpense';
import NewIncome from '../components/NewIncome';

const NewEntryForm = () => {
  const [state, setState] = useState('newIncome');

  const handleToggle = () => {
    setState(prevState => (prevState === 'newIncome' ? 'newExpense' : 'newIncome'));
  };

  return (
    <div>
      <ToggleSwitch checked={state === 'newIncome'} onToggle={handleToggle} />
      {state === 'newExpense' && <NewExpense />}
      {state === 'newIncome' && <NewIncome />}
    </div>
  );
};

export default NewEntryForm;