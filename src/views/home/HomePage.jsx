import React from 'react';
import LogoAI from '../../../public/Images/LogoAI.jpg'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <section className="h-full w-full flex Home hide-scrollbar">
      <div className="Dashboard-resDiv"></div>
      <main className="glass-effect-3 bg-opacity-50 h-full flex-grow">
        <div className="Home-box w-full flex flex-col md:flex-row justify-between p-3 gap-3">
          <section className="LeftHand pt-10 pl-1 pr-1 pb-3 bg-white w-full md:w-1/2 lg:w-[57rem] h-[auto] flex gap-5 flex-col mb-1 md:mb-0 shadow-custom rounded-[20px] ">
            <div className="Home-Header-main h-[15rem] rounded-2xl pl-2 pt-6 pr-2 flex justify-between relative overflow-hidden">
              <div className='flex flex-col justify-between h-[8.3rem] items-start'>
                <header className="text-3xl font-bold w-[15.8rem] text-white">Exciting projects every week</header>
                <button className="bg-white px-[30px] py-2 rounded-full border-2 border-gray-400 opacity-90 glass-effect">
                  Projects
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
                </div>
                <div className="bubble bubble-up w-4 h-4 m-3 Hide-bubble"></div>
                <div className="bubble bubble-right w-5 h-5 mt-5 Hide-bubble"></div>
              </div>
            </div>
            <section className='w-full flex flex-col-reverse md:flex-row justify-between gap-3'>
              <div className='relative bg-gray-300 w-full md:w-1/2 lg:w-[20rem] h-[25rem] shadow-custom flex justify-end items-end flex-col md:mb-0 rounded-2xl overflow-hidden'>
                <div className='w-full h-full bg-red-200 flex items-center justify-center'>
                  <img className='bg-cover h-full w-full' src={LogoAI} alt='photo'/>
                </div>
                <div className='absolute bottom-0 left-0 right-0 px-3 py-3 gap-2 flex flex-col justify-start items-start opacity-40 w-full bg-black h-[35%]'>
                  <div className='text-white'>React Dev</div>
                  <h1 className='text-white text-[18px] font-bold'>Onaiterimoh Victor Idepe</h1>
                  <button className='text-black py-2 px-4 rounded-3xl bg-white opacity-100 text-md'>Download CV</button>
                </div>
              </div>
              <div className='shadow-custom rounded-2xl w-full md:w-1/2 lg:w-[50rem] h-auto flex flex-col mb-1 md:mb-0 p-3 gap-2'>
                <h1 className='text-xl font-bold text-[#6371f6] underline'>Who is Movicx ?</h1>
                <p>
                  Onaiterimoh Victor Idepe, also known as Movicx, is a passionate
                  Front-end Developer specializing in bringing high quality UI/UX designs
                  to life. He excels at crafting interactive and user-centric web pages, always striving
                  to meet and exceed user expectations.
                  <br />
                  <span>Happy coding!</span>
                </p>
                <div className='w-full h-[2px] bg-gray-300'></div>
                <section className='flex flex-col gap-3 shadow-md p-2 rounded-2xl'>
                  <h1 className='text-xl font-bold text-[#6371f6]'>My Stacks ?</h1>
                  <div className="w-full h-[10rem] gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex flex-wrap overflow-y-auto p-3">
                    <span className="Html py-1 px-6 h-[2rem] m-0 rounded-3xl">HTML</span>
                    <span className="CSS py-1 px-6 h-[2rem] m-0 rounded-3xl">CSS</span>
                    <span className="Javascript py-1 px-6 h-[2rem] m-0 rounded-3xl">JavaScript</span>
                    <span className="React py-1 px-6 h-[2rem] m-0 rounded-3xl">React</span>
                    <span className="Tailwindcss py-1 px-6 h-[2rem] m-0 rounded-3xl">Tailwindcss</span>
                    <span className="Bootstrap py-1 px-6 h-[2rem] m-0 rounded-3xl">Bootstrap</span>
                    <span className="Sanity py-1 px-6 h-[2rem] m-0 rounded-3xl">Sanity.io</span>
                    <span className="Python py-1 px-6 h-[2rem] m-0 rounded-3xl">Python</span>
                    <span className="C-program py-1 px-6 h-[2rem] m-0 rounded-3xl">C programming</span>
                    <span className="Scratch py-1 px-6 h-[2rem] m-0 rounded-3xl">Scratch</span>
                  </div>
                </section>
              </div>
            </section>
          </section>
          <section className="RightHand bg-transparent w-full md:w-1/2 lg:w-[20rem] h-[auto] gap-3 flex flex-col justify-between">
            <div className='Recent-Project-box bg-white h-[35rem] shadow-custom rounded-2xl px-4 pt-9 pb-3 flex flex-col gap-1'>
              <h1 className='text-md text-[#6371f6] font-bold'>Most Recent Project</h1>
              <div className='w-full h-[2px] bg-gray-300'></div>
              <div className='bg-red-500 h-[auto] Project-Card'>
                <div className='Project-Image-container'>Project image container</div>
                <div>Hello Paragraph</div>
                <div>Project Stacks</div>
              </div>
              <div className='w-full h-[2px] bg-gray-300'></div>
              <Link to='/project'>All Projects Arrow</Link>
            </div>
            <div className='Availability-box h-[8rem] bg-blue-500 shadow-custom rounded-2xl'>Hello</div>
          </section>
        </div>
        <footer className='bg-red-500 h-[9rem]'>Hello footer</footer>
      </main>
    </section>
  );
}

export default HomePage;
