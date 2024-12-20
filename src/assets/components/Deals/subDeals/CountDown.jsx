import React, { useState, useEffect } from "react";
import "./Countdown.css";

const CountdownTimer = ({ deadline }) => {
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(deadline)
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(deadline));
    }, 1000);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, [deadline]);

  function calculateTimeRemaining(deadline) {
    const now = new Date().getTime();
    const distance = new Date(deadline).getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, distance };
  }

  return (
    <div>
      {timeRemaining.distance > 0 ? (
        <div className="CountDiv">
          <p>
            {timeRemaining.days} <span>Days</span>
          </p>
          <div class="timer-separator">
            <div class="timer-dot"></div>
            <div class="timer-dot"></div>
          </div>
          <p>
            {timeRemaining.hours} <span>Hours</span>
          </p>
          <div class="timer-separator">
            <div class="timer-dot"></div>
            <div class="timer-dot"></div>
          </div>
          <p>
            {timeRemaining.minutes} <span>Minutes</span>
          </p>
          <div class="timer-separator">
            <div class="timer-dot"></div>
            <div class="timer-dot"></div>
          </div>
          <p>
            {timeRemaining.seconds} <span>Seconds</span>
          </p>
        </div>
      ) : (
        <h2>Deadline Reached!</h2>
      )}
    </div>
  );
};

export default CountdownTimer;
