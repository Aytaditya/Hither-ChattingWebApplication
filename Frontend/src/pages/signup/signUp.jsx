import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'


const SignUp = () => {

    const [inputs,setInputs]=useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:""
    })

    //destructuring loading and signup from custom hook useSignUp 
    const {loading,signup}=useSignup()

    // This is to set Gender
    const handleCheckBox=(gender)=>{
        setInputs({...inputs,gender:gender})
    }
    const handleSubmit=async(e)=>{
       e.preventDefault();
        await signup(inputs)
        
    }
    return (
        <div>
            <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
                <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 font-mono text-gray-300'>
                    <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign-Up to <span className='text-blue-300'>Hither</span></h1>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='label p-2'>
                                <span className="text-base label-text text-gray-300"><i className="fa-solid fa-user"></i> Enter Your Name</span>
                            </label>
                            <input type="text" className="w-full input input-bordered h-10" placeholder='Enter Your Full Name' value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} />
                        </div>
                        <div>
                            <label className='label p-2'>
                                <span className="text-base label-text text-gray-300"><i className="fa-solid fa-address-card"></i> Enter Username</span>
                            </label>
                            <input type="text" className="w-full input input-bordered h-10" placeholder='Enter Your Username' value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})} />
                        </div>
                        <div>
                            <label className='label p-2'>
                                <span className="text-base label-text text-gray-300"><i className="fa-solid fa-lock-open"></i> Choose a Password</span>
                            </label>
                            <input type="text" className="w-full input input-bordered h-10" placeholder='Enter a Password' value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} />
                        </div>
                        <div>
                            <label className='label p-2'>
                                <span className="text-base label-text text-gray-300"><i className="fa-solid fa-key"></i> Confirm Your Password</span>
                            </label>
                            <input type="text" className="w-full input input-bordered h-10" placeholder='Enter Password Again' value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} />
                        </div>
                        <GenderCheckBox onCheckBoxChange={handleCheckBox} selectedGender={inputs.gender}/>
                    <Link to="/login" className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block ">Already have an account?</Link>

                    <div>
                        <button className=" mt-5 btn btn-block btn-sm " disabled={loading}>
                            {loading ? <span className="loading loading-sp"></span> : "Create My Account"}
                        </button>
                    </div>

                    </form>


                      
                </div>







            </div>
        </div>
    )
}

export default SignUp
