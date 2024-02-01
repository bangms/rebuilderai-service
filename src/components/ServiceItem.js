import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import { styled } from "styled-components";
import { Context } from "../Contexts";
import { PauseIcon, PlayIcon } from "../assets/images/import";
// import PauseIcon from "../assets/images/ic_pause.svg";
// import PlayIcon from "../assets/images/ic_play.svg";
import { useTransform } from "framer-motion";
import Slider from "./Slider";

const ServiceItem = ({ r, i }) => {
  const context = useContext(Context);
  // 각 동영상의 상태 배열
  const [videoControls, setVideoControls] = useState(Array(4).fill(false));
  // 각 동영상 엘리먼트의 ref 배열
  const videoRefs = useRef(Array(4).fill(null));

  useEffect(() => {
    if (i !== 0) {
      const videoElement = videoRefs.current[i];
      if (videoElement && !videoElement.playing) {
        videoElement.play();
      }
    }
  }, [i]);

  const videoHandler = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
      setVideoControls((prevControls) =>
        prevControls.map((control, idx) => (idx === index ? !control : control))
      );
    }
  };

  return (
    <>
      <ItemContainer>
        <TitleTextContainer>
          {r.subtitle && <TitleDesc>{r.subtitle}</TitleDesc>}
          <Title>{r.title}</Title>
          <Desc>
            <span>{r.desc1}</span>
            <br />
            <span>{r.desc2}</span>
          </Desc>
        </TitleTextContainer>
        <AssetsContainer>
          {/* 영상, 슬라이드 */}
          {i === 0 ? (
            <Slider />
          ) : (
            <video
              loop={true}
              autoPlay={true}
              playsInline={true}
              ref={(el) => (videoRefs.current[i] = el)}
              muted={true}
            >
              <source src={r.video} type="video/mp4" />
            </video>
          )}
          {i !== 0 && (
            <VideoControl onClick={() => videoHandler(i)}>
              {/* videoControls[i]가 false이면, 즉 비디오가 재생 중이면 PauseIcon을 보여줍니다. */}
              {videoControls[i] ? <PlayIcon /> : <PauseIcon />}
            </VideoControl>
          )}
          {i === 3 &&
            (context.state.lang === "KOR" ? (
              <span>
                NVIDIA Omniverse 프로그램과 결합해 만든 데이터 학습용 합성
                이미지
              </span>
            ) : (
              <span>
                Synthetic image for machine learning created by combining with
                NVIDIA Omniverse program
              </span>
            ))}
        </AssetsContainer>
      </ItemContainer>
    </>
  );
};
const ItemContainer = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  padding-top: 200px;
  /* overflow: hidden; */
  @media screen and (max-width: 1280px) {
    display: block;
  }
  @media screen and (max-width: 768px) {
    padding-top: 100px;
  }
  @media screen and (max-width: 600px) {
    padding-top: 80px;
  }
`;
const TitleTextContainer = styled.div`
  min-width: 430px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  white-space: pre-wrap;
  @media screen and (max-width: 1280px) {
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    min-width: auto;
  }
`;
const TitleDesc = styled.div`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 140%;
  color: rgb(0, 0, 0);
  @media screen and (max-width: 1280px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    color: rgb(111, 117, 123);
    margin-bottom: 6px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 4.4rem;
  line-height: 140%;
  color: rgb(0, 0, 0);
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
    margin-bottom: 12px;
  }
`;
const Desc = styled.div`
  @media screen and (max-width: 1280px) {
    text-align: center;
  }
  span {
    font-weight: 500;
    font-size: 2.2rem;
    line-height: 140%;
    color: rgb(0, 0, 0);
    @media screen and (max-width: 1280px) {
      margin-bottom: 10px;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.3rem;
      line-height: 150%;
    }
  }
`;
const AssetsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: end;
  /* overflow: hidden; */
  span {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 148%;
    color: rgb(0, 0, 0);
    text-align: right;
    margin-top: 10px;
    position: absolute;
    bottom: -30px;
    right: 0;
  }
  video {
    width: 100%;
  }
  @media screen and (max-width: 1280px) {
    display: block;
    margin-top: 60px;
    span {
      color: rgb(111, 117, 123);
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 40px;
    span {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 600px) {
    margin-top: 28px;
    span {
      font-size: 0.8rem;
      max-width: 100%;
      white-space: pre-wrap;
      bottom: -24px;
    }
  }
`;
const VideoControl = styled.div`
  position: absolute;
  right: 25px;
  bottom: 25px;
  cursor: pointer;
  svg {
    fill: #6f757b;
    width: 38px;
    height: 38px;
  }
  &:hover > svg {
    fill: #000;
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 768px) {
    right: 20px;
    bottom: 20px;
  }
  @media screen and (max-width: 600px) {
    right: 10px;
    bottom: 10px;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
// const AssetsContainer = styled.div``;

export default ServiceItem;
