// import React from 'react'
import Footer from '../../components/footer/Footer'
import Banner from '../../components/banner/Banner';
import './About.css'
import { Link } from 'react-router-dom';
import { AdsClick, BusinessCenterOutlined, CodeOffOutlined } from '@mui/icons-material';

function AboutPage() {
  return (
    <section className='h-[100vh] w-full flex Home overflow-auto scrollbar-hide lg:px-5'>
      <main className='glass-effect-3 bg-white bg-opacity-50 backdrop-blur-xl shadow-lg flex-grow overflow-auto scrollbar-hide'>
        <div className='Home-box pt-3 w-full overflow-auto scrollbar-hide'> 
          <section className='Banner-container w-full h-[17rem] px-2'>
            <Banner header='About Me' des='Digital agent that brings your ideas to life through technology and innovation.'/>
          </section>
          <section className="about">
            <div className="row">
                <div className="video-container border border-white/15">
                    <div className='video_row border border-gray-500'>
                      <img src='https://movicks.github.io/movicx-portfolio-react/assets/DevMovicxBanner-25f4983f.png' alt='Photo' className='image' loading='lazy'/>
                    </div>
                </div>

                <div className="content">
                    <h3 className='text-center'>Why choose me?</h3>
                    <div>
                        <h2 className="heading text-white">
                            <span className="onaiB">Anywhere</span> and <span className="onai2">anytime</span> i provide<span className="onai2"> professional</span> solutions.
                        </h2>
                        <p>
                        I am Onaiterimoh Victor Idepe, a frontend specialist focused on building clean, interactive, and user centered web experiences. My primary strength lies in translating UI and UX designs into responsive, high performance interfaces that feel intuitive and purposeful.
                        </p>
                        <p>
                         While frontend development is my core focus, I also work as a full stack developer when projects require deeper integration across the stack. I have experience collaborating with teams and delivering reliable results on real world products, with strong attention to detail, performance, and usability.
                        </p>
                        <p>
                         Through MovicX, I build modern web interfaces that balance visual clarity with technical precision. My goal is to create digital products users enjoy using and teams are confident shipping.     
                        </p>
                        <p>
                         This is Victor at MovicX, building thoughtful web experiences with purpose.
                        </p>
                        <div className='onai5'>
                            <Link to='/resume' className="btn">See Resume</Link>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <section id='Services'>
            <h1 className="heading text-white"><span className='gradient-text'>Services</span></h1>
            <p className="text-center pb-3 text-gray-400">What I do for my clients</p>
            <div className='flex justify-center align-center'>
              <div className='md:flex justify-center mb-3'>
                  <div className='client-mark flex lg:gap-2'>
                    <div className='Client-services Container-Bg border border-white/15 rounded-2xl shadow-custom py-3 px-2 max-w-[7.2rem] lg:w-full lg:max-w-[11rem] justify-center align-center text-center'>
                    {/* icons here */}
                        <CodeOffOutlined className='Service-icon text-white'/>
                        <p className='text-gray-400'>Web <br/> Development</p>
                    </div>
                    <div className='Client-services Container-Bg border border-white/15 rounded-2xl shadow-custom mx-1 max-w-[7.2rem] lg:w-full lg:max-w-[11rem] pb-5 pt-3 px-2 justify-center align-center text-center'>
                        <BusinessCenterOutlined className='Service-icon text-white'/>
                        <p className='text-gray-400'>Project Management</p>
                    </div>
                    <div className='Client-services Container-Bg border border-white/15 rounded-2xl shadow-custom py-3 px-2 lg:p-3 max-w-[7.2rem] lg:w-full lg:max-w-[16rem] justify-center align-center text-center'>
                        <AdsClick className='Service-icon text-white'/>
                        <p className='text-gray-400'>Code Mentorship</p>
                    </div>
                  </div>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      </main>
    </section>
  );
}

export default AboutPage