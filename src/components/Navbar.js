import { useState } from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

const Navbar = () =>{
    const [ham,setHam] = useState(false);

    const hamHandler = () =>{
        setHam((curr) => !curr)
       
    }

   

    return(
        <>
        <nav className='navbaritems'>
            <h1 className='navbar-logo'>Travel</h1>

            <div className='ham-icon'  >
                <i onClick={hamHandler} className={ham ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={ham ? 'nav-menu:active' : 'nav-menu'}>
                <li>
                    <Link to= '/' className='nav-links'><i className="fa-solid fa-house-user"></i>Home</Link>
                </li>

                <li>
                    <Link to= '/about' className='nav-links' ><i className="fa-solid fa-address-card"></i>About</Link>
                </li>


                <li>
                    <Link to='/service' className='nav-links'><i className="fa-solid fa-briefcase"></i>Services</Link>
                </li>

                <li>
                    <Link to='/contact' className='nav-links'><i className="fa-solid fa-id-card-clip"></i>Contact</Link>
                </li>

                <li>
                    <Link className='navlink-btn'>Sign Up</Link>
                </li>
            </ul>

            <button>Sign Up</button>
        </nav>
        </>
    )
}

export default Navbar;