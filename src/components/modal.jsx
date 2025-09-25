import React from "react";
import Send from "./send";

function Modal({ isOpen, onClose, restart, children }) {
  if (!isOpen) return null; // Si no está abierto, no renderiza nada

  const onClick = () =>{
      onClose()
      restart()
  }
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // evita cerrar al hacer click dentro
      >
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        {children}
        <Send onClick={onClick} > reinicia puntuaciones </Send>
      </div>
    </div>
  );
}

export default Modal;
