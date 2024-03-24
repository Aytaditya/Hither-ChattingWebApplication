import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
                <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 font-mono text-gray-300'>
                    <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign-Up to <span className='text-blue-300'>Hither</span></h1>

                    <form>
                        <div>
                            <label className='label p-2'>
                                <span className="text-base label-text text-gray-300"><i class="fa-solid fa-user"></i> Enter Your Name</span>
                            </label>
                            <input type="text" className="w-full input input-bordered h-10" placeholder='Enter Your Full Name' />
                        </div>
                        <div>
                            <label className='label p-2'>
                                <span className="text-base label-text text-gray-300"><i class="fa-solid fa-address-card"></i> Enter Username</span>
                            </label>
                            <input type="text" className="w-full input input-bordered h-10" placeholder='Enter Your Username' />
                        </div>
                        <div>
                            <label className='label p-2'>
                                <span className="text-base label-text text-gray-300"><i class="fa-solid fa-lock-open"></i> Choose a Password</span>
                            </label>
                            <input type="text" className="w-full input input-bordered h-10" placeholder='Enter a Password' />
                        </div>
                        <div>
                            <label className='label p-2'>
                                <span className="text-base label-text text-gray-300"><i class="fa-solid fa-key"></i> Confirm Your Password</span>
                            </label>
                            <input type="text" className="w-full input input-bordered h-10" placeholder='Enter Password Again' />
                        </div>

                    </form>


                        <GenderCheckBox/>
                    <a href="/" className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block ">Already have an account?</a>

                    <div>
                        <button className=" mt-5 btn btn-block btn-sm ">Create my Account</button>
                    </div>
                </div>







            </div>
        </div>
    )
}

export default SignUp
