import React, { createContext, useReducer, useState } from "react";
import { createStore } from "redux";

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

const Context = createContext({ initialState });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        lang: action.lang,
      };

    case SET_HEADER:
      return {
        ...state,
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

let store = createStore(reducer);

export { Context, Provider, store };
