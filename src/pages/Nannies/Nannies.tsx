import Header from "../../components/Header/Header";
import css from "./Nannies.module.css";

interface NanniesProps {}

const Nannies: React.FC<NanniesProps> = () => {
  return (
    <div className={css.big_container}>
      <Header />
    </div>
  );
};

export default Nannies;
