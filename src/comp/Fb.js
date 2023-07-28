import React from 'react'

const Fb = () => {
    return (


        <>
            <div className=' bg-gray-200 py-64'>

                <div className=" container flex mb-28 justify-center items-center">
                    <div className="left ml-60 ">
                        <img src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-13.png"
                            alt=""
                            className='w-60'
                        />
                        <p className='text-3xl w-5/6 mx-6'>Connect with friends and the world around you on Facebook </p>
                    </div>
                    <div className="right flex flex-col bg-white px-10 pb-3 pt-4 rounded-lg shadow-sm mr-60 w-2/6 ">
                        <input className='border-solid border-2 border-gray-200 p-2 my-2  outline-blue-400 rounded-lg' type="text" placeholder='name' />
                        <input className='border-solid border-2 border-gray-200 p-2 my-2 outline-blue-400 rounded-lg' type="text " placeholder='email' />
                        <button className="btn btn-primary my-2 font-bold text-md">Log In</button>
                        <span className='my-2 text-center text-blue-600 text-sm hover:underline cursor-pointer'>Forgotten password?</span>
                        <hr className='my-2 ' />
                        <button className="btn btn-success mt-3 hover:bg-green-700 font-bold w-fit mx-auto px-6">Create Account</button>

                        {/* <div className='text-center '>
                            <span className='text-sm '> <span>create a page</span> a brand or business</span>
                        </div> */}
                    </div>
                    <span className='text-sm absolute mt-96 ml-[650px]'><span className='font-bold hover:underline cursor-pointer'>Create a page</span> a brand or business</span>


                </div>
            </div>


        </>
    )
}

export default Fb