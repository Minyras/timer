import "./App.css";
import Header from "./components/Header/Header";
import StopWatch from "./components/StopWatch/StopWatch";
import Timer from "./components/Timer/Timer";
import Watch from "./components/Watch/Watch";
import { Route, Routes } from "react-router-dom";
import store from "./redux/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </Provider>
  );
}

export default App;
