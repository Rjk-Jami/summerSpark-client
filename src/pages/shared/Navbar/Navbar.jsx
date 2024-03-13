import React, { useContext, useState } from 'react';
import { FaMoon, FaShoppingCart, FaSun } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../../provider/ThemeProvider/ThemeProvider';
import useAuth from '../../../components/hooks/useAuth';
import useAdmin from '../../../components/hooks/useAdmin';
import useInstructor from '../../../components/hooks/useInstructor';
import { BubblyLink } from 'react-bubbly-transitions';
import { BsFillPersonFill } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import { FiSettings } from 'react-icons/fi';
const Navbar = () => {
  const { user, logOut } = useAuth();
  //   const admin = true
  const [isAdmin, isAdminLoading] = useAdmin()
  const [isInstructor, isInstructorLoading] = useInstructor();

  const location = useLocation();



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
      <NavLink className={({ isActive }) => isActive ? `text-[#4D6DE3]` : ``} to="/">Home</NavLink>
      <NavLink to="/instructors" className={({ isActive }) => isActive ? `text-[#4D6DE3]` : ``}>Instructors</NavLink>
      <NavLink to="/classes" className={({ isActive }) => isActive ? `text-[#506ed8c9] ` : ``}>Classes</NavLink>
      {isAdmin ? (
        <NavLink to="/dashboard/home" className={({ isActive }) => isActive ? `text-[#4D6DE3]` : ``}>Dashboard </NavLink>
      ) : isInstructor ? (<NavLink to="/dashboard/home" className={({ isActive }) => isActive ? `text-[#4D6DE3]` : ``}>Dashboard </NavLink>) : (
        <NavLink to="/dashboard/home" className={({ isActive }) => isActive ? `text-[#4D6DE3]` : ``}>Dashboard </NavLink>
      )}


      <NavLink>
        <button className='my-2' type="button" onClick={handleToggleTheme} >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

      </NavLink>
      <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
        {
          user ? <> {
            user?.photoURL ? <img src={user?.photoURL} alt="" tabIndex={0} role="button" className="btn btn-circle btn-md md:btn-sm" /> :
              <><BsFillPersonFill tabIndex={0} role="button" className="btn btn-circle  btn-md md:btn-sm w-full p-2 text-[#506ed8c9]"  ></BsFillPersonFill></>
          }
            <ul tabIndex={0} className=" dropdown-content z-[1] card card-compact p-2     rounded-box text-right before:mt-2 before:bg-transparent">

              <li className='w-auto'><NavLink to={'/dashboard/home'} className="justify-start flex flex-row-reverse gap-2 items-center text-md text-white bg-black/30 hover:text-[#4D6DE3] rounded-none rounded-t cursor-pointer mt-1 " >
                <FiSettings className="font-semibold  " /><p>Dashboard</p></NavLink> </li>
              <li className='w-auto'><div onClick={handleLogOut} className="justify-start flex flex-row-reverse gap-2 items-center text-md text-white bg-black/30 hover:text-[#4D6DE3] cursor-pointer rounded-none rounded-b" >
                <TbLogout2 className="font-semibold  " /><p>logout</p></div> </li>

            </ul></> : <><NavLink to={'/login'}>Login / Register</NavLink></>
        }

      </div>
    </>
  );



  return (
    <div className="max-w-screen-xl mx-auto relative">
      <div className={`navbar fixed mt-0 z-10 top-0 text-white  backdrop-blur-xl bg-black/30 xl:max-w-screen-xl rounded-full`}>
        <div className="navbar-start">


          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg></label>
            </div>
            <div className="drawer-side z-30">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-lg">
                {/* Sidebar content here */}
                {navbar}

              </ul>
            </div>
          

          </div>


          <div className="avatar">
            <div className="w-10 rounded">
              <img src="https://i.ibb.co/0r2pGbd/pngtree-girl-meditating-sports-illustration-png-im.png" />
            </div>
          </div>
          <a className="font-bold normal-case text-xl ms-3">Summer&nbsp;Spark</a>
        </div>

        <div className="navbar-end">
          <ul className="menu font-semibold text-lg space-x-4 menu-horizontal px-1 hidden lg:flex items-center ">
            {navbar}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
