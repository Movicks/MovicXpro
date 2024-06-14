import React, { useState } from 'react';
import LogoAI from '../../assets/Images/LogoAI.jpg'
import { Link } from 'react-router-dom';
import { CiHeart, CiLocationArrow1 } from 'react-icons/ci';
import Footer from '../../components/footer/Footer';

function HomePage() {
  const [isChecked, setIsChecked] = useState(true);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };
  return (
    <section className="h-full w-full flex Home hide-scrollbar">
      <div className="Dashboard-resDiv min-w-[15rem]"></div>
      <main className="glass-effect-3 bg-opacity-50 h-full flex-grow">
        <div className="Home-box w-full flex flex-col md:flex-row justify-between p-3 gap-3">
          <section className="LeftHand pt-10 pl-1 pr-1 pb-3 bg-white w-full md:w-1/2 lg:w-[57rem] h-[auto] flex gap-5 flex-col mb-1 md:mb-0 shadow-custom rounded-[20px] ">
            <div className="Home-Header-main h-[15rem] rounded-2xl pl-2 pt-6 pr-2 flex justify-between relative overflow-hidden">
              <div className='flex flex-col justify-between h-[8.3rem] items-start'>
                <header className="text-3xl font-bold w-[15.8rem] text-white">Exciting projects every week</header>
                <Link to='/projects' className="bg-white px-[30px] py-2 rounded-full border-2 border-gray-400 opacity-90 glass-effect">
                  Projects
                </Link>
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
              <div className='shadow-custom rounded-2xl w-full md:w-1/2 lg:w-[50rem] h-auto flex flex-col md:mb-0 p-3 gap-1'>
                <h1 className='text-xl font-bold text-[#6371f6] underline mt-2'>Who is Movicx ?</h1>
                <p className='text-start text-gray-400'>
                  Onaiterimoh Victor Idepe, also known as Movicx, is a passionate
                  Front-end Developer specializing in bringing high quality UI/UX designs
                  to life. He excels at crafting interactive and user-centric web pages, always striving
                  to meet and exceed user expectations.
                  <br />
                  <span>Happy coding!</span>
                </p>
                <div className='w-full h-[2px] bg-gray-300'></div>
                <section className='flex flex-col gap-3 py-2 rounded-2xl'>
                  <h1 className='text-xl font-bold text-[#6371f6]'>My Stacks ?</h1>
                  <div className="w-full h-[10rem] gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex flex-wrap overflow-y-auto p-2">
                    <span className="Html py-1 px-6 h-[2rem] m-0 rounded-3xl">HTML</span>
                    <span className="CSS py-1 px-6 h-[2rem] m-0 rounded-3xl">CSS</span>
                    <span className="Javascript py-1 px-6 h-[2rem] m-0 rounded-3xl">JavaScript</span>
                    <span className="React py-1 px-6 h-[2rem] m-0 rounded-3xl">React</span>
                    <span className="Tailwindcss py-1 px-6 h-[2rem] m-0 rounded-3xl">Tailwindcss</span>
                    <span className="Bootstrap py-1 px-6 h-[2rem] m-0 rounded-3xl">Bootstrap</span>
                    <span className="Sanity py-1 px-6 h-[2rem] m-0 rounded-3xl">Sanity.io</span>
                    <span className="Sanity py-1 px-6 h-[2rem] m-0 rounded-3xl">Express</span>
                    <span className="Sanity py-1 px-6 h-[2rem] m-0 rounded-3xl">MongoDB</span>
                    <span className="Python py-1 px-6 h-[2rem] m-0 rounded-3xl">Python</span>
                    <span className="Sanity py-1 px-6 h-[2rem] m-0 rounded-3xl">Git</span>
                    <span className="C-program py-1 px-6 h-[2rem] m-0 rounded-3xl">C programming</span>
                    <span className="Scratch py-1 px-6 h-[2rem] m-0 rounded-3xl">Scratch</span>
                  </div>
                </section>
              </div>
            </section>
          </section>
          <section className="RightHand bg-transparent w-full md:w-1/2 lg:w-[20rem] h-[auto] gap-3 flex flex-col justify-between px-1">
            <div className='Recent-Project-box bg-white h-[auto] shadow-custom rounded-3xl px-4 pt-9 pb-3 flex flex-col gap-1'>
              <h1 className='text-md text-[#6371f6] font-bold'>Most Recent Project</h1>
              <div className='w-full h-[2px] bg-gray-300'></div>
              <div className='bg-white h-[auto] Project-Card p-2 rounded-xl flex flex-col gap-2'>
                <div className='relative flex items-start justify-between mb-2 h-[10rem] pointer-events-none Project-Image-container rounded-2xl overflow-hidden'>
                  <img src='https://media.istockphoto.com/id/912617272/photo/concept-of-digital-diagram-graph-interfaces-virtual-screen-connections-icon-on-blurred.jpg?s=2048x2048&w=is&k=20&c=g2wJd26WiNlIld_upj90IrjWZ-gEPmDsIwVW1_pRTM8=' alt='Project'
                    className='Project-Banner w-full h-full bg-cover rounded-2xl'
                  />
                  <div className='absolute bg-transparent w-full h-full flex flex-col justify-between p-2'>
                    <div className='bg-transparent w-full flex justify-end gap-2 items-center'>
                      <div className='px-3 rounded-2xl bg-white opacity-80'>
                        <span className='Like-Counts text-black'>1k</span>
                      </div>
                      <button className='Like-Project-btn p-1 bg-white rounded-full opacity-90'>
                        <CiHeart className='Like-Project-btn-Icon text-2xl' />
                      </button>
                    </div>
                    <div className=''>
                      <Link to='#' className='Demo bg-white opacity-90 px-4 py-2 rounded-3xl'>Demo</Link>
                    </div>
                  </div>
                </div>
                <h1 className='font-bold text-md uppercase text-[#6371f6]'>Project 9</h1>
                <div className='w-full h-[auto]'>
                  <p className='flex flex-wrap text-sm text-gray-400 text-start'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </p>
                </div>
                <section className='flex flex-col gap-1 rounded-2xl'>
                  <h1 className='text-md font-bold text-[#6371f6]'>Stacks</h1>
                  <div className="w-full h-[5rem] gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex flex-wrap overflow-y-auto p-2">
                    <span className="HTML py-1 px-4 h-[2rem] m-0 rounded-3xl">HTML</span>
                    <span className="CSS py-1 px-4 h-[2rem] m-0 rounded-3xl">CSS</span>
                    <span className="React py-1 px-4 h-[2rem] m-0 rounded-3xl">React</span>
                    <span className="Tailwindcss py-1 px-4 h-[2rem] m-0 rounded-3xl">Tailwindcss</span>
                  </div>
                </section>
              </div>
              <div className='w-full h-[2px] bg-white'></div>
              <Link to='/projects' className='px-4 py-2 bg-[#6371f6] w-[8rem] text-[14px] text-white rounded-3xl flex justify-between items-center'>
                <span>All Projects</span>
                <CiLocationArrow1 className='text-xl' />
              </Link>
            </div>
            <div className='Availability-box h-[4.3rem] bg-white shadow-custom rounded-2xl overflow-hidden flex'>
              <div className='w-[5rem] h-full bg-gray-300 rounded-2xl bg-cover overflow-hidden border-2 border-gray-400'>
                <img src='https://movicks.github.io/movicx-portfolio-react/assets/DevMovicxBanner-25f4983f.png' alt='Photo' className='w-full h-full'/>
              </div>
              <div className='availability-container'>
                  <div className='flex justify-between items-center'>
                      <h1 className='text-primary text-[#6371f6] text-lg'>Availability</h1>
                      <label className="switch">
                          <input
                              type='checkbox'
                              checked={isChecked}
                              onChange={handleChange}
                          />
                          <span className="slider round"></span>
                      </label>
                  </div>
                  <div className='range-container'>
                      <div className='range' style={{ width: isChecked ? '100%' : '0%' }}></div>
                  </div>
              </div>
            </div>
          </section>
        </div>
        <Footer/>
      </main>
    </section>
  );
}

export default HomePage;
