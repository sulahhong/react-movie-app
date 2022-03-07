import { useState } from 'react'
import {FaFacebook, FaTwitter, FaBars} from 'react-icons/fa'
import {ImVideoCamera} from "react-icons/im"

const Navbar = () => {
    // const [showNav, setShowNav] = useState();
    const navtoggle= () => {
        {}
    }

    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <i><ImVideoCamera /></i>
                <a href="/"> Home box</a>
            </div>
            <ul className='navbar-menu'>                
                <li><a href="#">Home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">My list</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>       
            <ul className='navbar-icons'>
                <li><i><FaFacebook /></i></li>
                <li><i><FaTwitter /></i></li>
            </ul> 
            {/* <a className='navbar-toggleBtn'>
                <i><FaBars /></i>
            </a> */}
            
        </nav>

    )
}

export default Navbar;