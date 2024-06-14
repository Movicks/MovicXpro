import React from 'react';
import './Footer.css';
import { Call, GitHub, LinkedIn, Mail, YouTube } from '@mui/icons-material';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='footer1_container'>
      <h1 className="heading">Quick<span> Links</span></h1>
      <div className='footer-container md:flex align-center'>
        <div className='sec about_us'>
          <h2>About Me</h2>
          <p>I enjoy building interactive and responsive webpages that make my clients happy.</p>
          <ul className='sci md:flex gap-2'>
            <li>
              <a href='https://www.linkedin.com/in/onaiterimoh-victor-idepe-40b516235'>
                <LinkedIn />
              </a>
            </li>
            <li>
              <a href='https://x.com/onaivictor?s=09'>
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href='https://github.com/Movicks'>
                <GitHub />
              </a>
            </li>
            <li>
              <a href='https://wa.link/p1m3cn'>
                <FaWhatsapp className='text-xl' />
              </a>
            </li>
            <li>
              <a href='https://www.tiktok.com/@dev_movicx'>
                <FaTiktok />
              </a>
            </li>
            <li>
              <a href='https://youtube.com/@CodlabX9770?si=lg_5KiwnJmVzno50'>
                <YouTube />
              </a>
            </li>
          </ul>
        </div>
        <div className='sec quickLinks'>
          <h2>Communities</h2>
          <ul>
            <li><a href='#'>Frontend Mentor</a></li>
            <li><a href='#'>CodaxLab</a></li>
          </ul>
        </div>
        <div className='sec quickLinks'>
          <h2>Pay Methods</h2>
          <ul>
            <li><a href='#'>Grey</a></li>
            <li><a href='#'>Payoneer</a></li>
            <li><a href='#'>Bitcoin</a></li>
          </ul>
        </div>
        <div className='sec contact_us'>
          <h2>My Contacts</h2>
          <ul className='info'>
            <li><Call className='icon text-gray-400' /><a href='tel:+2349039062234'>+2349039062234</a></li>
            <li><Mail className='icon text-gray-400' /><a href='mailto:victoride013@gmail.com'>victoride013@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className='copyrightText text-center'>
        <p className='px-2'>CopyRights &copy;2024 MovicXPro. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
