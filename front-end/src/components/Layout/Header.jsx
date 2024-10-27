import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AuthenticateNav from '../Header/AuthenticateNav';
import UnauthenticateNav from '../Header/UnauthenticateNav';

const Header = () => {
  const { user } = useAuth();
  return (
    <>
      <section>
        <div className='w-[1144px] mx-auto'>
          <div className='flex w-full items-center py-[20px]'>
            <div className='w-[30%]'>
              <h1 className='font-bold text-3xl'>
                <Link to={'/'}>Mern Auth.v2</Link>
              </h1>
            </div>
            <div className='w-[70%]'>
              <ul className='flex w-full justify-end items-center gap-[20px]'>
                {user ? <AuthenticateNav /> : <UnauthenticateNav />}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
