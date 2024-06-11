import React from 'react'
import Footer from '../../components/footer/Footer';

function ContactPage() {
  return (
    <section className='h-[100vh] w-full flex Home'>
      <div className='Dashboard-resDiv w-[23.5rem] bg-gray-300'></div>
      <main className='glass-effect-3 bg-white bg-opacity-50 backdrop-blur-xl shadow-lg flex-grow'>
        <div className='Home-box pt-3 w-full'>
          <section className='bg-white w-full h-[30rem]'>
            <div>Contact 1</div>
          </section>
          <section>2</section>
        </div>
        <Footer/>
      </main>
    </section>
  );
}

export default ContactPage