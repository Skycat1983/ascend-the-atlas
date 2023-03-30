import React from "react";
import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  onModifierSelection: (modifier: string) => void;
  availableModifiers: any;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  onModifierSelection,
  availableModifiers,
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
            <p>Choose a relic..</p>
            {availableModifiers.map((modifier: any, index: any) => (
              <>
                {/* <div> */}
                <button
                  className={
                    modifier.target === "displayedCountry"
                      ? "relic-button-rare"
                      : modifier.target === "displayedOptions"
                      ? "relic-button-uncommon"
                      : "relic-button-common"
                  }
                  data-tooltip={modifier.description}
                  key={index}
                  onClick={() => handleOptionClick(modifier)}
                >
                  <img className="relic" src={modifier.url} alt="test"></img>
                  {modifier.name}
                </button>
                {/* </div> */}
              </>
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
