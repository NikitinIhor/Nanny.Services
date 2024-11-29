import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Error from "../../components/Error/Error";
import Filter from "../../components/Filter/Filter";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import { getAllGallery } from "../../redux/gallery/galleryOps";
import {
  loadMoreItems,
  selectError,
  selectGallery,
  selectLimit,
  selectLoading,
} from "../../redux/gallery/gallerySlise";
import { AppDispatch } from "../../redux/store";
import css from "./Nannies.module.css";

interface NanniesProps {}

const Nannies: React.FC<NanniesProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const gallery = useSelector(selectGallery);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const limit = useSelector(selectLimit);

  useEffect(() => {
    dispatch(getAllGallery());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <Error />;

  const handleLoadMore = () => {
    dispatch(loadMoreItems());
  };

  return (
    <div>
      <Header />
      <main className={css.container}>
        <div className="big_container">
          <Filter />
          {gallery.length === 0 ? (
            <p className={css.empty}>-- The gallery is empty --</p>
          ) : (
            <ul className={css.list}>
              {gallery.map((item, index) => (
                <GalleryItem item={item} key={index} />
              ))}
            </ul>
          )}
          {gallery.length < limit ? (
            <div onClick={handleLoadMore} className={css.loadmore}>
              <Button>Load more</Button>
            </div>
          ) : (
            <p className={css.nomore}>-- No more to download....</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Nannies;
