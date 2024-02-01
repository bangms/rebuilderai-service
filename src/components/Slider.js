import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Img01 from "../assets/images/slide01.png";
import Img02 from "../assets/images/slide02.png";
import Img03 from "../assets/images/slide03.png";
import Img04 from "../assets/images/slide04.png";

const images = [Img01, Img02, Img03, Img04];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: -(currentIndex * 5) + "%",

      transition: { duration: 0.5, ease: "easeInOut" },
    });
  }, [currentIndex, controls]);

  const nextSlide = useCallback(() => {
    // 이미지 배열의 마지막에 도달하지 않았다면 다음 이미지로 넘어간다.
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // 마지막 이미지에 도달했다면 첫 번째 이미지로 "보이지 않게" 즉시 전환한다.
      // 이 로직은 애니메이션이 완료된 직후에 수행되어야 한다.
      controls
        .start({
          x: -4.5 * images.length + "%", // 마지막 이미지로 이동
          transition: { duration: 0.5, ease: "easeInOut" },
        })
        .then(() => {
          // 이동이 완료되면 즉시 첫 번째 이미지로 전환하지만, 애니메이션은 없다.
          controls.set({ x: "0%" });
          setCurrentIndex(0);
        });
    }
  }, [currentIndex, controls, images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000); // 3초 간격으로 슬라이드를 넘긴다.

    return () => clearInterval(timer);
  }, [nextSlide]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     nextSlide();
  //   }, 1000);

  //   return () => clearInterval(timer);

  // }, [nextSlide, 1000]);

  return (
    <SliderContainer>
      <SliderImages
        style={{ width: `${images.length * 100}%` }}
        animate={controls}
      >
        {images.map((image, index) => (
          <SliderImage key={index} style={{ width: "10%", padding: "0 10px" }}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SliderImage>
        ))}
      </SliderImages>
    </SliderContainer>
  );
};
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SliderImages = styled(motion.div)`
  display: flex;
`;

const SliderImage = styled.div`
  width: 10%;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    padding: 0 10px;
    width: 100%;
    height: auto;
    min-height: 446.22px;
  }
`;

export default Slider;
