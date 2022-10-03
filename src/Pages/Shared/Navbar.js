import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/products'>Manage Inventory</NavLink>
      </li>
      <li>
        <NavLink to='/additem'>Add Item</NavLink>
      </li>
      <li>
        {user ? (
          <button
            className='text-white btn btn-outline-danger rounded-pill'
            onClick={handleSignOut}
          >
            Sign out
          </button>
        ) : (
          <NavLink
            className='text-white btn btn-outline-primary rounded-pill'
            to='/login'
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className='sticky top-0 z-50'>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex='0' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex='0'
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              {menuItems}
            </ul>
          </div>
          <a href='/' className='btn btn-ghost normal-case text-xl'>
            Books Warehouse
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
