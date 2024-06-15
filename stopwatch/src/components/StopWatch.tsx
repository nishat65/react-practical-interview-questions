import useTimer from "../hooks/useTimer";

export default function StopWatch() {
  const { startTimer, stopTimer, resetTimer, time, isRunning } = useTimer();
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
