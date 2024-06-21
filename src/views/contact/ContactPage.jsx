import React from 'react';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import { TbPhoneCalling } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/contactform/ContactForm';

function ContactPage() {
  return (
    <section className='h-screen w-full flex Home overflow-hidden'>
      <div className='Dashboard-resDiv min-w-[15rem] bg-gray-300'></div>
      <main className='glass-effect-3 bg-white bg-opacity-50 backdrop-blur-xl flex-grow overflow-auto'>
        <div className='Home-box pt-3 w-full'>
          <section className='Banner-container w-full h-[17rem] px-2'>
            <Banner header='CONTACT US' des='Contact me for your next project.' />
          </section>
          <section className='w-full my-2 flex items-center justify-center px-2'>
            <div className='Contact-container w-full max-w-[60rem] h-[25rem] shadow-custom flex flex-col lg:flex-row'>
              <div className='w-full lg:w-[35rem] h-full lg:h-auto sm:h-[20rem] lg:max-h-[25rem] px-10 py-5 lg:px-20 lg:py-20 flex flex-col justify-between'>
                <div>
                  <h1 className='text-xl font-bold pb-2'>Get In Touch</h1>
                  <p className='text-gray-400'>Don't be shy, contact me.</p>
                  <p className='text-gray-400'>Let us bring your dreams to reality</p>
                </div>
                <div className='w-full h-[2px] bg-gray-300 my-3'></div>
                <div>
                  <h1 className='text-[13px] font-bold pb-3'>
                    Blck Y, Room 4. Nigerian Armed Forces Resettlement Center Oshodi Lagos.
                  </h1>
                  <div className='flex gap-2 items-center'>
                    <TbPhoneCalling className='text-4xl text-[#6371F6]' />
                    <div>
                      <Link to='tel:+2349039062234' className='text-sm text-gray-400'>
                        +2349039062234
                      </Link>
                      <h3 className='text-sm text-[#6371F6]'>victoride013@gmail.com</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-[#6371F6] w-full lg:w-[25rem] h-full lg:h-auto sm:h-[20rem] lg:max-h-[25rem]'></div>
            </div>
          </section>
          <section className='w-full my-5 flex items-center justify-center px-2'>
            <div className='w-full max-w-[60rem] h-[auto] flex items-center gap-2'>
              <div className='w-full h-[2px] bg-gray-300'></div>
              <span className='text-gray-400'>OR</span>
              <div className='w-full h-[2px] bg-gray-300'></div>
            </div>
          </section>
          <ContactForm/>
          <Footer />
        </div>
      </main>
    </section>
  );
}

export default ContactPage;
