import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import { selectIsAuthenticated, selectUser } from "../../redux/auth/authSlice";
import Button from "../Button/Button";
import Logout from "../Logout/Logout";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import css from "./Header.module.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <header className={css.header}>
      <div className="big_container">
        <div className={css.wrapper}>
          <div className={css.logo}>
            <Link to="/">Nanny.Services</Link>
          </div>
          <nav>
            <ul className={css.list}>
              <li className={css.item}>
                <Link className={css.link} to="/">
                  Home
                </Link>
              </li>
              <li className={css.item}>
                <NavLink
                  to="/nannies"
                  className={({ isActive }) =>
                    `${css.link} ${isActive ? "isActive" : ""}`
                  }
                >
                  Nannies
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    `${css.link} ${isActive ? "isActive" : ""}`
                  }
                >
                  Favorites
                </NavLink>
              </li>
            </ul>
          </nav>
          {isAuthenticated && user && (
            <div className={css.contact}>
              <div className={css.user}>
                <div className={css.user_wrapper}>
                  <svg className={css.user_icon} width={16} height={16}>
                    <use href={`${sprite}#icon-user`}></use>
                  </svg>
                </div>
                <span>{user?.name || "Anonymous"}</span>
              </div>
              <div onClick={handleOpenModal}>
                <Button>Log out</Button>
              </div>
            </div>
          )}
          <ModalWrapper
            isOpen={openModal}
            onRequestClose={handleCloseModal}
            handleCloseModal={handleCloseModal}
          >
            <Logout handleCloseModal={handleCloseModal} />
          </ModalWrapper>
        </div>
      </div>
    </header>
  );
};

export default Header;
