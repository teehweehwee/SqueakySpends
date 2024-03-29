import TotalBudget from '../components/TotalBudget';
import TotalExpense from '../components/TotalExpense';
import TotalIncome from '../components/TotalIncome';


function FinalSummary() {
    return (
          <div>
            <TotalIncome/>
            <TotalExpense/>
            <TotalBudget/>
                </div>
      )
    }
    

export default FinalSummary