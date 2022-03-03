import {FaFacebook, FaTwitter} from 'react-icons/fa'
import {ImVideoCamera} from "react-icons/im"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <i><ImVideoCamera /></i>
                <a href=""> Home box</a>
            </div>
            <ul className='navbar-menu'>                
                <li>Home</li>
                <li>about</li>
                <li>My list</li>
            </ul>       
            <ul className='navbar-icons'>
                <li><i><FaFacebook /></i></li>
                <li><i><FaTwitter /></i></li>
            </ul>     
        </nav>

    )
}

export default Navbar;