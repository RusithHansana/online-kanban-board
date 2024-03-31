// boardsGlobalStateSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardList: [],
  activeBoardId: "",
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boardList = action.payload;
    },
    addBoard: (state, action) => {
      state.boardList.push(action.payload);
    },
    updateBoard: (state, action) => {
      const index = state.boardList.findIndex(
        (board) => board._id === action.payload._id
      );
      if (index !== -1) {
        state.boardList[index] = action.payload;
      }
    },
    deleteBoard: (state, action) => {
      state.boardList = state.boardList.filter(
        (board) => board._id !== action.payload._id
      );
    },
    deleteAllBoards: (state) => {
      state.boardList = [];
    },
    setActiveBoardId: (state, action) => {
      state.activeBoardId = action.payload;
    },
  },
});

export const {
  setBoards,
  addBoard,
  updateBoard,
  deleteBoard,
  deleteAllBoards,
  setActiveBoardId,
} = boardsSlice.actions;
export default boardsSlice.reducer;
