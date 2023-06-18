import { useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";
import "./CustomModal.css";

const CustomModal = ({ isOpen, onClose, children, showCloseButton = true }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {showCloseButton && (
          <span onClick={onClose} className="modal-close-btn">
            <FaWindowClose />
          </span>
        )}
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
