import { useEffect, useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

import s from "./App.module.css";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbacks, setFeedback] = useState(() => {
    const savedFeedbacks = JSON.parse(window.localStorage.getItem("feedbacks"));

    if (savedFeedbacks !== null) {
      return savedFeedbacks;
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = feedbacks.bad + feedbacks.good + feedbacks.neutral;

  const perentageOfPositiveFeedbacks = Math.round(
    (feedbacks.good / totalFeedback) * 100
  );

  return (
    <div className={s.container}>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <div className={s.buttonContainer}>
        <Options
          resetFeedback={resetFeedback}
          totalFeedbacks={totalFeedback}
          setFeedback={updateFeedback}
        />
      </div>

      {totalFeedback ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedbacks={totalFeedback}
          perentageOfPositiveFeedbacks={perentageOfPositiveFeedbacks}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
