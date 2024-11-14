import css from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Button;
