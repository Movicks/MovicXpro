import React, { useState } from 'react';
import LogoAI from '../../assets/Images/LogoAI.jpg'
import { Link } from 'react-router-dom';
import { CiLocationArrow1 } from 'react-icons/ci';
import Footer from '../../components/footer/Footer';
import ProjectData from '../../components/projectcard/ProjectData';
import Resume from '../../assets/Resume/ResumePro.pdf'

function HomePage() {
  const lastItem = ProjectData.slice(-1);
  const [isChecked, setIsChecked] = useState(true);

    const handleChange = () => {
        setIsChecked(!isChecked);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${Resume}`;
    link.download = 'ResumePro.pdf';
    link.click();
  };


  const Stacks1 = [
    {
      id: 0,
      stack1: "HTML"
    },
    {
      id: 1,
      stack1: "CSS"
    },
    {
      id: 2,
      stack1: "JavaScript"
    },
    {
      id: 3,
      stack1: "TypeScript"
    },
    {
      id: 4,
      stack1: "Python"
    },
    {
      id: 5,
      stack1: "React"
    },
    {
      id: 6,
      stack1: "Tailwindcss"
    },
    {
      id: 7,
      stack1: "Bootstrap"
    },
    {
      id: 8,
      stack1: "NodeJS"
    },
    {
      id: 9,
      stack1: "MongoDB"
    },
    {
      id: 10,
      stack1: "Git"
    },
    {
      id: 11,
      stack1: "Sanity"
    },
  ]


  return (
    <section className="h-full w-full flex Home hide-scrollbar bg-yellow-400">
      <div className="Dashboard-resDiv min-w-[15rem]"></div>
      <main className="glass-effect-3 bg-blue-500 w-full h-full flex-grow">
        <div className="Home-box w-full flex flex-col lg:flex-row justify-between p-3 gap-3">
          <section className="LeftHand pt-10 pl-1 pr-1 pb-3 bg-transparent w-full lg:w-[56rem] h-[auto] flex gap-5 flex-col mb-1 md:mb-0 shadow-custom rounded-[20px] ">
            <div className="Home-Header-main h-[15rem] rounded-2xl pl-2 pt-6 pr-2 flex justify-between w-full relative overflow-hidden">
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
            <section className='Stacks-Container w-full flex flex-col-reverse md:flex-row justify-between gap-3'>
              <div className='Stacks-boxs relative bg-gray-300 w-full md:w-[25rem] h-full shadow-custom flex justify-end items-end flex-col md:mb-0 rounded-2xl overflow-hidden'>
                <div className='w-full h-full bg-gray-300 flex items-center justify-center'>
                  <img className='bg-cover h-full w-full' src={LogoAI} alt='photo'/>
                </div>
                <div className='absolute bottom-0 left-0 right-0 px-3 py-3 gap-2 flex flex-col justify-start items-start opacity-40 w-full bg-black h-[35%]'>
                  <div className='text-white'>React Dev</div>
                  <h1 className='text-white text-[18px] font-bold'>Onaiterimoh Victor Idepe</h1>
                  <button className='text-black py-2 px-4 rounded-3xl bg-white opacity-100 text-md' onClick={handleDownload}>Download CV</button>
                </div>
              </div>
              <div className='Stacks-boxs shadow-custom rounded-2xl w-full md:w-1/2 lg:w-[50rem] h-auto flex flex-col md:mb-0 p-3 gap-1'>
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
                  {/*Stacks*/}
                  <div className="w-full h-[10rem] gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex flex-wrap overflow-y-auto p-2">
                    {Stacks1.map((item, id) => (
                      <span key={id} className="HTML py-1 px-6 h-[2rem] m-0 rounded-3xl text-black">{item.stack1}</span>
                    ))}
                  </div>
                </section>
              </div>
            </section>
          </section>
          <section className="RightHand bg-transparent w-full md:w-1/2 lg:w-[22rem] h-[auto] gap-3 flex flex-col justify-between px-1">
            {lastItem.map((project) => (
              <div key={project.id} className='Recent-Project-box bg-white h-[auto] shadow-custom rounded-3xl px-4 pt-9 pb-3 flex flex-col gap-1'>
                <h1 className='text-md text-[#6371f6] font-bold'>Most Recent Project</h1>
                <div className='w-full h-[2px] bg-gray-300'></div>
                <div className='bg-white h-[auto] Project-Card p-2 rounded-xl flex flex-col gap-2'>
                  <div className='relative flex items-start justify-between mb-2 h-[10rem] pointer-events-none Project-Image-container rounded-2xl overflow-hidden'>
                    <img src={project.Image} alt='Project'
                      className='Project-Banner w-full h-full bg-cover rounded-2xl'
                    />
                  </div>
                  <h1 className='font-bold text-md uppercase text-[#6371f6]'>{project.name}</h1>
                  <div className='w-full max-h-[10rem] lg:h-[10rem] overflow-y-auto'>
                    <p className='flex flex-wrap text-sm text-gray-400 text-start'>
                      {project.description}
                    </p>
                  </div>
                  <section className='flex flex-col gap-1 rounded-2xl'>
                    <h1 className='text-md font-bold text-[#6371f6]'>Stacks</h1>
                    <div className="w-full h-[5rem] gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex flex-wrap overflow-y-auto p-2">
                      {project.stacks.map((stack, stackIndex) => (
                          <span key={stackIndex} className={`HTML py-1 px-4 h-[2rem] m-0 rounded-3xl`}>{stack}</span>
                      ))}
                    </div>
                  </section>
                </div>
                <div className='w-full h-[2px] bg-white'></div>
                <Link to='/projects' className='px-4 py-2 bg-[#6371f6] w-[8rem] text-[14px] text-white rounded-3xl flex justify-between items-center'>
                  <span>All Projects</span>
                  <CiLocationArrow1 className='text-xl' />
                </Link>
              </div>
            ))}
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
