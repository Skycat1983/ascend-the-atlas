import React from "react";
import "./Modal.css";
import { Modifier } from "../../types/modifierTypes";
import { getRarityClassName } from "../../utils/getRarityClassname";
import { AppDispatch } from "../../types/rootInterfaces";

// type ModalProps = {
//   modifiers: Modifier[];
//   dispatch: AppDispatch;
//   closeModal: () => void;
// };

type ModalProps = {
  modifiers: Modifier[];
  onModifierSelection: (modifier: Modifier) => void;
  closeModal: () => void;
};

const Modal: React.FC<ModalProps> = ({
  modifiers,
  onModifierSelection,
  closeModal,
}) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>Choose a relic..</p>
        {modifiers.map((modifier: any, index: any) => (
          <button
            className={`${getRarityClassName(modifier.rarity)}`}
            data-tooltip={modifier.description}
            key={index}
            onClick={() => onModifierSelection(modifier)}
          >
            <img className="relic" src={modifier.url} alt="test"></img>
            {modifier.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Modal;
