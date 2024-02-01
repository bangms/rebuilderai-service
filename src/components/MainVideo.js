import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Context } from "../Contexts/index";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

const MainVideo = () => {
  const mainVedioRef = useRef(null);
  const isPc = useMediaQuery({
    query: "(min-width:769px)",
  });
  const context = useContext(Context);

  // framer motion
  const { scrollY, scrollYProgress } = useScroll();
  const matrixValue = useTransform(
    scrollY,
    [0, 430],
    ["matrix(1, 0, 0, 1, 0, 0)", "matrix(24.4, 0, 0, 24.4, 0, 0)"]
  );
  const blurValue = useTransform(
    scrollY,
    [0, 430],
    ["blur(0rem)", "blur(10rem)"]
  );
  const positionValue = useTransform(
    scrollY,
    [0, 600, 601],
    ["fixed", "fixed", "absolute"]
  );
  const displayValue = useTransform(
    scrollY,
    [0, 600, 601],
    ["flex", "flex", "none"]
  );
  const opacityValue = useTransform(scrollY, [0, 225, 230], [1, 0.1, 0.1]);
  const txtDisplayValue = useTransform(
    scrollY,
    [0, 225, 230],
    ["block", "block", "none"]
  );
  const txtOpacityValue = useTransform(scrollY, [230, 400, 401], [0.1, 1, 1]);
  const txt2DisplayValue = useTransform(
    scrollY,
    [0, 229, 230, 2000, 2001],
    ["none", "none", "block", "block", "none"]
  );

  useEffect(() => {
    if (scrollY < 225) {
      context.dispatch({
        type: "SET_HEADER",
        option: "black",
      });
    }
    if (scrollY > 225 && scrollY < 600) {
      context.dispatch({
        type: "SET_HEADER",
        option: "white",
      });
    }
    if (scrollY > 1580) {
      context.dispatch({
        type: "SET_HEADER",
        option: "hide",
      });
    }
  }, [scrollY]);

  return (
    <>
      <Wrapper>
        <VideoContainer
          // fixed={scrollY > 600}
          // animate={scrollY}
          style={{
            position: positionValue,
            display: displayValue,
          }}
        >
          <motion.video
            loop={scrollY > 600 ? true : false}
            autoPlay={true}
            ref={mainVedioRef}
            playsInline={true}
            style={{
              transform: matrixValue,
              filter: blurValue,
            }}
          >
            <source src={"videos/main_video.mp4"} type="video/mp4" />
          </motion.video>
        </VideoContainer>
        <TextContainer style={{ position: positionValue }}>
          <VideoTxt style={{ opacity: opacityValue, display: txtDisplayValue }}>
            3D Digital Transformation
          </VideoTxt>
          <VideoTxt2
            style={{ opacity: txtOpacityValue, display: txt2DisplayValue }}
          >
            <span
              style={{ opacity: txtOpacityValue, display: txt2DisplayValue }}
            >
              3D Digital Transformation
            </span>
            <br />
            The Next Generation of
            <br />
            Digital Transformatio
          </VideoTxt2>
        </TextContainer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 150vh;
  background: linear-gradient(
    45deg,
    rgb(29, 92, 255) 18.46%,
    rgb(47, 208, 179) 100%
  );
  position: relative;
`;
const VideoContainer = styled(motion.div)`
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
  }
  @media screen and (max-width: 600px) {
    video {
      width: 320px;
    }
  }
`;
const TextContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  ${({ theme }) => theme.common.flexCenter};
`;
const VideoTxt = styled(motion.div)`
  width: 100%;
  text-align: center;
  font-size: 7rem;
  color: #fff;
  line-height: 130.5%;
  text-align: center;
  font-weight: 800;
  // 스크롤 하면서 변하는 값 position
  opacity: 1;
  display: block;
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
const VideoTxt2 = styled(motion.div)`
  width: 100%;
  text-align: center;
  font-size: 7rem;
  color: #fff;
  line-height: 130.5%;
  text-align: center;
  font-weight: 800;
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

export default MainVideo;
