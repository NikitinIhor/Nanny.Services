import css from "./Favorites.module.css";

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
  return <div className={css.container}> Favorites</div>;
};

export default Favorites;
