import { useState, useEffect, useRef } from "react";

function App() {
  const timerRef = useRef(0);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function startTimer() {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime((prevState) => {
        let { hours, minutes, seconds } = prevState;
        seconds += 1;
        if (seconds >= 60) {
          seconds = 0;
          minutes += 1;
        }
        if (minutes >= 60) {
          minutes = 0;
          hours += 1;
        }
        if (hours >= 24) {
          hours = 0;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
  }

  function stopTimer() {
    setIsRunning(false);
    clearInterval(timerRef.current);
  }

  function resetTimer() {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  }

  return (
    <div className="stopwatch">
      <div className="stopwatch-display">
        <div className="time">{time.hours}</div>
        <div className="time">{time.minutes}</div>
        <div className="time">{time.seconds}</div>
      </div>
      <div className="buttons-display">
        <div className="buttons">
          <button
            className={`button ${isRunning ? "pause" : "start"}`}
            onClick={startTimer}
            disabled={isRunning}
          >
            {time.hours || time.minutes || time.seconds ? "Resume" : "Start"}
          </button>
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
