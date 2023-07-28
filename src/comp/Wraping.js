import React from 'react'

function Wraping() {


    return (

        <>
            <div class="flex flex-col-reverse">
                <div className='bg-purple-900'>01ewifwjgu</div>
                <div className='bg-red-500'>02gergege</div>
                <div className='bg-green-600'>03ttg34t3</div>
            </div>

            <br />
            <div class="flex text-center">
                <div class="grow grid h-14  bg-purple-500 content-center">
                    01
                </div>
                <div class="grow-0 w-64 bg-red-600">
                    02
                </div>
                <div class="grow h-14 w-32 bg-green-600">
                    03
                </div>
            </div>
            <div>

                <div className='grid h-56 bg-purple-600 w-20'>jiuhuybuy</div>
            </div>

            <br />

            <p class="font-medium ">The quick brown fox ...</p>



            <div className='flex '>yuh</div>
            <div>
                <div className='flex'>
                    <div className='flex w-14 h-16'>
                        level up </div>
                    <div className='shrink h-64 w-16'>
                        level midd
                    </div>
                    <div className='flex-none h-16 w-14'>
                        level dowm
                    </div>
                </div>
            </div>


            <div className="flex text-center  content-center">
                <div className="flex-none grid content-center w-14  h-14 bg-purple-600 justify-items-center">
                    hello
                </div>
                <div className="shrink grid content-center w-64 h-14 bg-green-500">
                    hyy
                </div>
                <div className="flex-none grid content-center w-14 h-14 bg-gray-500">
                    hello
                </div>
            </div>
            <br />

            {/* place item */}
            <div class="grid grid-cols-3 place-items-end gap-10  h-56 ...">
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
            </div >


            {/*font smothing */}

            <p class="antialiased">The quick brown fox ...</p>


            <button className='btn'>submit</button>

            <p class="-tracking-2 ">box value</p>


        </>
    )
}

export default Wraping