import React, { useContext, useState } from 'react';
import { FaMoon, FaShoppingCart, FaSun } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../../provider/ThemeProvider/ThemeProvider';
import useAuth from '../../../components/hooks/useAuth';
import useAdmin from '../../../components/hooks/useAdmin';
import useInstructor from '../../../components/hooks/useInstructor';
import { BubblyLink } from 'react-bubbly-transitions';

const Navbar = () => {
  const { user, logOut } = useAuth();
  //   const admin = true
  const [isAdmin, isAdminLoading] = useAdmin()
  const [isInstructor, isInstructorLoading] = useInstructor();

  const location = useLocation();

  const [isOnDashboard, setIsOnDashboard] = useState(location.pathname.includes('/dashboard'));

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = (e) => {
    e.preventDefault();
    toggleTheme();
    setIsDarkMode(!isDarkMode);

    const htmlElement = document.getElementById('html-theme');
    htmlElement.setAttribute('data-theme', theme);
  };

  const handleLogOut = () => {
    logOut();
  };



  const navbar = (
    <>
      <BubblyLink colorStart="linear-gradient(rgb(225, 29 ,72 ), rgb(255, 255, 255))" colorEnd={theme === 'emerald' ? "rgb(0, 0, 0)" : "rgb(255, 241, 242)"} to="/">Home</BubblyLink>
      <BubblyLink colorStart="linear-gradient(rgb(105, 255, 138), rgb(255, 255, 255))" colorEnd={theme === 'emerald' ? "rgb(0, 0, 0)" : "rgb(255, 241, 242)"} to="/instructors" className="">Instructors</BubblyLink>
      <BubblyLink colorStart="linear-gradient(rgb(105, 255, 138), rgb(255, 255, 255))" colorEnd={theme === 'emerald' ? "rgb(0, 0, 0)" : "rgb(255, 241, 242)"} to="/classes">Classes</BubblyLink>

      {isAdmin ? (
        <BubblyLink to="/dashboard/home">Dashboard </BubblyLink>
      ) : isInstructor ? (<BubblyLink to="/dashboard/home">Dashboard </BubblyLink>) : (
        <BubblyLink to="/dashboard/home">Dashboard </BubblyLink>
      )}



      <button type="button" className='' onClick={handleToggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>

      {user ? (
        <>
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
          <button onClick={handleLogOut} className="font-semibold btn- btn-outline btn-success mx-4">Log out</button>
        </>
      ) : (
        <BubblyLink to="/login" className="font-semibold mx-4">Login</BubblyLink>
      )}
    </>
  );

  const isFixedNavbar = !isOnDashboard ? 'fixed z-10' : '';

  return (
    <div className={`navbar ${isFixedNavbar} bg-opacity-70 bg-black text-white w-full`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="text-black menu font-semibold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navbar}
          </ul>
        </div>
        <div className="avatar">
          <div className="w-10 rounded">
            <img src="https://i.ibb.co/0r2pGbd/pngtree-girl-meditating-sports-illustration-png-im.png" />
          </div>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Tasnia-YMS</a>
      </div>

      <div className="navbar-end">
        <ul className="menu font-semibold space-x-4 menu-horizontal px-1 hidden lg:flex items-center">
          {navbar}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
