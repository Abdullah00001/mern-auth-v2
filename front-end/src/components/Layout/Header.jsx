import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

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
                <ul className="flex w-full justify-end items-center gap-[20px]">
                    <li className='text-xl font-bold'>
                        <Link to={"/signup"}>Signup</Link>
                    </li>
                    <li className='text-xl font-bold'>
                        <Link to={"/login"}>Login</Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
