import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  results: [],
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    updateTime: (state, action) => {
      const { hours, minutes, seconds } = action.payload;
      state.hours = hours;
      state.minutes = minutes;
      state.seconds = seconds;
    },
    recordResult: (state) => {
      const formattedTime = `${String(state.hours).padStart(2, "0")}:${String(
        state.minutes
      ).padStart(2, "0")}:${String(state.seconds).padStart(2, "0")}`;
      state.results.push(formattedTime);
    },
    clearTimer: (state) => {
      state.hours = 0;
      state.minutes = 0;
      state.seconds = 0;
    },
    clearResults: (state) => {
      state.results = [];
    },
  },
});

export const { updateTime, recordResult, clearTimer, clearResults } =
  timerSlice.actions;
export default timerSlice.reducer;
