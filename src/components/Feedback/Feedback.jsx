import s from "./Feedback.module.css";

export default function Feedback({
  feedbacks,
  totalFeedbacks,
  perentageOfPositiveFeedbacks,
}) {
  return (
    <div className={s.container}>
      <p className={s.feedback}>Good: {feedbacks.good}</p>
      <p className={s.feedback}>Neutral: {feedbacks.neutral}</p>
      <p className={s.feedback}>Bad: {feedbacks.bad}</p>
      <p className={s.feedback}>Total: {totalFeedbacks}</p>
      <p className={s.feedback}>Positive: {perentageOfPositiveFeedbacks}%</p>
    </div>
  );
}
