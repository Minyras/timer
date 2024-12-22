import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTime,
  recordResult,
  clearTimer,
} from "../../redux/slices/timerSlice";

const Stopwatch = () => {
  const { hours, minutes, seconds, results } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerInterval;

    if (isRunning) {
      timerInterval = setInterval(() => {
        let totalSeconds = hours * 3600 + minutes * 60 + seconds + 1;
        dispatch(
          updateTime({
            hours: Math.floor(totalSeconds / 3600),
            minutes: Math.floor((totalSeconds % 3600) / 60),
            seconds: totalSeconds % 60,
          })
        );
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, hours, minutes, seconds, dispatch]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleRecordLap = () => {
    dispatch(recordResult());
  };

  const handleReset = () => {
    setIsRunning(false);
    dispatch(clearTimer());
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "2rem" }}>
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </div>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleRecordLap} disabled={!isRunning}>
        Lap
      </button>
      <button onClick={handleReset}>Reset</button>
      <div>
        <h3>Past Measurements:</h3>
        <ul>
          {results.map((result, index) => (
            <li style={{ listStyleType: "none" }} key={index}>
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stopwatch;
