import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-transform duration-300 ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="relative max-w-screen-lg max-h-screen">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl z-10"
        >
          &times;
        </button>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1000} 
          height={1000} 
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Modal;
