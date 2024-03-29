import {Link} from 'react-router-dom'
import './Home.css' 


function Home() {
    return (
          <div className='home-bg'>
            <div className='income' style={{margin:'20px'}}><Link to='/income' style={{textDecoration:'none',color:'pink'}}>Income</Link></div>
<div className='expense'style={{margin:'20px'}}><Link to='/expense' style={{textDecoration:'none',color:'pink'}}>Expense</Link></div>
<div className='total'style={{margin:'20px'}}><Link to='/total' style={{textDecoration:'none',color:'black'}}>Total</Link></div>
          <div className="portrait-view">
                </div>
                </div>

      )
    }
    

export default Home