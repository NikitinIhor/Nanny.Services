import css from "./MainLoader.module.css";

interface MainLoaderProps {}

const MainLoader: React.FC<MainLoaderProps> = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <span>N</span>
        <span>a</span>
        <span>n</span>
        <span>n</span>
        <span>y</span>
        <span>.</span>
        <span>S</span>
        <span>e</span>
        <span>r</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span>s</span>
      </div>
    </div>
  );
};

export default MainLoader;
