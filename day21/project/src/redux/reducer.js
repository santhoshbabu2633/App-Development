import { createSlice } from "@reduxjs/toolkit";
import store from "./store";

const initialState = JSON.parse(localStorage.getItem("reduxState")) || {
  email: null,
  firstName: null,
  secondName: null,
  phoneNo: null,
  emailId: null,
  query: null,
  firstNamec: null,
  secondNamec: null,
  emailc: null,
  pass: null,
  rpass: null,
  mostLikedAuthor: null,
  mostLikedGenre: null,
  mostLikesCount: 0,
};

export const dashSlice = createSlice({
  name: "dash",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
    setSecondName(state, action) {
      state.secondName = action.payload;
    },
    setPhoneNo(state, action) {
      state.phoneNo = action.payload;
    },
    setEmailId(state, action) {
      state.emailId = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    setUserNamec(state, action) {
      state.userNamec = action.payload;
    },
    setEmailc(state, action) {
      state.emailc = action.payload;
    },
    setPass(state, action) {
      state.pass = action.payload;
    },
    setMostLikedInfo: (state, action) => {
      state.mostLikedAuthor = action.payload.author;
      state.mostLikedGenre = action.payload.genre;
      state.mostLikesCount = action.payload.likesCount;
    },
    resetState: (state) => {
      return initialState;
    },
  },
});

export const {
  setEmail,
  setFirstName,
  setSecondName,
  setPhoneNo,
  setEmailId,
  setQuery,
  setUserNamec,
  setEmailc,
  setPass,
  setRpass,
  setMostLikedInfo,
  resetState,
} = dashSlice.actions;

export default dashSlice.reducer;
