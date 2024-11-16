import { ReactNode } from "react";
import Modal from "react-modal";
import css from "./ModalWrapper.module.css";
Modal.setAppElement("#root");

interface ModalWrapperProps {
  onRequestClose: () => void;
  handleCloseModal: () => void;
  isOpen: boolean;
  children: ReactNode;
}

const customStyles = {
  content: {
    width: "586px",
    borderRadius: "30px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "64px",
  },
};

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  onRequestClose,
  isOpen,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      overlayClassName={css.overlay}
    >
      {children}
    </Modal>
  );
};

export default ModalWrapper;
