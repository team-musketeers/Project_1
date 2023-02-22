import './Navbar.css';
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
                <a href="https://www.bing.com/ck/a?!&&p=156972f1b73ca515JmltdHM9MTY3NjkzNzYwMCZpZ3VpZD0xNThkZDVkOS0wY2IwLTZiMDktMTU0ZC1jNzY0MGQ2NTZhZWYmaW5zaWQ9NTE4MA&ptn=3&hsh=3&fclid=158dd5d9-0cb0-6b09-154d-c7640d656aef&psq=att+website&u=a1aHR0cHM6Ly93d3cuYXR0LmNvbS8&ntb=1"
                    target={"_blank"} id="navbar_logo">AT&T</a>
                <div className="navbar_toggle" id="mobile-menu" onClick={() => activate()}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="navbar_menu">
                    <li className="navbar_item">
                        <a href="/" className="navbar_links">Deals</a>
                    </li>
                    <li className="navbar_item">
                        <a href="/tech.html" className="navbar_links">Wireless</a>
                    </li>
                    <li className="navbar_item">
                        <a href="/tech.html" className="navbar_links">Internet</a>
                    </li>
                    <li className="navbar_item">
                        <a href="/tech.html" className="navbar_links">Accessories</a>
                    </li>
                    <li className="navbar_item">
                        <a href="/tech.html" className="navbar_links">TV</a>
                    </li>
                    <li className="navbar_item">
                        <a href="/tech.html" className="navbar_links">Prepaid</a>
                    </li>
                    <li className="navbar_item">
                        <a href="/tech.html" className="navbar_links">Business</a>
                    </li>
                    <li className="navbar_btn">
                        <a href="/tech.html" className="button">My AT&T</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
