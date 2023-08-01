import React from 'react'


function MicroSoft() {
  return (
    <>
      <div className='tw-mx-auto '>

        {/* navbar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <img className='tw-w-28' src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#microsoft">Microsoft 365</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Teams</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">windows</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Surface</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Xbox</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Support</a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    {/* <li><hr className="dropdown-divider"></li> */}
                {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                {/* </ul> */}
                {/* </li>  */}

              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        {/* first component img and content  */}
        <div className='slider tw-flex tw-flex-col md:tw-bg-[#f2f2f2] md:tw-flex-row tw-justify-between tw-items-center tw-mx-2 '>

          <div className="right">
            <img className='md:tw-w-[1800px] md:tw-h-[400px] xsm:tw-w-[1000px] lg:tw-w-[1000px] ' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP5-1920x600" alt="" />
          </div>
          <div id='microsoft' className='left  tw-text-black tw-flex tw-flex-col  tw-items-center md:tw-items-baseline tw-my-7 tw-p-10 tw-shadow-lg md:tw-shadow-none xsm:tw-w-[300px] xxsm:tw-w-[200px] tw-mx-5'>
            <h1 className='tw-text-3xl tw-font-bold '>Surface Pro 9</h1>
            <p className=' my-2'>Tablet versatility and laptop power all in one ultra-portable device</p>
            <div className='my-3'>
              <button className="btn btn-primary ">Lern more</button>
            </div>
          </div>
        </div>
        {/* second component img icon "4" */}
        <div className="promo tw-flex tw-flex-col md:tw-flex-row tw-my-16 tw-justify-center md:tw-my-20 tw-space-y-4">

          <div className="item02 tw-flex tw-flex-col tw-items-center mx-4 tw-space-x-4 md:tw-my-4 ">
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Quick-Link-Icon-80x80-Microsoft-365?wid=40&hei=40" alt="" />
            <span className='tw-font-semibold tw-text-blue-500 hover:tw-underline tw-cursor-pointer'>Get Windows 11</span>
          </div>

          <div className="item02 tw-flex tw-flex-col tw-items-center mx-4 tw-space-x-4">
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface-go2-link-list-120x120?wid=40&hei=40" alt="" />
            <span className='tw-font-semibold tw-text-blue-500 hover:tw-underline tw-cursor-pointer '>Explore Surface devices</span>
          </div>
          <div className="item02 tw-flex  tw-flex-col tw-items-center mx-4 tw-space-x-4">
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/xbox-blk-logo-link-list-120x120?wid=40&hei=40" alt="" />
            <span className='tw-font-semibold tw-text-blue-500 hover:tw-underline tw-cursor-pointer'>Buy Xbox games and consoles</span>
          </div>
          <div className="item02 tw-flex  tw-flex-col tw-items-center mx-4 tw-space-x-4">
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Quick-Link-Icon-80x80-Microsoft-365?wid=40&hei=40" alt="" />
            <span className='tw-font-semibold tw-text-blue-500 hover:tw-underline tw-cursor-pointer'>Get Windows 11</span>
          </div>

        </div>

        {/* third component 4 boxes */}
        <div className='lg:tw-flex sm:tw-flex sm:tw-flex-col sm:tw-justify-center sm:tw-items-center lg:tw-flex-row ' >

          <div className="list-item md:tw-flex md:tw-justify-evenly md:tw-mx-12 lg:tw-space-x-3  ">
            <div className="list  tw-w-96 tw-space-y-3">
              <img className='lg:tw-mr-10' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-M1-Platinum-01-1?wid=380&hei=213&fit=crop" alt="" />
              <h2 className='tw-text-2xl tw-font-semibold'>Surface Laptop 5</h2>
              <p className=' '>Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11</p>
              <span className='tw-font-semibold tw-text-blue-700 hover:tw-underline tw-cursor-pointer'>learn more</span>
            </div>

            <div className="list02 tw-space-y-3">
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen?wid=380&hei=213&fit=crop" alt="" />
              <h2 className='tw-text-2xl tw-font-semibold' >Xbox Series S</h2>
              <p>Next-gen performance in the smallest Xbox ever.</p>
              <span className='tw-font-semibold tw-text-blue-700 hover:tw-underline tw-cursor-pointer'>Shop Xbox Series S </span>
            </div>

          </div>

          {/* 2 box */}
          <div className="list-item md:tw-flex md:tw-justify-evenly md:tw-mx-12  ">
            <div className="list mx-2 tw-w-96 tw-space-y-3">
              <img className='' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Bing-AI-Open-Preview?wid=380&hei=213&fit=crop" alt="" />
              <h2 className='tw-text-2xl tw-font-semibold'>  Announcing the next wave of AI innovation</h2>
              <p className=' '>Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11</p>
              <span className='tw-font-semibold tw-text-blue-700 hover:tw-underline tw-cursor-pointer'>Learn more about it</span>
            </div>

            <div className="list02 tw-space-y-3">
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XGP-Game-Pass-Ultimate-Characters-06102010-1?wid=380&hei=213&fit=crop" alt="" />
              <h2 className='tw-text-2xl tw-font-semibold'>Join for $1</h2>
              <p>Next-gen performance in the smallest Xbox ever.</p>
              <span className='tw-font-semibold tw-text-blue-700 hover:tw-underline tw-cursor-pointer'>join now </span>
            </div>

          </div>



          {/* <div className="list-item02 md:tw-flex md:tw-justify-evenly md:tw-mx-12">
            <div className="list tw-w-96 ">
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Bing-AI-Open-Preview?wid=380&hei=213&fit=crop" alt="" />
              <h2> Announcing the next wave of AI innovation</h2>
              <p>The new Microsoft Bing and Edge will soon feature more visual search responses, chat history, and persistent chat within Edge. We’re also adding actions to help people complete tasks.</p>
            </div>

            <div className="list  tw-w-96">
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XGP-Game-Pass-Ultimate-Characters-06102010-1?wid=380&hei=213&fit=crop" alt="" />
              <h2>  Xbox Game Pass Ultimate</h2>
              <p>Xbox Live Gold and hundreds of high-quality console and PC games. Play together with friends and discover your next favourite game..</p>
            </div>

          </div> */}

        </div>




        {/* last component img with content */}
        <div className='slider tw-flex tw-flex-col-reverse md:tw-bg-[#3b3b3b] md:tw-flex-row tw-justify-between tw-items-center tw-mx-2 xsm:tw-my-12'>

          <div id='microsoft' className='left md:tw-text-white tw-text-black tw-flex tw-flex-col  tw-items-center md:tw-items-baseline tw-my-7 tw-p-10 tw-shadow-lg md:tw-shadow-none xsm:tw-w-[300px] xxsm:tw-w-[200px] tw-mx-5'>
            <h1 className='tw-text-3xl tw-font-bold '>Designed for life today – and tomorrow</h1>
            <p className=' my-2  lg:tw-items-baseline'>The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love</p>
            <div className='my-3'>
              <button className="btn btn-primary ">Lern more</button>
            </div>
          </div>
          <div className="right">
            <img className='md:tw-w-[1000px] md:tw-h-[600px] xsm:tw-w-[1000px] lg:tw-w-[1600px] '
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Hero-Windows11-GlobalLaunch:VP5-1596x600" alt="" />
          </div>
        </div>


      </div>
    </>
  )
}

export default MicroSoft