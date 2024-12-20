import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerInterval;

    if (isRunning) {
      timerInterval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning]);

  const toggleTimer = () => {
    if (isRunning) {
      alert(`Measured Time: ${formatTime(elapsedTime)}`);
    }
    setIsRunning(!isRunning);
    if (!isRunning) {
      setElapsedTime(0);
    }
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div style={{ fontSize: "2rem", marginBottom: "20px" }}>
        {formatTime(elapsedTime)}
      </div>
      <button
        onClick={toggleTimer}
        style={{ fontSize: "1rem", padding: "10px 20px" }}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Stopwatch;
