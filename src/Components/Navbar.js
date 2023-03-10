import './Navbar.css';
import {Link} from 'react-router-dom';
function activate(){
    const menu = document.querySelector('.navbar_toggle');
    const menuLinks = document.querySelector('.navbar_menu');
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar_container">
                <a target={"_blank"} id="navbar_logo">React</a>
                <div className="navbar_toggle" id="mobile-menu" onClick={() => activate()}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="navbar_menu">
                    <li className="navbar_item">
                        <Link to = "/login" className='navbar_links'>Login</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to =" " className="navbar_links">Home</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to = "/dairy" className='navbar_links'>Dairy</Link>
                    </li>
                    <li className="navbar_item">
                        <a href="/usecontext" className="navbar_links">UseContext</a>
                    </li>
                    <li className="navbar_item">
                        <Link to='/usestate' className='navbar_links'>UseState</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to = "/liftstate" className='navbar_links'>LifingStateUp</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to = "/customhook1" className='navbar_links'>1</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to = "/customhook2" className='navbar_links'>2</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
