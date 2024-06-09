import React from 'react';

function HomePage() {
  return (
    <section className="h-full w-full flex Home hide-scrollbar">
      <div className="Dashboard-resDiv"></div>
      <main className="glass-effect-3 bg-opacity-50 h-full flex-grow">
        <div className="Home-box w-full flex flex-col md:flex-row justify-between p-3 gap-3">
          <section className="LeftHand pt-10 pl-1 pr-1 pb-3 bg-white w-full md:w-1/2 lg:w-[57rem] h-[auto] flex gap-5 flex-col mb-1 md:mb-0 shadow-custom rounded-[20px] ">
            <div className="Home-Header-main h-[15rem] rounded-2xl pl-2 pt-6 pr-2 flex justify-between relative overflow-hidden">
              <div className='flex flex-col justify-between h-[8.5rem] items-start'>
                <header className="text-3xl font-bold w-[15.8rem] text-white">Exciting projects every week</header>
                <button className="bg-white px-[47px] py-2 rounded-full border-2 border-gray-400 opacity-90 glass-effect">
                  CV
                </button>
              </div>
              <div className="Avatar-container absolute bottom-0 right-0 h-[14.9rem] w-[15rem] bg-red-500 rounded-tl-[100%] flex items-end justify-center pl-4">
                <img src='https://movicks.github.io/movicx-portfolio-react/assets/DevMovicxBanner-25f4983f.png' alt='Photo' />
              </div>
        
              {/* Bubbles */}
              <div className="absolute inset-0 flex justify-end items-center pointer-events-none gap-5 pr-6">
                <div className="absolute inset-0 flex justify-start items-start pointer-events-none pr-2 w-[5rem] h-[10rem]">
                  <div className="bubble bubble-down w-[5rem] h-[5rem]"></div>  
                </div>
                <div className="absolute inset-0 flex justify-start items-end pointer-events-none pb-2 w-[5rem] h-[13.3rem] pl-3">
                  <div className="bubble bubble-up w-[2rem] h-[2rem]"></div>  
                </div>
                <div className="absolute inset-0 flex justify-start items-end pointer-events-none pb-2 w-[5rem] h-[13.3rem] pl-3">
                  <div className="bubble bubble-left w-[4rem] h-[4rem] mt-9"></div>  
                </div>
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none pb-2 w-[20rem] h-[13.3rem] pl-3">
                  <div className="bubble bubble-left w-[3rem] h-[3rem]"></div>  
                </div>
                <div className="absolute inset-0 flex justify-center items-end pointer-events-none gap-5 pr-6 pb-6">
                  <div className="bubble bubble-up w-8 h-8 m-4"></div>
                  <div className="bubble bubble-down w-4 h-4"></div>
                </div>
                <div className="bubble bubble-left w-5 h-5 m-3 Hide-bubble"></div>
                <div className="bubble bubble-right w-8 h-8 mt-5 Hide-bubble"></div>
              </div>
            </div>
            <section className='bg-red-500 w-full flex flex-col md:flex-row justify-between gap-3'>
              <div className='bg-yellow-500 w-full md:w-1/2 lg:w-[20rem] h-[25rem] flex flex-col mb-1 md:mb-0 rounded-2xl'>
                Pro Photo
              </div>
              <div className='bg-blue-500 w-full md:w-1/2 lg:w-[50rem] h-[auto] flex flex-col mb-1 md:mb-0'>
                stacks
              </div>
            </section>
          </section>
          <section className="RightHand bg-white w-full md:w-1/2 lg:w-[20rem] h-[30rem] flex justify-center shadow-custom">
            <div>Home 2</div>
          </section>
        </div>
        <footer className='bg-red-500 h-[10rem]'>Hello footer</footer>
      </main>
    </section>
  );
}

export default HomePage;
