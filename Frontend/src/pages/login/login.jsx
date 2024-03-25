import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 font-mono text-gray-300'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login to <span className='text-blue-300'>Hither</span></h1>

        <form>
            <div>
            <label className='label p-2'>
                <span className="text-base label-text text-gray-300"><i class="fa-solid fa-user"> </i> Usename</span>
            </label>
            <input type="text" className="w-full input input-bordered h-10" placeholder='Enter Your Username' />
            </div>
            <div>
            <label className='label p-2'>
                <span className="text-base label-text text-gray-300"><i class="fa-solid fa-key"></i> Password</span>
            </label>
            <input type="text" className="w-full input input-bordered h-10" placeholder='Enter Your Password' />
            </div>
        </form>

        <Link to="/signup" className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block ">{"Don't"} have an account?</Link>
       <div>
        <button className="btn btn-block btn-sm mt-2">Login</button>
       </div>
      </div>
    </div>
  );
};

export default Login;

