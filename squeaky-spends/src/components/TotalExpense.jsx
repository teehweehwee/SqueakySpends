import React, { useState, useEffect } from 'react';
import Airtable from 'airtable';

function TotalExpense() {
  const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY
  const base = new Airtable({apiKey}).base('app4I6H2lPz6A4gWQ') 
  const [totalExpense, setTotalExpense] = useState(0);

  const fetchExpense = async () => {
    try {
      const records = await base('Expenses').select({
        view: 'Grid view',
      }).all();

      // Calculate total income from fetched records
      const total = records.reduce((acc, record) => {
        return acc + parseFloat(record.get('Amount') || 0); // Assuming 'Amount' field contains income amount
      }, 0);

      setTotalExpense(total);
    } catch (error) {
      console.error('Error fetching Expense:', error);
    }
  };

  useEffect(() => {
    fetchExpense();
  }, []);

  return (
    <div>
      <h2 style={{color:'red'}}>Total Expense: <span>${totalExpense.toFixed(2)}</span></h2>
    </div>
  );
}

export default TotalExpense;
