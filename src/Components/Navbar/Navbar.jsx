import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from '../../assets/fcs-logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className='shadow-md w-full fixed z-10 top-0 left-0 dark:bg-white dark:text-secondary border border-t-0 border-x-0 border-b-4 dark:border-accent'>
      <div className='md:flex items-center justify-between bg-white dark:bg-primary dark:text-secondary py-8 md:px-10 px-7'>
        {/* logo section */}
        <Link to='/'>
          <div className='text-2xl cursor-pointer flex items-center gap-1 text-secondary'>
            <div>
              <img src={logo} alt="" className='h-12' />
            </div>
            <div className='leading-tight'>
              <p className='text-accent text-[0.8em]'>Fcs</p>
              <p className='text-[0.55em]'>Futminna</p>
            </div>
          </div>
        </Link>

        {/* Menu icon */}
        <div onClick={toggleMenu} className='absolute right-8 top-8 cursor-pointer md:hidden w-7 h-7'>
          {open ? <IoClose className='w-8 h-8 text-secondary dark:bg-primary dark:text-secondary' /> : <HiOutlineMenuAlt3 className='w-7 h-7 text-secondary dark:bg-primary dark:text-secondary' />}
        </div>

        {/* link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all dark:bg-primary dark:text-secondary bg-white duration-500 ease-in-out ${open ? 'top-22 duration-75 ease-in-out' : 'top-[-490px]'}`}>
          {/* home */}
          <li className='md:ml-8 md:my-0 my-7 font-semibold'>
            <NavLink
              to='/'
              className={({ isActive }) => `text-accent ${isActive ? "text-secondary" : "text-accent"}`}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          {/* about */}
          <li className='md:ml-8 md:my-0 my-7 font-semibold'>
            <NavLink
              to='/about'
              className={({ isActive }) => `text-accent ${isActive ? "text-secondary" : "text-accent"}`}
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          {/* Departments */}
          <li className='md:ml-8 md:my-0 my-7 font-semibold'>
            <NavLink
              to='/departments'
              className={({ isActive }) => `text-accent ${isActive ? "text-secondary" : "text-accent"}`}
              onClick={closeMenu}
            >
              Departments
            </NavLink>
          </li>
          {/* Register */}
          <li className='md:ml-8 md:my-0 my-7 font-semibold'>
            <NavLink
              to='/register'
              className={({ isActive }) => `text-accent ${isActive ? "text-secondary" : "text-accent"}`}
              onClick={closeMenu}
            >
              <button className='bg-accent p-2 rounded-md text-white hover:bg-secondary'>Register</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
