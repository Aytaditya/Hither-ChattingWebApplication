import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin'; 

const Login = () => {
   const { loading, login } = useLogin(); // Destructuring useLogin to use this
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password); // Calling the login function
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 font-mono text-gray-300'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login to <span className='text-blue-300'>Hither</span></h1>

        <form onSubmit={handleSubmit}>
            <div>
            <label className='label p-2'>
                <span className="text-base label-text text-gray-300"><i className="fa-solid fa-user"> </i> Username</span>
            </label>
            <input type="text" className="w-full input input-bordered h-10" placeholder='Enter Your Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
            <label className='label p-2'>
                <span className="text-base label-text text-gray-300"><i className="fa-solid fa-key"></i> Password</span>
            </label>
            <input type="password" className="w-full input input-bordered h-10" placeholder='Enter Your Password'  value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Link to="/signup" className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block ">{"Don't"} have an account?</Link>
            <button type="submit" className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-sp"></span> : "Login"}
            </button>
        </form>

        
      </div>
    </div>
  );
};

export default Login;
