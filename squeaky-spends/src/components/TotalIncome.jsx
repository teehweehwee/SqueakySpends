import React, { useState, useEffect } from 'react';
import Airtable from 'airtable';

function TotalIncome() {
  const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY
  const base = new Airtable({apiKey}).base('app4I6H2lPz6A4gWQ') 
  const [totalIncome, setTotalIncome] = useState(0);

  const fetchIncome = async () => {
    try {
      const records = await base('Income').select({
        view: 'Grid view',
      }).all();

      // Calculate total income from fetched records
      const total = records.reduce((acc, record) => {
        return acc + parseFloat(record.get('Amount') || 0); // Assuming 'Amount' field contains income amount
      }, 0);

      setTotalIncome(total);
    } catch (error) {
      console.error('Error fetching Income:', error);
    }
  };

  useEffect(() => {
    fetchIncome();
  }, []);

  return (
    <div>
      <h2 style={{color:'green'}}>Total Income: ${totalIncome.toFixed(2)}</h2>
    </div>
  );
}

export default TotalIncome;
