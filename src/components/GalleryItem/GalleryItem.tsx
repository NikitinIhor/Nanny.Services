import css from "./GalleryItem.module.css";

interface GalleryItemProps {
  item: {
    id: string;
    name: string;
    avatar_url: string;
    rating: number;
    experience: string;
    location: string;
    price_per_hour: number;
  };
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item }) => {
  return (
    <div className={css.container}>
      <div className={css.image}>
        <img src={item.avatar_url} alt={item.name} />
      </div>
      <div className={css.content}>
        <h3>{item.name}</h3>
        <p>{item.experience}</p>
        <p>{item.location}</p>
        <p>${item.price_per_hour} / hr</p>
        <p>Rating: {item.rating}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
