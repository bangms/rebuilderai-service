import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import MainVideo from "./../components/MainVideo";
import Optimization from "../components/Optimization";
import Banner from "../components/Banner";
import Service from "../components/Service";

const Main = () => {
  return (
    <>
      <MainVideo></MainVideo>
      <Optimization></Optimization>
      <Banner></Banner>
      <Service></Service>
    </>
  );
};

export default Main;
