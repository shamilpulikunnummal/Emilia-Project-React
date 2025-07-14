import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-07-01T00:00:00"); // 🕒 Set your target date here
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
  <>
  
   <div className="counter-container container">
      <div className="row">
        <div className="col">
          <div className="">
          <div className="side-head-sub-tittle">SPECIALS DEALS</div>
          <h4 className="side-head-title" style={{ fontSize: "1.8rem" }}>
            Countless attractive offers are waiting for you
          </h4>
          <div className="text-small">
            Hurry up, these attractive offers are limited in quantity!
          </div>
          </div>
        </div>
        <div className="col">
          <div className="time-box">
            <div><span>{timeLeft.days}</span><p>Days</p></div><span className="Colon">:</span>
            <div><span>{timeLeft.hours}</span><p>Hours</p></div><span className="Colon">:</span>
            <div><span>{timeLeft.minutes}</span><p>Minutes</p></div><span className="Colon">:</span>
            <div><span>{timeLeft.seconds}</span><p>Seconds</p></div>
          </div>
        </div>
      </div>
    </div>
  
  </>
  );
}

export default Counter;
