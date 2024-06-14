import React from 'react'
import Footer from '../../components/footer/Footer'
import Banner from '../../components/banner/Banner';
import './About.css'

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
                        <p>Victor known as Movicx is a Front-end Developer, 
                            with skills in UI design and technical writing, 
                            I enjoy building interactive and responsive webpages that solves human problems. with a background in customer service,
                            Tech training & support, content writing, Project management etc.
                            I am able to add value and build a dynamic career by developing
                            scalable tech solutions that address specific user needs. I am always ready learn and improve the more to be a world-class developer in tech space.
                        </p>
                        <p>
                            I can build and maintain websites, implementing responsive designs, 
                            optimizing websites performance and collaborating with any Development team to implement new features and fix bugs.
                        </p>
                        <p>
                            Happy coding....     
                        </p>
                        <div className='onai5'>
                            <a href="myCV/Professional Resume - 01.pdf" className="btn">See my CV</a>
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