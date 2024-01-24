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
      x: -currentIndex + "%",
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  }, [currentIndex, controls]);

  const nextSlide = () => {
    const newIndex = (currentIndex + 10) % 100;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 1000);

    return () => clearInterval(timer);
  }, [nextSlide, 1000]);

  return (
    <SliderContainer>
      <SliderImages
        style={{ width: `${images.length * 100}%` }}
        animate={controls}
      >
        {images.map((image, index) => (
          <SliderImage key={index} style={{ width: `${100 / images.length}%` }}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SliderImage>
        ))}
      </SliderImages>
    </SliderContainer>
  );
};
const SliderContainer = styled.div`
  position: relative;
  width: 54.7%;
  overflow: hidden;
`;

const SliderImages = styled(motion.div)`
  display: flex;
`;

const SliderImage = styled.div`
  img {
    padding: 0 10px;
    width: 100%;
    height: auto;
    min-height: 446.22px;
  }
`;

export default Slider;
