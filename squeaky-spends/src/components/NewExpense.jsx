import React, {useState} from 'react'
import Airtable from 'airtable'

function NewExpense() {
    const [transactionTitle, setTransactionTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [transactionDate, setTransactionDate] = useState('')
    const [typeOfSpending, setTypeOfSpending] = useState('')
    const [paymentMode, setPaymentMode] = useState('')
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY
        const base = new Airtable({apiKey}).base('app4I6H2lPz6A4gWQ')
        try {
            const createdNew = await base('Expenses').create([
                {
                    "fields": {
                        "Transaction Title": transactionTitle,
                        "Amount": amount,
                        "Transaction Date": transactionDate,
                        "Type of Spending": [typeOfSpending],
                        "Payment Mode": [paymentMode],
                    }
                }
            ]);
    
            console.log('New expense created successfully',createdNew);
            setTransactionTitle('');
            setAmount('');
            setTransactionDate('');
            setTypeOfSpending('');
            setPaymentMode('');
        } catch (error) {
            console.error('Error creating expense:', error);
        }
    }
    return (
        <div>
        <h1>New Expense</h1>
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
            <label htmlFor="typeOfSpending">Type of Spending:</label>
        <select id="typeOfSpending" value={typeOfSpending} onChange={(e) => setTypeOfSpending(e.target.value)} required>
        <option value="">Select a Spending Type</option>
        <option value="food">food</option>
        <option value="gifts">gifts</option>
        <option value="necessities">necessities</option>
        <option value="drinks">drinks</option>
        <option value="service">service</option>
         </select>
            </div>
            <div>
            <label htmlFor="paymentMode">Payment Mode:</label>
        <select id="paymentMode" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} required>
        <option value="">Select a Payment Mode</option>
        <option value="credit card">credit card</option>
        <option value="cash">cash</option>
        <option value="shopback">shopback</option>
        <option value="grab">grab</option>
        <option value="bank transfer">bank transfer</option>
         </select>
            </div>
            <button type="submit">Create New Expense</button>
        </form>
    </div>
);
}

export default NewExpense