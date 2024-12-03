import { useState } from "react";
import { NavLinks } from "./consts";
import { styles } from "../styles/Navbar.styles";
import logo from '../assets/logo.png'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
      <nav className={`flex flex-row items-center justify-between ${styles.paddingX} py-4`}>
        <div className="text-2xl font-bold">
          <img src={logo} alt="logo" width={50} height={50}/>
        </div>
        <ul className="hidden space-x-8 md:flex">
          {NavLinks.map((nav) => (
            <li>
              <a 
                href={`#${nav.id}`}
                className={styles.underlineTransition}>
                  {nav.title}
                </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-end md:hidden">
          <button onClick={toggleMenu} className="py-1 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button> 
          {menuOpen &&  
            <ul className={`md:hidden flex flex-col items-end top-16 left-0 w-full transition-transform duration-300 ease-in-out ${menuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            {NavLinks.map((nav) => (
              <li className="py-2">
                <a 
                  href={`#${nav.id}`}
                  onClick={toggleMenu}>
                    {nav.title}
                  </a>
              </li>
            ))}
          </ul>}
        </div>
      </nav>
    );
  };

export default Navbar;