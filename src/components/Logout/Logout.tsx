import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../firebase/auth";
import sprite from "../../images/sprite.svg";
import { AppDispatch } from "../../redux/store";
import css from "./Logout.module.css";
export const useAppDispatch: () => AppDispatch = useDispatch;

interface LogoutProps {
  handleCloseModal: () => void;
}

const Logout: React.FC<LogoutProps> = ({ handleCloseModal }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    navigate("/");
    toast.success("user logout seccessfully", {
      duration: 4000,
      position: "top-right",
    });
  };

  return (
    <div className={css.container}>
      <button onClick={handleCloseModal} className={css.close}>
        <svg width={36} height={36}>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      </button>
      <h2>Do you want to logout?</h2>
      <div className={css.btns}>
        <button onClick={handleCloseModal} className={css.cencel}>
          Cencel
        </button>
        <button onClick={handleLogoutUser} className={css.logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
