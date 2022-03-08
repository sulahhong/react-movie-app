import { useState } from 'react'
import {FaFacebook, FaTwitter, FaBars} from 'react-icons/fa'
import {ImVideoCamera} from "react-icons/im"
import {GoSearch} from "react-icons/go"

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
                <li><a href="#"><GoSearch /></a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">My list</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>      
            
        </nav>

    )
}

export default Navbar;