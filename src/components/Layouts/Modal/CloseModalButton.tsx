import { Close } from "@/components/Layouts/Icons";

type CloseModalButtonT = { onClose: () => void };

const CloseModalButton: React.FC<CloseModalButtonT> = ({ onClose }) => {
  return (
    <div className="modal-box__close">
      <button className="modal-box__close-btn" onClick={onClose}>
        <Close />
      </button>
    </div>
  );
};

export default CloseModalButton;
