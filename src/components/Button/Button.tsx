import css from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={css.container}>{children}</button>;
};

export default Button;
