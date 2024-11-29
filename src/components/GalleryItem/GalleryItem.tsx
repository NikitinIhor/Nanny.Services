import { useState } from "react";
import { useDispatch } from "react-redux";
import sprite from "../../images/sprite.svg";
import { addToFavouriteArr } from "../../redux/gallery/gallerySlise";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import Button from "../Button/Button";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import css from "./GalleryItem.module.css";

interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

interface GalleryItemProps {
  item: {
    index: number;
    name: string;
    avatar_url: string;
    location: string;
    rating: number;
    price_per_hour: number;
    birthday: string;
    experience: string;
    kids_age: string;
    characters: string[];
    education: string;
    about: string;
    reviews: Review[];
  };
}
const getAge = (age: string) => {
  const date = new Date().getFullYear();
  const newAge = new Date(age);
  return date - newAge.getFullYear();
};

const GalleryItem: React.FC<GalleryItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleAddtoFavoriteGallery = (name: string) => {
    setFavorite((prev) => !prev);
    dispatch(addToFavouriteArr(name));
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <li className={css.container}>
      <div className={css.image_wrapper}>
        <div className={css.image}>
          <img src={item.avatar_url} alt={item.name} />
          <div className={css.dot}>
            <span></span>
          </div>
        </div>
      </div>
      <div className={css.content}>
        <div className={css.header}>
          <div className={css.name}>
            <p>Nanny</p> <span>{item.name}</span>
          </div>
          <div className={css.header_block}>
            <div className={`${css.location} ${css.decore}`}>
              <svg className={css.icon_location} width={16} height={16}>
                <use href={`${sprite}#icon-location`}></use>
              </svg>
              {item.location}
            </div>
            <div className={`${css.rating} ${css.decore}`}>
              <svg className={css.icon_rating} width={16} height={16}>
                <use href={`${sprite}#icon-star`}></use>
              </svg>
              Rating:<span>{item.rating}</span>
            </div>
            <div className={css.price}>
              Price / 1 hour:<span>{item.price_per_hour}$</span>
            </div>
            <button
              onClick={() => handleAddtoFavoriteGallery(item.name)}
              className={css.header_btn}
            >
              <svg
                className={`${css.heart} ${favorite ? css.isFavorite : ""}`}
                width={26}
                height={26}
              >
                <use href={`${sprite}#icon-heart`}></use>
              </svg>
            </button>
          </div>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            Age: <span>{getAge(item.birthday)}</span>
          </li>
          <li className={css.item}>
            Experience: <span>{item.experience}</span>
          </li>
          <li className={css.item}>
            Kids Age: <span>{item.kids_age}</span>
          </li>
          <li className={css.item}>
            Characters:{" "}
            <span>
              {item.characters.map((character, index) => (
                <span key={index}>
                  {character} {index < item.characters.length - 1 && ","}
                </span>
              ))}
            </span>
          </li>
          <li className={css.item}>
            Education: <span>{item.education}</span>
          </li>
        </ul>
        <p className={css.about}>{item.about}</p>
        <button
          onClick={handleOpen}
          className={`${css.read} ${open ? css.hide : ""}`}
          type="button"
        >
          Read more
        </button>

        <div className={`${css.modal} ${open ? css.modalIsOpen : ""}`}>
          <ul className={css.reviews}>
            {item.reviews.map((el, index) => (
              <li key={index} className={css.reviews_item}>
                <div className={css.reviews_header}>
                  <div className={css.avatar}>
                    <span>{el.reviewer.slice(0, 1)}</span>
                  </div>
                  <div className={css.header_info}>
                    <p>{el.reviewer}</p>
                    <div className={css.header_rating}>
                      <svg className={css.icon_rating} width={16} height={16}>
                        <use href={`${sprite}#icon-star`}></use>
                      </svg>
                      <span>{el.rating}</span>
                    </div>
                  </div>
                </div>
                <p>{el.comment}</p>
              </li>
            ))}
          </ul>
          <div onClick={handleOpenModal} className={css.btn}>
            <Button>Make an appointment</Button>
          </div>
        </div>

        <ModalWrapper
          isOpen={openModal}
          onRequestClose={handleCloseModal}
          handleCloseModal={handleCloseModal}
        >
          <AppointmentForm item={item} handleCloseModal={handleCloseModal} />
        </ModalWrapper>
      </div>
    </li>
  );
};

export default GalleryItem;
