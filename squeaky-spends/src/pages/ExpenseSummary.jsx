import {Link} from 'react-router-dom'
import Expense from '../components/Expense';

function ExpenseSummary() {
    return (
          <div>
            <Expense/>
            <div style={{margin:'20px'}}><Link to='/new-entry'style={{textDecoration:'none'}}>New Entry</Link></div> 
                </div>
                
      )
    }
    
export default ExpenseSummary