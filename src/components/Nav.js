import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
export default () => {
  const { user } = useContext(UserContext);
  return (
    <div className='Nav'>
      <NavLink className='NavLink' to='/' exact>
        Home
      </NavLink>
      {user && (
        <NavLink className='NavLink' to='/create' exact>
          Create
        </NavLink>
      )}
      {!user && (
        <>
          <NavLink className='NavLink' to='/login' exact>
            Login
          </NavLink>

          <NavLink className='NavLink' to='/signup' exact>
            Signup
          </NavLink>
        </>
      )}
    </div>
  );
};
