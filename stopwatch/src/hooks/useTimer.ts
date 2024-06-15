import { useRef, useState } from "react";

export default function useTimer() {
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
        const { hours, minutes, seconds } = prevState;
        const newSeconds = (seconds + 1) % 60;
        const newMinutes = (minutes + Math.floor(seconds / 60)) % 60;
        const newHours = (hours + Math.floor(minutes / 60)) % 24;
        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
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

  return {
    startTimer,
    stopTimer,
    resetTimer,
    time,
    isRunning,
  };
}
