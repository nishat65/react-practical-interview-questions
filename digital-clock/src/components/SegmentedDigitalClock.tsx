import { useState, useEffect } from "react";
import "./DigitalClock.css";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getDigits = (number: number) => {
    return number.toString().padStart(2, "0").split("");
  };

  const renderDigit = (digit: string) => {
    const segments = [
      digit !== "1" && digit !== "4", // for top segment
      digit !== "5" && digit !== "6", // for  right top segment
      digit !== "2", // for right bottom segment
      digit !== "1" && digit !== "4" && digit !== "7", // for bottom segment
      digit === "0" || digit === "2" || digit === "6" || digit === "8", // for left bottom segment
      digit !== "1" && digit !== "2" && digit !== "3" && digit !== "7", // for left top segment
      digit !== "0" && digit !== "1" && digit !== "7", // for middle segment
    ];
    console.log(segments);
    return (
      <div className="digit">
        {segments.map((active, index) => (
          <div key={index} className={`segment ${active ? "active" : ""}`} />
        ))}
      </div>
    );
  };

  const hours = getDigits(time.getHours());
  const minutes = getDigits(time.getMinutes());
  const seconds = getDigits(time.getSeconds());

  return (
    <div className="digital-clock">
      {renderDigit(hours[0])}
      {renderDigit(hours[1])}
      <div className="colon">:</div>
      {renderDigit(minutes[0])}
      {renderDigit(minutes[1])}
      <div className="colon">:</div>
      {renderDigit(seconds[0])}
      {renderDigit(seconds[1])}
    </div>
  );
};

export default DigitalClock;
