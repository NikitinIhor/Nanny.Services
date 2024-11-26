import { ReactNode, useEffect, useState } from "react";
import Modal from "react-modal";
import css from "./ModalWrapper.module.css";
Modal.setAppElement("#root");

interface ModalWrapperProps {
  onRequestClose: () => void;
  handleCloseModal: () => void;
  isOpen: boolean;
  children: ReactNode;
}

const baseStyles = {
  content: {
    borderRadius: "30px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "90vh",
  },
};

const responsiveStyles = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    return {
      width: "280px",
      padding: "15px",
    };
  } else {
    return {
      width: "586px",
      padding: "64px",
    };
  }
};

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  onRequestClose,
  isOpen,
  children,
}) => {
  const [customStyles, setCustomStyles] = useState({
    content: { ...baseStyles.content, ...responsiveStyles() },
  });

  useEffect(() => {
    const madalWidth = () => {
      setCustomStyles({
        content: { ...baseStyles.content, ...responsiveStyles() },
      });
    };

    window.addEventListener("resize", madalWidth);

    madalWidth();

    return () => window.removeEventListener("resize", madalWidth);
  }, []);

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
