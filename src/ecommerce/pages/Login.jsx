import React from 'react';
import Logo from '../ecommerce_images/macylogo.png';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
     <a href="/">
       <img src={Logo} alt="Logo" className="w-28 mb-5" />
     </a>

      <div className="sm:w-[350px] w-full flex flex-col p-5 border-0 sm:border-2 border-gray-500 space-y-4 shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-lg">
        <h1 className="text-3xl font-medium">Log in</h1>

        <label className="text-[19px] font-[500]">Mobile or Email</label>
        <input
          type="text"
          className="w-full border-2 border-[#a0a0a0] p-2 rounded focus:outline focus:outline-[3px] focus:outline-[#b8edfb]"
        />

        <label className="text-[19px] font-[500]">Password</label>
        <input
          type="password"
          placeholder="At least 6 characters"
          className="w-full border-2 border-[#a0a0a0] p-2 rounded focus:outline focus:outline-[3px] focus:outline-[#b8edfb]"
        />

        <button className="bg-[#deb326] hover:bg-[#e8b529] text-black font-[500] py-2 px-4 rounded w-full text-xl">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Login;
