import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react';


// use this component if you want to add another endpoint in the navbar :)
// <NavItem href="/endpoint">Endpoint Name</NavItem>
const NavItem = ({children, href}) => {
    return(
    <Link to={href}
    className="relative cursor-pointer transition-colors duration-300 hover:text-sky-400 
            after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:w-0 after:h-[2px] after:bg-sky-400 
            after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full px-4">
        {children}
    </Link>
    )
}


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
    <nav className="bg-slate-950 text-amber-50 w-full">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <p className="text-2xl font-bold"><Link to="/">HOMEPAGE</Link></p>

        <div className="hidden md:flex space-x-8 text-xl font-semibold">
          <NavItem href="/create">Create</NavItem>
          <NavItem href="/about">About</NavItem>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-xl font-semibold">
          <NavItem href="/create" onClick={closeMenu}>Create</NavItem>
          <NavItem href="/about" onClick={closeMenu}>About</NavItem>
        </div>
      )}
    </nav>
    )
}

export default Navbar