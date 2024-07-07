import React, { useState } from 'react';
import './Footer.css';
import { Call, GitHub, LinkedIn, Mail, YouTube } from '@mui/icons-material';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { toast } from 'react-toastify';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', accountInfo: '', label: '' , bankTitle: '', column: '', bankName: '', accName: '', accountName: '', accType: '', Type: '', typeCol: ''});

  const handleOpenModal = (title, accountInfo, label, bankTitle, column, bankName, accName, accountName, accType, Type, typeCol) => {
    setModalContent({ title, accountInfo, label, bankTitle, column, bankName, accName, accountName, accType, Type, typeCol });
    setIsModalOpen(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(modalContent.accountInfo);
    toast.success(`${modalContent.label} Copied`);
  };

  return (
    <footer className='footer1_container'>
      <h1 className="heading mb-2">Quick<span> Links</span></h1>
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
          <h2>Support Me</h2>
          <ul>
            <li>
              <button onClick={() => handleOpenModal('UBA BANK',
                import.meta.env.VITE_UBA_ACCOUNT_NUMBER,
                'Account Number', 'Bank',
                ':',
                import.meta.env.VITE_UBA_BANK_NAME,
                'Account Name',
                import.meta.env.VITE_UBA_ACCOUNT_NAME,
                '',
                '',
                ''
              )}>UBA</button>
            </li>
            <li>
              <button onClick={() => handleOpenModal('Payoneer',
                import.meta.env.VITE_PAYONEER_ACCOUNT_NUMBER,
                'Account Number',
                'Bank',
                ':',
                import.meta.env.VITE_PAYONEER_BANK_NAME,
                'Beneficiary',
                import.meta.env.VITE_PAYONEER_ACCOUNT_NAME,
                'Account Type',
                'Checking',
                ':'
              )}>Payoneer</button>
            </li>
            <li>
              <button onClick={() => handleOpenModal('Bitcoin',
                import.meta.env.VITE_BITCOIN_ADDRESS,
                'Bitcoin Address',
                '',
                '',
                '',
                '',
                '',
                ''
              )}>Bitcoin</button>
            </li>
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
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl mb-4 font-bold text-[#6371F6]">{modalContent.title}</h2>
        <p className="mb-2 font-bold">{modalContent.bankTitle}{modalContent.column} <span className='text-sm text-gray-500'>{modalContent.bankName}</span>
        </p>
        <p className="mb-2 font-bold">{modalContent.accName}{modalContent.column} <span className='text-sm text-gray-500'>{modalContent.accountName}</span>
        </p>
        <p className="mb-2 break-words font-bold">{modalContent.label}: <span className='text-sm text-gray-500'>{modalContent.accountInfo}</span></p>
        <p className="mb-2 break-words font-bold">{modalContent.accType}{modalContent.typeCol} <span className='text-sm text-gray-500'>{modalContent.Type}</span></p>
        <div className='bg-transparent flex justify-end'>
          <button
            onClick={handleCopy}
            className="bg-[#6371F6] text-white px-5 py-1 rounded hover:bg-gray-600 shadow-custom transition duration-300"
          >
            Copy
          </button>
        </div>
      </Modal>
    </footer>
  );
}

export default Footer;
