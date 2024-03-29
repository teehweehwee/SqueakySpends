import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
        <nav style={{display:'inline-flex', position:'fixed', top:'0', right:'0'}}>
<div style={{margin:'20px',color:'white'}}><Link to='/' style={{textDecoration:'none',color:'black'}}>Home</Link></div></nav>

        </>
    )
}

export default Navbar