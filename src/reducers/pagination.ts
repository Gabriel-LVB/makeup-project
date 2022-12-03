import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  value: {
    current: number;
    numOfPages: number;
  };
}

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    value: {
      current: 1,
      numOfPages: 0,
    },
  } as InitialState,
  reducers: {
    setInitialPage: (state) => {
      state.value.current = 1;
    },
    setCurrent: (state, action) => {
      state.value.current = action.payload;
    },
    setNumOfPages: (state, action) => {
      state.value.numOfPages = Math.ceil(action.payload.length / 10);
    },
  },
});

export const { setInitialPage, setCurrent, setNumOfPages } =
  paginationSlice.actions;
export default paginationSlice.reducer;
