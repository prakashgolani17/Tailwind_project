import React from 'react'

export const Tail = () => {

    return (
        <>
            <nav className='bg-slate-200 text-purple-900 flex justify-between sticky top-0'>
                <span className='h-12  px-6 pt-4 font-bold text-xl'>SmartPhons</span>
                {/* <img src="https://randomuser.me/api/portraits/men/75.jpg" className='h-12 px-3 pt-4 rounded-2xl ' alt="" /> */}
                <ul className=' px-28 py-4 flex space-x-11 justify-end'>
                    <li className=' hover:text-slate-600 cursor-pointer'>home</li>
                    <li className='  hover:text-slate-600 cursor-pointer'>about</li>
                    <li className='  hover:text-slate-600 cursor-pointer'>contact</li>
                </ul>
            </nav>
            <main className=' bg-slate-200 flex justify-around'>
                <div className="main  pb-6 pt-48 pl-20">

                    <div className="text-3xl flex px-4">The best Phones in Our Town</div>
                    <p className="py-3 w-9/12  px-4 font-sans text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Nulla tempore perferendis cumque consequatur, amet voluptatibus commodi eveniet sapiente,
                        velit id neque cum officia iusto esse? </p>
                    <div className="my-4">
                        <button className="py-2 px-3 bg-purple-700 text-white rounded-2xl  hover:text-purple-900 hover:font-bold mx-4 font-mono">Contact Now</button>
                        <button className="py-2 px-3 mx-0 bg-purple-700 text-white rounded-2xl  hover:text-purple-900 hover:font-bold mx-4 font-mono">Buy Now</button>
                    </div>
                </div>
                <div className=' flex items-center mr-70 w-2/3 '>
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/35685/business-man-mobile-phone-clipart-sm.png"
                        alt=""
                        className='h-80 pt-20'
                    />
                </div>
            </main>
            <div class="relative flex  items-center">
                <div class="flex-grow border-t border-gray-400"></div>
                {/* <span class="flex-shrink mx-4 text-gray-400"></span> */}
                <div class="flex-grow border-t border-gray-400"></div>
            </div>

            <main className=' flex justify-center'>
                <div className='main  pb-6 pt-32 pl-20'>

                    <div className='flex items-center pt-1 float-left '>
                        <img src="https://img.freepik.com/premium-vector/phone-cartoon-character-showing-tongue_192760-190.jpg?w=2000"
                            alt="" className='float-left h-80' />
                    </div>
                    <div className='pt-20'>
                        <div className='text-3xl flex px-80 font-bold '>Our services</div>
                        <p className="flex items-center py-3 w-8/12 px-8  pt-8">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Voluptatem sit officiis rerum veniam. Temporibus enim quasi voluptatibus alias
                            architecto unde excepturi quidem deserunt repudiandae. Hic, possimus minima iusto reprehenderit officia
                            qui harum, quibusdam autem aliquam dignissimos temporibus ipsam neque numquam repudiandae ducimus magnam suscipit eius corporis? Ut accusamus at debitis!</p>
                    </div>

                </div>
            </main>

            {/* <div class="flex flex-wrap-reverse">
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
            </div> */}




        </>
    )
}
