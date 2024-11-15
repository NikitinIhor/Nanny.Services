import { useState } from "react";
import { Link } from "react-router-dom";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";
import sprite from "../../images/sprite.svg";
import css from "./HomePage.module.css";

const HomePage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeModal, setActiveModal] = useState<
    "login" | "registration" | null
  >(null);

  const handleOpenModal = (type: "login" | "registration") => {
    setOpenModal(true);
    setActiveModal(type);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setActiveModal(null);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.body}>
          <div className={css.left}>
            <div className={css.logo}>
              <Link to="/">Nanny.Services</Link>
            </div>
            <div className={css.content}>
              <h1>Make Life Easier for the Family:</h1>
              <p>Find Babysitters Online for All Occasions</p>
              <button className={css.btn} type="button">
                Get started
                <svg className={css.icon} width={18} height={18}>
                  <use href={`${sprite}#icon-arrow`}></use>
                </svg>
              </button>
            </div>
          </div>
          <div className={css.right}>
            <header>
              <nav>
                <ul className={css.list}>
                  <li className={css.link}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={css.link}>
                    <Link to="/nannies">Nannies</Link>
                  </li>
                </ul>
              </nav>
              <div className={css.buttons}>
                <button onClick={() => handleOpenModal("login")} type="button">
                  Log In
                </button>
                <button
                  onClick={() => handleOpenModal("registration")}
                  type="button"
                >
                  Registration
                </button>
              </div>
            </header>
            <div className={css.right_body}>
              <div className={css.icon_body}>
                <svg className={css.check}>
                  <use href={`${sprite}#icon-check`}></use>
                </svg>
              </div>
              <div className={css.right_content}>
                <p>Experienced nannies</p>
                <span>15,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalWrapper
        login={activeModal === "login"}
        registration={activeModal === "registration"}
        isOpen={openModal}
        onRequestClose={handleCloseModal}
      />
    </div>
  );
};

export default HomePage;
