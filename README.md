# SqueakySpends🐷💰

🎉 Welcome to "SqueakySpends" – your go-to expense tracking app for the financially befuddled and budget-challenged minds! 💸🐭 <br>
*(Disclaimer: This might not solve all your financial problems, but it's a start)*

Embark on a thrilling journey into the realm of personal finance with "SqueakySpends." This isn't your run-of-the-mill expense tracker – it's the brainchild of someone wrestling with the intricacies of financial chaos (namely, me).

Now, you might be intrigued by the peculiar name "SqueakySpends". Why "Squeaky"? Well, after a series of questionable life choices, my wallet echoes the squeaky clean aftermath. And "Spends"? It's a nod to the perpetual rhythm where the outflow consistently surpasses the inflow.

If you're pondering, why create "SqueakySpends"? If you're rolling in cash, you probably don't need it. And if you possess a photographic memory, why bother? 
But fear not, for the creator of this app is all too familiar with these internal struggles – just one of the many problems in her vast repertoire. So, "SqueakySpends" was born out of necessity, a delulu solulu to the creator's 1 out of 62353535 problems. Join the journey of financial salvation and let's make budgeting a tad less intimidating! 🌐💡💸

## Use!!✅
CLICK ME >> *(https://squeaky-spends.vercel.app/)*

## Code Explanation 💬
The code consist of the following components:
### pages
- `home.jsx` serves as the main page for navigation into different pages
- `incomesummary.jsx` displays the breakdown of the sources of incomes, calls the income.jsx component and new entry component
- `expensesummary.jsx` displays the breakdown of the expenses, calls the expense.jsx component and new entry component
- `finalsummary.jsx` contains the consolidated figures and the different currencies called from external API
  
### components
- `expense.jsx` & `income.jsx` are essentially the same component, draw data from the airtable and displays the breakdown of the expenses and income into the transactions and categories in a table format (better way to do this is to combine both into one component and pass down income/expense as a prop, but can't seem to get it work ded)
- `newexpense.jsx` & `newincome.jsx` provides a form for user (aka me) to key in values and adds them into the airtable
- `total expense` & `total income` uses a reduce function to tabulate the amount of money from the transactions
- `total budget` is total income-total expense. there is a calling of an external API to display the number into different currencies for countries i frequent  


## Appearance 📸
### Lobby Page
![image](https://github.com/teehweehwee/SqueakySpends/assets/152649355/6df06ff4-8074-4d2c-82c9-ce5761582dcc)

## Future Enhancements 💄
- upload images of receipts or purchases (e.g. food,bbt,cabinet,handbags)
- alot more CSS
