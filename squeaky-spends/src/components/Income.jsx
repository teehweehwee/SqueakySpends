import React, { useState, useEffect } from 'react';
import Airtable from 'airtable'

function Income() {
    const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY
    const base = new Airtable({apiKey}).base('app4I6H2lPz6A4gWQ')
    const [transactions,setTransactions] = useState([])
  const fetchIncome = async () => {
      try {
          const records= await base('Income').select({
              //maxRecords: 3,
              view:'Grid view',
          }).all();
          setTransactions(records)
      } catch(error){
          console.error('Error fetching Income:', error);
      }
  }

  const deleteIncome = async (incomeId) => {
    try {
      const deletedRecord = await base('Income').destroy(incomeId.toString());
      if (deletedRecord) {
        console.log('Income deleted successfully:', deletedRecord);
        fetchIncome();
      }
    } catch (error) {
      console.error('Error deleting income:', error);
    }
  }

  useEffect(()=> {
      fetchIncome();


  },[])

  return (
      <div>
      <h1>Income Summary</h1>
      <table>
          <thead>
              <tr>
                  <th>Transaction Title</th>
                  <th>Amount</th>
                  <th>Transaction Date</th>
                  <th>Bank Account</th>
              </tr>
          </thead>
          <tbody>
              {transactions.map((record, index) => {
                  return (
                      <tr key={index}>
                          <td>{record.get('Transaction Title') || 'Not titled'}</td>
                          <td>{record.get('Amount') || 'No money in'}</td>
                          <td>{record.get('Transaction Date') || 'Not dated'}</td>
                          <td>{record.get('Bank Account') || 'NIL'}</td>
                          <td><button onClick={() => deleteIncome(record.getId())}>Delete</button></td>
                
                      </tr>
                  );
              })}
          </tbody>
      </table>
  </div>
  );
}

export default Income