import React, { useState, useEffect } from 'react';
import Airtable from 'airtable'

function Expense() {
    const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY
const base = new Airtable({apiKey}).base('app4I6H2lPz6A4gWQ')
const [transactions,setTransactions] = useState([])
const fetchTable = async () => {
    try {
        const records= await base('Expenses').select({
            //maxRecords: 3,
            view: 'Grid view',
        }).all();
        setTransactions(records)
    } catch(error) {
        console.error('Error fetching Expenses:', error);
    }
}
const deleteExpense = async (expenseId) => {
    try {
      const deletedRecord = await base('Expenses').destroy(expenseId.toString());
      if (deletedRecord) {
        console.log('Expense deleted successfully:', deletedRecord);
        fetchTable();
      }
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  }


useEffect(()=> {
    fetchTable();
},[])

return (
    <div>
    <h1>Expense Summary</h1>
    <table>
        <thead>
            <tr>
                <th>Transaction Title</th>
                <th>Amount</th>
                <th>Transaction Date</th>
                <th>Type of Spending</th>
                <th>Payment Mode</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map((record, index) => {
                return (
                    <tr key={index}>
                        <td>{record.get('Transaction Title') || 'Not titled'}</td>
                        <td>{record.get('Amount') || 'Not priced'}</td>
                        <td>{record.get('Transaction Date') || 'Not dated'}</td>
                        <td>{record.get('Type of Spending') || 'NIL'}</td>
                        <td>{record.get('Payment Mode') || 'NIL'}</td>
                        <td><button onClick={() => deleteExpense(record.getId())}>Delete</button></td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>
);
}

export default Expense