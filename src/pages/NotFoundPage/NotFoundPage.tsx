import { Link } from "react-router-dom";
import image from "../../images/notFound.jpg";
import css from "./NotFoundPage.module.css";

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div className={css.container}>
      <img src={image} alt="not foun page" />
      <button className={css.btn}>
        <Link to="/" />
      </button>
    </div>
  );
};

export default NotFoundPage;
