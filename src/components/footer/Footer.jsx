import React from 'react';
import './Footer.css';
import { Call, GitHub, LinkedIn, Mail, YouTube } from '@mui/icons-material';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

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
              <Link to='https://www.linkedin.com/in/onaiterimoh-victor-idepe-40b516235'>
                <LinkedIn />
              </Link>
            </li>
            <li>
              <Link to='https://x.com/onaivictor?s=09'>
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link to='https://github.com/Movicks'>
                <GitHub />
              </Link>
            </li>
            <li>
              <Link to='https://wa.link/p1m3cn'>
                <FaWhatsapp className='text-xl' />
              </Link>
            </li>
            <li>
              <Link to='https://www.tiktok.com/@dev_movicx'>
                <FaTiktok />
              </Link>
            </li>
            <li>
              <Link to='https://youtube.com/@CodlabX9770?si=lg_5KiwnJmVzno50'>
                <YouTube />
              </Link>
            </li>
          </ul>
        </div>
        <div className='sec quickLinks'>
          <h2>Communities</h2>
          <ul>
            <li><Link to='#'>Frontend Mentor</Link></li>
            <li><Link to='https://chat.whatsapp.com/J62SP1n3dJWKHfVOwdMwcz'>CodaxLab</Link></li>
          </ul>
        </div>
        <div className='sec quickLinks'>
          <h2>Pay Methods</h2>
          <ul>
            <li><Link to='#'>Grey</Link></li>
            <li><Link to='#'>Payoneer</Link></li>
            <li><Link to='#'>Bitcoin</Link></li>
          </ul>
        </div>
        <div className='sec contact_us'>
          <h2>My Contacts</h2>
          <ul className='info'>
            <li><Call className='icon text-gray-400' /><Link to='tel:+2349039062234'>+2349039062234</Link></li>
            <li><Mail className='icon text-gray-400' /><Link to='mailto:victoride013@gmail.com'>victoride013@gmail.com</Link></li>
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
