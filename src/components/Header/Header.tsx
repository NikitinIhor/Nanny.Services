import { Link } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import Button from "../Button/Button";
import css from "./Header.module.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
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
              <li className={`${css.item} isActive`}>
                <Link to="/nannies">Nannies</Link>
              </li>
              <li className={css.item}>
                <Link className={css.link} to="/avorites">
                  Favorites
                </Link>
              </li>
            </ul>
          </nav>
          <div className={css.contact}>
            <div className={css.user}>
              <div className={css.user_wrapper}>
                <svg className={css.user_icon} width={16} height={16}>
                  <use href={`${sprite}#icon-user`}></use>
                </svg>
              </div>
              <span>Ilona</span>
            </div>
            <Button>Log out</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
