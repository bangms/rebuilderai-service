import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Img01 from "../assets/images/slide01.png";
import Img02 from "../assets/images/slide02.png";
import Img03 from "../assets/images/slide03.png";
import Img04 from "../assets/images/slide04.png";
import Slider from "react-slick";

const images = [Img01, Img02, Img03, Img04];

const ImgSlider = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:600px)",
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <div>
          <img src={Img01} alt="Image 1" />
        </div>
        <div>
          <img src={Img02} alt="Image 2" />
        </div>
        <div>
          <img src={Img03} alt="Image 3" />
        </div>
        <div>
          <img src={Img04} alt="Image 4" />
        </div>
      </Slider>

      {isMobile && (
        <SliderImages
          style={{ width: `${images.length * 100}%` }}
          animate={controls}
        >
          {images.map((image, index) => (
            <SliderImage
              key={index}
              style={{ width: `${100 / images.length}%` }}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </SliderImage>
          ))}
        </SliderImages>
      )}
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

export default ImgSlider;
