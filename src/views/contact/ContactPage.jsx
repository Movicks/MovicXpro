import React from 'react'
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';

function ContactPage() {
  return (
    <section className='h-[100vh] w-full flex Home'>
      <div className='Dashboard-resDiv w-[23.5rem] bg-gray-300'></div>
      <main className='glass-effect-3 bg-white bg-opacity-50 backdrop-blur-xl shadow-lg flex-grow'>
        <div className='Home-box pt-3 w-full'>
          <section className='Banner-container w-full h-[17rem] px-2'>
            <Banner header='CONTACT US' des='Contact me for your next project.'/>
          </section>
          <section>2</section>
          <Footer/>
        </div>
      </main>
    </section>
  );
}

export default ContactPage