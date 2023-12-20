import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useSidebarContext } from '../../context/sidebarContext';
import "./Navbar.scss"

const API_URL = "https://www.themealdb.com/api.php"

const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  return (
    <nav className={`navbar bg-black flex align-center ${scrolled ? 'scrolled' : ""}`}>
      <div className='container w-100'>
        <div className='navbar-content text-white'>
          <div className='brand-and-toggler flex align-center justify-between'>
            <span className='navbar-brand-text fw-7'>
              <Link to="/" className='navbar-brand fs-22 flex align-center'>
                Recipes
              </Link>
            </span>
            <div className='flex align-center gap-x-2'>
              <span className="mealdb-link-btn">
                <Link to={API_URL} className='navbar-brand fw-3 fs-18 flex align-center' target='_blank'>
                  MealDB API
                </Link>
              </span>
              <div className='navbar-btns flex align-center'>
                <button type="button" className='navbar-show-btn text-white' onClick={() => openSidebar()}>
                  <IoMdMenu size={27} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar