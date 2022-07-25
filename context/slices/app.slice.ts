import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type AppType = {
  loading: boolean;
  expandGrid: boolean;
};

const initialState: AppType = {
  loading: true,
  expandGrid: false,
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    SET_LOADING: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    SET_EXPAND_GRID: (state, action: PayloadAction<boolean>) => {
      state.expandGrid = action.payload;
    },
  },
});

export const { SET_LOADING, SET_EXPAND_GRID } = AppSlice.actions;
export default AppSlice.reducer;
