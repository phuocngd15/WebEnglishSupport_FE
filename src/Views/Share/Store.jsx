import React from "react";
import { render } from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import AuthenticationReducer from "../Authentication/AuthenticationSlice";

const store = configureStore({
    reducer: AuthenticationReducer,
});
export default store