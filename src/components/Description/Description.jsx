import s from "./Description.module.css";

export default function Description({ title, description }) {
  return (
    <div className={s.container}>
      <h1 className={s.title}>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
