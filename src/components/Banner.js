import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { styled } from "styled-components";
import ScrollImage from "../assets/images/scroll_img.png";
import CropImage from "../assets/images/scroll_img_crop.png";
import ArrowIcon from "../assets/images/ic_arrow.svg";
import BannerIcon from "../assets/images/ic_banner.svg";
import { useMediaQuery } from "react-responsive";

const Banner = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:600px)",
  });
  const { scrollYProgress, scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1, 1.5]);
  const yRange = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <>
      <Wrapper yRange={yRange}>
        <BannerContainer>
          <DescSection>
            <Card>
              <ImageContainer>
                {!isMobile && <BannerIcon />}
                <BannerText>
                  {!isMobile && <span>AI로 만드는 3D 모델</span>}
                  <span>VRIN 3D</span>
                </BannerText>
              </ImageContainer>
              <DescText>
                <span>인공지능으로 자동 생성되는 3D 모델과</span>
                <br />
                <span>손쉬운 편집을 경험해보세요.</span>
              </DescText>
            </Card>
            <MoreButtonContainer>
              <MoreButton>
                <span>더 알아보기</span>
                <ArrowIcon />
              </MoreButton>
            </MoreButtonContainer>
          </DescSection>
        </BannerContainer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled(motion.div)`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;

  background-image: url("src/assets/images/scroll_img.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  y: ${(props) => props.yRange};
  @media screen and (max-width: 1024px) {
    height: 280px;
  }
  @media screen and (max-width: 768px) {
    height: 160px;
  }
  @media screen and (max-width: 600px) {
    height: 140px;
  }
`;
const BannerContainer = styled.div`
  height: 100%;
  width: 100%;
  ${({ theme }) => theme.common.flexCenterRow};
  justify-content: center;
`;
const DescSection = styled.div`
  ${({ theme }) => theme.common.ContainerDiv};
  ${({ theme }) => theme.common.flexCenterColumn};
  align-items: flex-start;
  gap: 48px;
  z-index: 2;
  @media screen and (max-width: 1024px) {
    gap: 32px;
  }
  @media screen and (max-width: 768px) {
    gap: 19px;
  }
  @media screen and (max-width: 600px) {
    align-items: center;
    gap: 8px;
  }
`;
const Card = styled.div`
  height: auto !important;
`;
const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
  svg {
    width: 90px;
    height: 90px;

    @media screen and (max-width: 1024px) {
      width: 66px;
      height: 66px;
    }
  }
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;
const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  & span:first-child {
    color: rgb(93, 108, 250);
    font-size: 2rem;
    font-weight: 600;
    line-height: 140%;
  }
  & span:last-child {
    color: rgb(255, 255, 255);
    font-size: 5.6rem;
    font-weight: 600;
    line-height: 120%;
  }
  @media screen and (max-width: 1024px) {
    & span:first-child {
      font-size: 1.3rem;
    }
    & span:last-child {
      font-size: 3.7rem;
    }
  }
  @media screen and (max-width: 768px) {
    & span:first-child {
      font-size: 0.8rem;
    }
    & span:last-child {
      font-size: 2.2rem;
    }
  }
  @media screen and (max-width: 600px) {
    & span:last-child {
      font-size: 2rem;
    }
  }
`;
const DescText = styled.div`
  span {
    color: rgb(189, 193, 199);
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 140%;
  }
  @media screen and (max-width: 1024px) {
    span {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 600px) {
    text-align: center;
    span {
      font-size: 1rem;
    }
  }
`;
const MoreButton = styled.div`
  width: fit-content;
  max-width: 194px;
  border-radius: 4px;
  background: rgb(230, 232, 235);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 16px 0px;
  color: rgb(55, 55, 204);
  padding: 12px 16px;
  gap: 8px;
  ${({ theme }) => theme.common.flexCenter};

  &:hover {
    background: #fff;
  }
  span {
    font-size: 2rem;
    font-weight: 600;
    line-height: 140%;
  }
  svg {
    fill: rgb(55, 55, 204);
    width: 24px;
    height: 24px;
  }
  @media screen and (max-width: 1024px) {
    span {
      font-size: 1.3rem;
    }
    svg {
      width: 16px;
      height: 16px;
    }
  }
  @media screen and (max-width: 600px) {
    background: none;
    box-shadow: none;
    gap: 2px;
    padding: 0;
    &:hover {
      background: none;
    }
    span {
      font-size: 0.8rem;
      color: #fff;
    }
    svg {
      width: 8px;
      height: 8px;
      fill: #fff;
    }
  }
`;
const MoreButtonContainer = styled.div`
  cursor: pointer;
  z-index: 3;
`;

export default Banner;
