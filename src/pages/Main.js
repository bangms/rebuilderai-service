import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import LogoIcon from "../assets/images/ic_logo.svg";
import LocaleIcon from "../assets/images/ic_locale.svg";
import HamburgerIcon from "../assets/images/ic_hamburger.svg";
import HamburgerIconOff from "../assets/images/ic_hamburger_off.svg";
import { Context } from "../Contexts/index";

const Main = () => {
  const context = useContext(Context);

  useEffect(() => {
    console.log(context.state.lang);
  }, [context.state.lang]);

  const mainVedioRef = useRef(null);
  const isPc = useMediaQuery({
    query: "(min-width:769px)",
  });

  return (
    <>
      <Wrapper>
        {/* <ReactPlayer
    url={process.env.PUBLIC_URL + '/videos/about-video1.mp4'}
    width='400px'
    height='300px'
    playing={true}
    muted={true}
    controls={true}
    loop={true}
    /> */}
        <video
          id="main-video"
          loop={true}
          autoPlay={true}
          ref={mainVedioRef}
          playsInline={true}
        >
          <source src={"../../public/videos/main_video.mp4"} type="video/mp4" />
        </video>
        <VideoTxt>3D Digital Transformation</VideoTxt>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out 0s;
  video {
    width: 640px;
    height: auto;
    visibility: visible;
    // 스크롤 하면서 변하는 값
    transform: matrix(1, 0, 0, 1, 0, 0);
    filter: blur(0rem);
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 600px) {
    video {
      width: 320px;
    }
  }
`;
const VideoTxt = styled.div`
  position: fixed;
  left: 0px;
  width: 100%;
  text-align: center;
  font-size: 7rem;
  color: #fff;
  line-height: 130.5%;
  text-align: center;
  font-weight: 800;
  // 스크롤 하면서 변하는 값
  opacity: 1;
  @media screen and (max-width: 1280px) {
    font-size: 5.6rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 4.8rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 2.4rem;
    white-space: pre-wrap;
  }
`;

export default Main;
