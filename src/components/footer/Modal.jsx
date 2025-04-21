// import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-10 pb-20 flex items-end justify-center z-50">
      <div className="bg-white border-dotted border-[3px] border-[#6371F6] px-8 py-6 rounded shadow-lg max-w-sm w-full relative border-b">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl hover:bg-gray-200 shadow-custom p-2 rounded-full"><FaTimes className='text-[#6371F6] hover:text-black text-md'/></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
