import React from 'react'

export default function Insta() {


    return (

        <>
            <div className=' py-6'>

                <div className=" container flex flex-col  mb-28 justify-center items-center">
                    <p className='font-sans text-xs '>Connect with friends and the world around you on Instagram </p>
                    <div className="left  ">
                    </div>


                    <div className="right flex flex-col bg-white px-10 border-2 drop-shadow-sm	 w-96 py-3 pb-4 mt-4 ">
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"

                                alt=""
                                className='w-40 ml-16'
                            />
                        </div>
                        <input className='border-solid border-2 border-gray-200 p-2 my-2 bg-gray-100  outline-blue-400 rounded-md'
                            type="text"
                            placeholder='Phone number,username, or email' />
                        <input className='border-solid border-2 border-gray-200 p-2 my-2 bg-gray-100 outline-blue-400 rounded-md'
                            type="text "
                            placeholder='Password' />
                        <button className="btn btn-primary my-2 font-bold text-md rounded-md"
                        >Log In
                        </button>
                        <span className='my-2 text-center text-blue-600 text-sm hover:underline cursor-pointer'
                        >Forgotten password?
                        </span>
                        <hr className='my-2 ' />
                        <button className="btn btn-success mt-3 hover:bg-green-700 font-bold w-fit mx-auto px-6"
                        >Create Account
                        </button>

                        {/* <div className='text-center '>
            <span className='text-sm '> <span>create a page</span> a brand or business</span>
        </div> */}
                    </div>
                    <div className='text-sm mt-3 drop-shadow-sm border-2 py-6 px-14 border-gray-300  w-96 justify-center '>
                        <span className='ml-8'>
                            Don't have an account?
                            <span className='font-bold text-blue-700 hover:text-blue-500 cursor-pointer'
                            >sign up
                            </span>
                        </span>
                    </div>

                    <div className='my-3 font-semibold'>
                        Get the App
                    </div>

                    <div className='flex w-40 justify-center'>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcx8sRXXQmSlzJSrNHCefb7yHRWl2BPBTuTA&usqp=CAU"
                            alt=""
                            className=' h-12  mr-6 my-3 transition hover:-translate-y-1 hover:scale-110 '

                        />

                        <img className='w-96 h-12 mt-3  transition hover:-translate-y-1 hover:scale-110 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png"

                            alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
