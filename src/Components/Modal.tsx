import React from "react";
import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  onModifierSelection: (modifier: string) => void;
  possibleModifiers: any;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  onModifierSelection,
  possibleModifiers,
}) => {
  const handleOptionClick = (modifier: string) => {
    onModifierSelection(modifier);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div>
      {isOpen && (
        <div className="modal-backdrop">
          <div className="modal">
            {/* Render modifier options */}
            {/* <button onClick={() => handleOptionClick("modifier1")}>
              Modifier 1
            </button>
            <button onClick={() => handleOptionClick("modifier2")}>
              Modifier 2
            </button> */}
            {possibleModifiers.map((modifier: any, index: any) => (
              <button key={index} onClick={() => handleOptionClick(modifier)}>
                {modifier.name}
              </button>
            ))}
            {/* Close button */}
            {/* <button onClick={closeModal}>Close</button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
