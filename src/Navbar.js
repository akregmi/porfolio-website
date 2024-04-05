import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Navbar(){
    // Get the current location using useLocation hook from React Router
    const location = useLocation();

    // Function to determine if a given link should be marked as active
    const isActive = (path) => {
        return location.pathname === path;
    };

    return ( 
        <div className="navbar">
            <a className={isActive('/about') ? 'active' : ''} href="/about">My Projects</a>
            <a className={isActive('/services') ? 'active' : ''} href="/services">Skills</a>
            <a className={isActive('/contact') ? 'active' : ''} href="/contact">Contact</a>
            <a className={isActive('/') ? 'active' : ''} href="/">Home</a>
        </div>
     );
}
 
export default Navbar;