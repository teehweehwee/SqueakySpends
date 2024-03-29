import React, { useState, useEffect } from 'react';
import Airtable from 'airtable';

function TotalBudget() {
  const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
  const base = new Airtable({ apiKey }).base('app4I6H2lPz6A4gWQ');
  const [totalBudget, setTotalBudget] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState('SGD');
  const [conversionRates, setConversionRates] = useState({
    TWD: 1,
    MYR: 1,
  });

  const [data, setData] = useState({
    totalIncome: 0,
    totalExpense: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const incomeRecords = await base('Income').select({
          view: 'Grid view',
        }).all();

        const expensesRecords = await base('Expenses').select({
          view: 'Grid view',
        }).all();

        setData({
          totalIncome: incomeRecords.reduce((acc, record) => {
            return acc + parseFloat(record.get('Amount') || 0);
          }, 0),
          totalExpense: expensesRecords.reduce((acc, record) => {
            return acc + parseFloat(record.get('Amount') || 0);
          }, 0),
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${selectedCurrency}`);
        const data = await response.json();
        setConversionRates({
          TWD: data.rates.TWD,
          MYR: data.rates.MYR,
        });
      } catch (error) {
        console.error('Error fetching conversion rate:', error);
      }
    };

    fetchConversionRate();
  }, [selectedCurrency]);

  useEffect(() => {
    setTotalBudget(data.totalIncome - data.totalExpense);
  }, [data]);

  useEffect(() => {
    if (totalBudget && conversionRates.TWD && conversionRates.MYR) {
      setTotalBudget(totalBudget * (selectedCurrency === 'SGD' ? 1 : (totalBudget > 0 ? conversionRates[selectedCurrency] : conversionRates[selectedCurrency] * -1)));
    }
  }, [conversionRates, selectedCurrency, totalBudget]);


  return (
    <div>
      <h2>
        Total Budget:{' '}
        <span
          style={{ color: totalBudget >= 0 ? 'green' : 'red' }}
        >{`${Math.abs(
          totalBudget.toFixed(2)
        )} ${selectedCurrency}`}</span>
      </h2>
      <h3>Converted Budget:</h3>
      <ul>
        <li>TWD: {(totalBudget * conversionRates.TWD).toFixed(2)}</li>
        <li>MYR: {(totalBudget * conversionRates.MYR).toFixed(2)}</li>
      </ul>
    </div>
  );
}

export default TotalBudget;