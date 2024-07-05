import s from "./Options.module.css";

export default function Options({
  setFeedback,
  totalFeedbacks,
  resetFeedback,
}) {
  return (
    <div className={s.container}>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          setFeedback("good");
        }}>
        Good
      </button>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          setFeedback("neutral");
        }}>
        Neutral
      </button>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          setFeedback("bad");
        }}>
        Bad
      </button>

      {Boolean(totalFeedbacks) && (
        <button className={s.button} type="button" onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
