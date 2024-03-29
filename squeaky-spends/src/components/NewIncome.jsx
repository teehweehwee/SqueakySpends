import React, {useState} from 'react'
import Airtable from 'airtable'

function NewIncome() {
    const [transactionTitle, setTransactionTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [transactionDate, setTransactionDate] = useState('')
    const [bankAccount, setBankAccount] = useState('')
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY
        const base = new Airtable({apiKey}).base('app4I6H2lPz6A4gWQ')
        try {
            const createdNew = await base('Income').create([
                {
                    "fields": {
                        "Transaction Title": transactionTitle,
                        "Amount": amount,
                        "Transaction Date": transactionDate,
                        "Bank Account": [bankAccount],
                    }
                }
            ]);
    
            console.log('New income created successfully',createdNew);
            setTransactionTitle('');
            setAmount('');
            setTransactionDate('');
            setBankAccount('');
        } catch (error) {
            console.error('Error creating income:', error);
        }
    }
    return (
        <div>
        <h1>New Income</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="transactionTitle">Transaction Title:</label>
                <input
                    type="text"
                    id="transactionTitle"
                    value={transactionTitle}
                    onChange={(event) => setTransactionTitle(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="transactionDate">Transaction Date:</label>
                <input
                    type="date"
                    id="transactionDate"
                    value={transactionDate}
                    onChange={(event) => setTransactionDate(event.target.value)}
                />
            </div>
            <div>
            <select id="bankAccount" value={bankAccount} onChange={(e) => setBankAccount(e.target.value)} required>
        <option value="">Select a Bank Account</option>
        <option value="DBS">DBS</option>
        <option value="UOB">UOB</option>
         </select>
            </div>
            
            <button type="submit">Create New Income</button>
        </form>
    </div>
);
}

export default NewIncome