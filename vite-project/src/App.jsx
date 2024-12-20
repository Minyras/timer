import "./App.css";
import Header from "./components/Header/Header";
import StopWatch from "./components/StopWatch/StopWatch";
import Timer from "./components/Timer/Timer";
import Watch from "./components/Watch/Watch";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </>
  );
}

export default App;
