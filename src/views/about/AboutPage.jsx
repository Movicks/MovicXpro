import React from 'react'
import Footer from '../../components/footer/Footer'
import Banner from '../../components/banner/Banner';
import './About.css'
import { Link } from 'react-router-dom';
import { AdsClick, BusinessCenterOutlined, CodeOffOutlined } from '@mui/icons-material';

function AboutPage() {
  return (
    <section className='h-[100vh] w-full flex Home overflow-auto scrollbar-hide'>
      <div className='Dashboard-resDiv min-w-[15rem] bg-gray-300 overflow-auto scrollbar-hide'></div>
      <main className='glass-effect-3 bg-white bg-opacity-50 backdrop-blur-xl shadow-lg flex-grow overflow-auto scrollbar-hide'>
        <div className='Home-box pt-3 w-full overflow-auto scrollbar-hide'> 
          <section className='Banner-container w-full h-[17rem] px-2'>
            <Banner header='About Me' des='Digital agent that brings your ideas to life through technology and innovation.'/>
          </section>
          <section className="about">
            <div className="row">
                <div className="video-container">
                    <div className='video_row'>
                      <img src='https://movicks.github.io/movicx-portfolio-react/assets/DevMovicxBanner-25f4983f.png' alt='Photo' className='image' loading='lazy'/>
                    </div>
                </div>

                <div className="content">
                    <h3 className='text-center'>Why choose me?</h3>
                    <div>
                        <h2 className="heading">
                            <span className="onaiB">Anywhere</span> and <span className="onai2">anytime</span> i provide<span className="onai2"> professional</span> solutions.
                        </h2>
                        <p>Onaiterimoh Victor Idepe, known as Movicx, is a Front-end Developer with expertises in bring UI designs to life,
                          as well as junior-level full stack experience. I enjoy building interactive and responsive webpages that solve human problems.
                          With a background in customer service, tech training & support, content writing, and project management,
                          I am well-equipped to add value and build a dynamic career by developing scalable tech solutions that addresses user needs.
                          I am always ready to learn and improve, aiming to become a world-class developer in the tech space.
                        </p>
                        <p>
                            I can build and maintain websites, implementing responsive designs, 
                            optimizing websites performance and collaborating with any Development team to implement new features and fix bugs.
                        </p>
                        <p>
                            Happy coding....     
                        </p>
                        <div className='onai5'>
                            <Link to='/resume' className="btn">See Resume</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <section id='Services'>
            <h1 className="heading"><span>Services</span></h1>
            <p className="text-center pb-3 text-gray-400">What I do for my clients</p>
            <div className='flex justify-center align-center'>
              <div className='md:flex justify-center mb-3'>
                  <div className='client-mark flex'>
                    <div className='Client-services bg-white shadow-custom p-3 max-w-[8rem] justify-center align-center text-center'>
                    {/* your icons here */}
                        <CodeOffOutlined className='Service-icon text-[#6371F6]'/>
                        <p className=''>Web Development</p>
                    </div>
                    <div className='Client-services bg-white shadow-custom mx-1 max-w-[8rem] pb-5 pt-3 px-7 justify-center align-center text-center'>
                        <BusinessCenterOutlined className='Service-icon text-[#6371F6]'/>
                        <p>Digital Marketing</p>
                    </div>
                    <div className='Client-services bg-white shadow-custom p-3 max-w-[8rem] justify-center align-center text-center'>
                        <AdsClick className='Service-icon text-[#6371F6]'/>
                        <p>Social Media Management</p>
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