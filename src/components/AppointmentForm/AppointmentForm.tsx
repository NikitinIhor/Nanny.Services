import sprite from "../../images/sprite.svg";
import ContactForm from "../ContactForm/ContactForm";
import css from "./AppointmentForm.module.css";

interface AppointmentFormProps {
  item: {
    name: string;
    avatar_url: string;
  };
  handleCloseModal: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  handleCloseModal,
  item,
}) => {
  return (
    <div className={css.container}>
      <button onClick={handleCloseModal} className={css.close}>
        <svg width={32} height={32}>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      </button>
      <h2 className={css.title}>Make an appointment with a babysitter</h2>
      <p className={css.text}>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>
      <div className={css.image}>
        <img src={item.avatar_url} alt={item.name} />
        <div className={css.info}>
          <p>Your nanny</p>
          <p>{item.name}</p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default AppointmentForm;
