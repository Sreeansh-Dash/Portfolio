import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onPointerDown={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-zoom-out"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 max-w-full max-h-full flex flex-col items-center justify-center pointer-events-none"
          >
            <img
              src={imageSrc}
              alt="Enlarged view"
              className="max-w-[95vw] max-h-[90vh] object-contain rounded shadow-2xl pointer-events-auto cursor-default bg-white/5"
              onPointerDown={(e) => e.stopPropagation()}
            />
            <button
              onPointerDown={(e) => { e.stopPropagation(); onClose(); }}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-widest pointer-events-auto bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md"
            >
              <span className="material-icons text-sm">close</span> Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default ImageModal;
