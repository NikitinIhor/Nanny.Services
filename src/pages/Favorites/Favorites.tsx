import Filter from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
import css from "./Favorites.module.css";

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
  return (
    <div>
      <Header />
      <main className={css.container}>
        <div className="big_container">
          <Filter />
          <ul className={css.list}>{/* <GalleryItem /> */}</ul>
        </div>
      </main>
    </div>
  );
};

export default Favorites;
