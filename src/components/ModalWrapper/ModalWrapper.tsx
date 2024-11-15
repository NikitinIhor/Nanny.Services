import Modal from "react-modal";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import css from "./ModalWrapper.module.css";
Modal.setAppElement("#root");

interface ModalWrapperProps {
  onRequestClose: () => void;
  isOpen: boolean;
  login: boolean;
  registration: boolean;
}

const customStyles = {
  content: {
    width: "586px",
    borderRadius: "10px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "12px",
  },
};

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  onRequestClose,
  isOpen,
  login,
  registration,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      overlayClassName={css.overlay}
    >
      {login && <Login />}
      {registration && <Registration />}
    </Modal>
  );
};

export default ModalWrapper;
