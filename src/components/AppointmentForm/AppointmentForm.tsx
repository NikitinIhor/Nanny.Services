import sprite from "../../images/sprite.svg";
import css from "./AppointmentForm.module.css";

interface AppointmentFormProps {
  handleCloseModal: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  handleCloseModal,
}) => {
  return (
    <div className={css.container}>
      <button onClick={handleCloseModal} className={css.close}>
        <svg width={36} height={36}>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      </button>
    </div>
  );
};

export default AppointmentForm;
