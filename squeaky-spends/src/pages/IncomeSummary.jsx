import {Link} from 'react-router-dom'
import Income from '../components/Income';

function IncomeSummary() {
    return (
                 <div>
                  <Income/>
                  <div style={{margin:'20px'}}><Link to='/new-entry'style={{textDecoration:'none'}}>New Entry</Link></div> 
                  </div>
              )
            }

export default IncomeSummary