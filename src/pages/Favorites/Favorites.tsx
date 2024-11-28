import { useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import Header from "../../components/Header/Header";
import { selectFavouriteArr } from "../../redux/gallerySlise";
import css from "./Favorites.module.css";

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
  const favouriteGallery = useSelector(selectFavouriteArr);

  return (
    <div>
      <Header />
      <main className={css.container}>
        <div className="big_container">
          <Filter />
          <ul className={css.list}>
            {favouriteGallery.map((item) => (
              <GalleryItem item={item} key={item.index} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Favorites;
