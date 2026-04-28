import styles from "./Button.module.css";

interface ButtonProps {
  name: string;
}

export const Button = ({ name }: ButtonProps) => {
  return <button className={styles.button}>{name}</button>;
};
