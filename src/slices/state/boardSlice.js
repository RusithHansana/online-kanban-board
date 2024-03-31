// boardsGlobalStateSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
    addBoard: (state, action) => {
      state.boards.push(action.payload);
    },
    updateBoard: (state, action) => {
      const index = state.boards.findIndex(
        (board) => board._id === action.payload._id
      );
      if (index !== -1) {
        state.boards[index] = action.payload;
      }
    },
    deleteBoard: (state, action) => {
      state.boards = state.boards.filter(
        (board) => board._id !== action.payload._id
      );
    },
    deleteAllBoards: (state) => {
      state.boards = [];
    },
  },
});

export const {
  setBoards,
  addBoard,
  updateBoard,
  deleteBoard,
  deleteAllBoards,
} = boardsSlice.actions;
export default boardsSlice.reducer;
