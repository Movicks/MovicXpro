import { useState } from 'react';
import LogoAI from '../../assets/Images/MOVICX.png'
import { Link } from 'react-router-dom';
import { CiLocationArrow1 } from 'react-icons/ci';
import Footer from '../../components/footer/Footer';
import ProjectData from '../../data/ProjectData';
import Resume from '../../assets/Resume/ResumeMovicx.pdf'
import { Stacks1 } from '../../components/Stacks1';

function HomePage() {
  const lastItem = ProjectData.slice(-1);
  const [isChecked, setIsChecked] = useState(true);

    const handleChange = () => {
        setIsChecked(!isChecked);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${Resume}`;
    link.download = 'ResumeMovicx.pdf';
    link.click();
  };



  return (
    <section className="h-full w-full flex Home hide-scrollbar bg-transparent lg:px-5">
      <main className="glass-effect-3 bg-transparent w-full h-full ">
        <div className="Home-box bg-transparent flex flex-col lg:items-start xl:flex-row justify-between py-3 gap-3 w-full mb-6 lg:mb-0">
          <section className="LeftHan pt-10 px-1 lg:px-3 pb-3 lg:pb-0 Container-Bg border border-white/15 backdrop-blur-md w-full h-[auto] flex gap-5 flex-col mb-1 md:mb-0 shadow-custom rounded-[20px] ">
            <div className="Home-Header-main h-[15rem] rounded-2xl pl-2 pt-6 pr-2 flex justify-between w-full relative overflow-hidden">
              <div className='flex flex-col justify-between h-[8.3rem] items-start'>
                <header className="text-3xl font-bold w-[15.8rem] text-white">Exciting Journey Of Victor</header>
                <Link to='/projects' className="bg-white px-[30px] py-2 rounded-full border-2 border-gray-400 opacity-90 glass-effect">
                  Projects
                </Link>
              </div>
              <div className="Avatar-container absolute bottom-0 right-0 h-[14.9rem] w-[15rem] rounded-tl-[100%] flex items-end justify-center pl-4">
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
            <section className='Stacks-Container w-full flex flex-col-reverse xl:flex-row justify-between gap-3'>
              <div className='Stacks-boxs shadow-custom max-w-full rounded-2xl w-full h-auto flex flex-col md:mb-0 p-3 lg:px-0 lg:py-3'>
                <h1 className='text-xl font-bold gradient-text underline mt-2'>Who is Victor?</h1>
                <p className='text-start text-gray-400'>
                  I am Onaiterimoh Victor Idepe, a frontend specialist focused on turning thoughtful UI and UX designs into polished web experiences.
                  He has worked with teams and delivered strong results across real world projects, contributing to products used in production environments.
                  His core strength is building interactive, user centered interfaces that balance performance, clarity, and visual detail.
                  While frontend development is his primary focus, he also works as a full stack developer when project needs require it. &nbsp;
                </p>
                <div className='w-full h-[1px] bg-gray-500/30 rounded-full mt-4 lg:my-3'></div>
                <section className='flex flex-col gap-3 pt-1 pb-2 rounded-2xl'>
                  <h1 className='text-xl font-bold gradient-text'>My Stacks ?</h1>
                  {/*Stacks*/}
                  <div className="w-full lg:h-[10rem] gap-2 bg-gradient-to-r from-gray-50/20 to-black/50 rounded-xl flex flex-wrap overflow-y-auto px-2 py-4">
                    {Stacks1.map((item, id) => (
                      <span key={id} className="HTML py-1 px-6 h-[2rem] m-0 rounded-3xl text-black">{item.stack1}</span>
                    ))}
                  </div>
                </section>
              </div>
            </section>
          </section>
          <div className='flex justify-between gap-1 h-full'>
            <div className="px-2 md:px-0 w-full hidden md:flex xl:hidden">
              <div className='Stacks-boxs relative bg-gray-300 w-full h-full shadow-custom flex justify-end items-end flex-col md:mb-0 rounded-2xl overflow-hidden'>
                <div className='w-full h-full bg-gray-300 flex items-center justify-center'>
                  <img className='bg-cover h-full w-full' src={LogoAI} alt='photo'/>
                </div>
                <div className='absolute bottom-0 left-0 right-0 px-3 py-2 md:py-3 gap-1 flex flex-col justify-end items-start bg-opacity-40 w-full bg-black h-auto'>
                  <div className='text-gray-400'>React Dev</div>
                  <h1 className='text-gray-400 text-[18px] font-bold'>Onaiterimoh Victor Idepe</h1>
                  <button className='text-black py-2 px-4 rounded-3xl bg-gray-400 opacity-100 text-md font-semibold' onClick={handleDownload}>Download CV</button>
                </div>
              </div>
            </div>

            <section className="RightHand w-full min-w-[22rem] md:max-w-[25rem] h-full Container-Bg border border-white/15 rounded-2xl gap-3 flex flex-col justify-between px-1">
              {lastItem.map((project) => (
                <div key={project.id} className='Recent-Project-box bg-transparent h-[auto] w-full shadow-custom rounded-3xl px-4 pt-9 pb-3 flex flex-col gap-1'>
                  <h1 className='text-md gradient-text font-bold'>Most Recent Project</h1>
                  <div className='w-full h-[1px] bg-white/15'></div>
                  <div className='bg-transparent h-[auto] Project-Card py-2 rounded-xl flex flex-col gap-2'>
                    <div className='relative flex items-start justify-between mb-2 h-[10rem] pointer-events-none Project-Image-container rounded-2xl overflow-hidden'>
                      <img src={project.Image} alt='Project'
                        className='Project-Banner w-full h-full bg-cover rounded-2xl'
                      />
                    </div>
                    <h1 className='font-bold text-md uppercase gradient-text'>{project.name}</h1>
                    <div className='w-full max-h-[10rem] lg:h-[10rem] overflow-y-auto no-scrollbar'>
                      <p className='flex flex-wrap text-sm text-gray-400 text-start'>
                        {project.description}
                      </p>
                    </div>
                    <section className='flex flex-col gap-1 rounded-2xl'>
                      <h1 className='text-md font-bold gradient-text'>Stacks</h1>
                      <div className="w-full min-h-[7.4rem] gap-2 bg-gradient-to-r from-gray-50/20 to-black/50 rounded-xl flex flex-wrap overflow-y-auto p-2 no-scrollbar">
                        {project.stacks.map((stack, stackIndex) => (
                            <span key={stackIndex} className={`HTML py-1 px-4 h-[2rem] m-0 rounded-3xl`}>{stack}</span>
                        ))}
                      </div>
                    </section>
                  </div>
                  <div className='w-full h-[2px] bg-gray-500/30 rounded-full'></div>
                  <Link to='/projects' className='px-4 py-2 bg-white w-[8rem] text-[14px] text-black rounded-3xl flex justify-between items-center'>
                    <span>All Projects</span>
                    <CiLocationArrow1 className='text-xl' />
                  </Link>
                </div>
              ))}
            </section>
          </div>
          
        </div>
        

        <Footer/>
      </main>
    </section>
  );
}

export default HomePage;
