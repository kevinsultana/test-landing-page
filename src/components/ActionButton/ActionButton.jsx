import style from "./style.module.css";

export default function ActionButton({ children }) {
  return <button className={style.button}>{children}</button>;
}
