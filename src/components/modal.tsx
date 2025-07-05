"use client";
import React, { MouseEvent } from 'react';
import { ModalProps } from "../types/headerProps";
import '../style/modal.css';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, mensagem }) => {
  if (!isOpen) return null;  
  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation(); // evita fechar quando clica dentro

  return (        
    <div className="modal-overlay">
      <div     
        className="modal-container"
        onClick={handleContentClick} 
        role="dialog"
        aria-modal="true"
        aria-labelledby="error-modal-title"
      > 
        <div className="modal-header">
          <button             
            onClick={onClose}
            className="close-button"
            aria-label="Fechar"
          >
            &times;
          </button>
            <h2 id="error-modal-title" className="modal-title">Ops! Algo deu errado</h2>
        </div>   
        <div className="modal-body">
          {mensagem}
        </div>    
      </div>
    </div>
  );
};

export default Modal;