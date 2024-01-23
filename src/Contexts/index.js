import React, { createContext, useReducer, useState } from "react";

const SET_LOCALE = "SET_LOCALE";
const SET_TITLE = "SET_TITLE";

const initialState = { lang: "ENG", title: "" };

const Context = createContext({});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        lang: action.lang,
      };

    case SET_TITLE:
      return {
        title: action.title,
      };

    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
