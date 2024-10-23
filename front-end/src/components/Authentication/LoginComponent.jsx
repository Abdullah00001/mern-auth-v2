import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
  const [usernameFieldError, setUsernameFieldError] = useState(null);
  const [passwordFieldError, setPasswordFieldError] = useState(null);
  const [seePassword, setSeePassword] = useState(false);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const passwordError = [
    'Password must be at least 6 characters long',
    'Must contain at least one uppercase letter',
    'Must contain at least one lowercase letter and one number',
  ];

  const seePass = () => {
    setSeePassword(!seePassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setUsernameFieldError(null);
    setPasswordFieldError(null);
    let formValid = true;
    const username = e.target.userName.value.toLowerCase();
    const password = e.target.userPassword.value;
    if (!username) {
      formValid = false;
      setUsernameFieldError(
        'Username Required.You Cant Submit Without Username'
      );
    }

    if (!password) {
      setPasswordFieldError(
        'Password Required.You Cant Submit Without Password'
      );
      formValid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordFieldError(passwordError);
      formValid = false;
    }
    if (formValid) console.log({ username, password });
  };
  return (
    <>
      <section>
        <div className='flex justify-center items-center h-[80vh]'>
          <div className='w-[600px] rounded-[15px] shadow-2xl p-[25px]'>
            <h1 className='text-3xl font-bold '>Wellcome Back :-)</h1>
            <p className='text-lg font-medium mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <form className='mt-5' onSubmit={handleLogin}>
              <div className='flex flex-col gap-3'>
                <label htmlFor='userName' className='text-xl font-semibold'>
                  User Name<span className='text-red-600'>*</span>
                </label>
                <input
                  type='text'
                  name='userName'
                  id='userName'
                  placeholder='Please Type Your UserName'
                  className='outline-none p-4 border-[2px] border-gray-500 rounded-[10px] w-[500px]'
                />
                {usernameFieldError && (
                  <p
                    aria-live='assertive'
                    className='font-semibold text-[14px] text-red-500'
                  >
                    {usernameFieldError}
                  </p>
                )}
              </div>
              <div className='flex flex-col gap-3 mt-4 relative'>
                <label htmlFor='userPassword' className='text-xl font-semibold'>
                  Password<span className='text-red-600'>*</span>
                </label>
                <input
                  type={seePassword ? 'text' : 'password'}
                  name='userPassword'
                  id='userPassword'
                  placeholder='Please Type Your Password'
                  className='outline-none p-4 border-[2px] border-gray-500 rounded-[10px] w-[500px]'
                />
                <span
                  className='absolute top-[57px] left-[80%] font-bold cursor-pointer'
                  onClick={seePass}
                >
                  {seePassword ? 'Hide' : 'See'}
                </span>
                {passwordFieldError && (
                  <div
                    aria-live='assertive'
                    className='font-semibold text-[14px] text-red-500'
                  >
                    {Array.isArray(passwordFieldError) ? (
                      <ul className='list-disc pl-[19px]'>
                        {passwordFieldError.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{passwordFieldError}</p>
                    )}
                  </div>
                )}
              </div>
              <button className='px-[25px] py-[12px] rounded-[10px] text-lg font-bold bg-lime-900 mt-[25px] text-white'>
                Login
              </button>
            </form>
            <p className='text-[16px]  text-blue-500 mt-[14px]'>
              Didnt Have An Account! Please{' '}
              <span className='font-bold'>
                <Link to={'/signup'}>Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginComponent;
