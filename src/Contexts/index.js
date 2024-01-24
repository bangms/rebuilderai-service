import React, { createContext, useReducer, useState } from "react";

const SET_LOCALE = "SET_LOCALE";
const SET_HEADER = "SET_HEADER";

/**
 * SET_LOCALE
 * lang - "ENG" , "KOR"
 *
 * SET_HEADER
 * option - "black", "white", "hide"
 */
const initialState = { lang: "KOR", option: "black" };

const Context = createContext({});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        lang: action.lang,
      };

    case SET_HEADER:
      return {
        option: action.option,
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
