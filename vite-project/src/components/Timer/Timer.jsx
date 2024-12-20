import { useState, useEffect } from "react";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [totalTime, setTotalTime] = useState(60);

  useEffect(() => {
    let timerInterval;

    if (isRunning && totalTime > 0) {
      timerInterval = setInterval(() => {
        setTotalTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (totalTime === 0) {
      setIsRunning(false);
      alert("Time's up!");
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, totalTime]);

  const toggleTimer = () => {
    if (!isRunning) {
      setTotalTime(hours * 3600 + minutes * 60 + seconds);
    }
    setIsRunning(!isRunning);
  };

  const formatTime = (time) => String(time).padStart(2, "0");

  const remainingHours = Math.floor(totalTime / 3600);
  const remainingMinutes = Math.floor((totalTime % 3600) / 60);
  const remainingSeconds = totalTime % 60;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {!isRunning && (
        <div style={{ marginBottom: "20px" }}>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            placeholder="HH"
            style={{ width: "60px", marginRight: "5px", fontSize: "1rem" }}
          />
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            placeholder="MM"
            style={{ width: "60px", marginRight: "5px", fontSize: "1rem" }}
          />
          <input
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(Number(e.target.value))}
            placeholder="SS"
            style={{ width: "60px", fontSize: "1rem" }}
          />
        </div>
      )}
      <div style={{ fontSize: "2rem", marginBottom: "20px" }}>
        {formatTime(remainingHours)}:{formatTime(remainingMinutes)}:
        {formatTime(remainingSeconds)}
      </div>
      <button
        onClick={toggleTimer}
        style={{ fontSize: "1rem", padding: "10px 20px" }}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
    </div>
  );
};

export default Timer;
