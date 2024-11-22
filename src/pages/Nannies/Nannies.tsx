import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Error from "../../components/Error/Error";
import Filter from "../../components/Filter/Filter";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import { getAllGallery } from "../../redux/galleryOps";
import {
  selectError,
  selectGallery,
  selectLoading,
} from "../../redux/gallerySlise";
import { AppDispatch } from "../../redux/store";
import css from "./Nannies.module.css";

interface NanniesProps {}

const Nannies: React.FC<NanniesProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const gallery = useSelector(selectGallery);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllGallery());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <div>
      <Header />
      <main className={css.container}>
        <div className="big_container">
          <Filter />
          {gallery.length === 0 ? (
            <p className={css.empty}>-- The gallery is empty --</p>
          ) : (
            gallery.map((el, index) => (
              <GalleryItem item={el} key={el.id || index} />
            ))
          )}
          <Button>Download more</Button>
        </div>
      </main>
    </div>
  );
};

export default Nannies;
