import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";
import PlusIcon from "../assets/images/ic_plus.svg";
import ShoesImg from "../assets/images/model01.png";
import Viewer01_ko from "../assets/images/pop_img01.png";
import Viewer01_en from "../assets/images/pop_img01_en.png";
import Viewer02_ko from "../assets/images/pop_img02.png";
import Viewer02_en from "../assets/images/pop_img02_en.png";
import { Context } from "../Contexts";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

//{context.state.lang === "KOR"}
const Optimization = () => {
  const context = useContext(Context);
  const isMobile = useMediaQuery({
    query: "(max-width:600px)",
  });
  const { scrollY, scrollYProgress } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -100]);

  return (
    <>
      <Wrapper>
        <Container>
          {!isMobile && (
            <TitleDiv style={{ y }}>
              {/* 신발 이미지 끝부분에서 사용하기로 이동 */}
              <SubTitle>3D model</SubTitle>
              <MainTitle>
                {context.state.lang === "KOR" ? "최적화" : "Optimization"}
              </MainTitle>
              <MainTitle>
                {context.state.lang === "KOR" ? "사용하기" : "Usage"}
              </MainTitle>
            </TitleDiv>
          )}
          <ModelSectionContainer>
            <Section>
              <ExplanationSection>
                {isMobile ? (
                  <>
                    <MainTitle isMobile>
                      {context.state.lang === "KOR"
                        ? "3D 모델 최적화"
                        : "3D model optimization"}
                    </MainTitle>
                    <Desc>
                      {context.state.lang === "KOR"
                        ? "3D 모델의 로딩 시간을 최소화하고 용량 제한 없이"
                        : "Minimize the loading time of the 3D model and"}
                      <br />
                      {context.state.lang === "KOR"
                        ? "다양한 플랫폼에서 사용해보세요."
                        : "try using it on various platforms without capacity limitation."}
                    </Desc>
                  </>
                ) : (
                  <Desc>
                    {context.state.lang === "KOR"
                      ? "3D 파일의 품질을 유지한 채 원하는 용량과 폴리곤으로최적화하여 제공합니다."
                      : "We provide optimized 3D files in the desired capacity and polygons while maintaining the quality of the 3D file."}
                    <br />
                    {context.state.lang === "KOR"
                      ? "로딩 시간을 최소화하고 용량 제한 없이 다양한 플랫폼에 업로드해보세요."
                      : "Minimize loading time and try uploading to various platforms without capacity limitation."}
                  </Desc>
                )}
              </ExplanationSection>
              <ImageSection>
                <img src={ShoesImg} />
              </ImageSection>
            </Section>
            <Section>
              <ExplanationSection>
                {isMobile ? (
                  <>
                    <MainTitle isMobile>
                      {context.state.lang === "KOR"
                        ? "3D 모델 사용하기"
                        : "Using 3D models"}
                    </MainTitle>

                    <Desc>
                      {context.state.lang === "KOR"
                        ? "리빌더AI의 3D 뷰어를 이용하여, 간편하게"
                        : "Using RebuilderAI's 3D viewer, you can easily"}

                      <br />
                      {context.state.lang === "KOR"
                        ? "색감, 그림자, 빛의 세기를 원하는 대로 조절할 수 있습니다."
                        : "adjust the color, shadow, and intensity of light."}
                    </Desc>
                  </>
                ) : (
                  <Desc>
                    {context.state.lang === "KOR"
                      ? `리빌더AI의 3D 뷰어를 이용하여, 간편하게 색감, 그림자, 빛의 세기를 원하는 대로 조절할 수 있습니다.`
                      : "Using RebuilderAI's 3D viewer, you can easily adjust the color, shadow, and intensity of light."}

                    <br />
                    {context.state.lang === "KOR"
                      ? `3D 제품에 태그를 추가하여 공유할 수 있으며, 편집한 3D 뷰어는 웹 쇼핑몰에도 사용할 수 있습니다.`
                      : "You can add tags to the 3D product and share it You can also use the edited 3D viewer in online shop."}
                  </Desc>
                )}
              </ExplanationSection>
              <VideoContainer isMobile>
                <VideoSection>
                  <Video>
                    {context.state.lang === "KOR" ? (
                      <>
                        <video loop={true} autoPlay={true} playsInline={true}>
                          <source
                            src={"../../public/videos/service_video_pc_ko.mp4"}
                            type="video/mp4"
                          />
                        </video>
                        <ModalImage>
                          <img src={Viewer01_ko} />
                        </ModalImage>
                      </>
                    ) : (
                      <>
                        <video loop={true} autoPlay={true} playsInline={true}>
                          <source
                            src={"../../public/videos/service_video_pc_en.mp4"}
                            type="video/mp4"
                          />
                        </video>
                        <ModalImage>
                          <img src={Viewer01_en} />
                        </ModalImage>
                      </>
                    )}

                    <PlusIcon />
                  </Video>
                </VideoSection>
                {isMobile && (
                  <Desc>
                    {context.state.lang === "KOR"
                      ? "3D 제품에 태그를 추가하여 공유할 수 있으며"
                      : "You can add tags to the 3D product and share it"}
                    <br />
                    {context.state.lang === "KOR"
                      ? "편집한 3D 뷰어는 웹 쇼핑몰에도 사용할 수 있습니다."
                      : "You can also use the edited 3D viewer in online shop."}
                  </Desc>
                )}
                <VideoSection>
                  <Video>
                    {context.state.lang === "KOR" ? (
                      <>
                        <video loop={true} autoPlay={true} playsInline={true}>
                          <source
                            src={"../../public/videos/service_video2_pc_ko.mp4"}
                            type="video/mp4"
                          />
                        </video>
                        <ModalImage>
                          <img src={Viewer02_ko} />
                        </ModalImage>
                      </>
                    ) : (
                      <>
                        <video loop={true} autoPlay={true} playsInline={true}>
                          <source
                            src={"../../public/videos/service_video2_pc_en.mp4"}
                            type="video/mp4"
                          />
                        </video>
                        <ModalImage>
                          <img src={Viewer02_en} />
                        </ModalImage>
                      </>
                    )}
                    <PlusIcon />
                  </Video>
                </VideoSection>
              </VideoContainer>
            </Section>
          </ModelSectionContainer>
        </Container>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(246, 247, 248);
  ${({ theme }) => theme.common.flexCenter};
`;
const Container = styled.div`
  ${({ theme }) => theme.common.ContainerDiv};
  display: flex;
  padding-top: 120px;
  padding-bottom: 190px;
  gap: 40px;
  @media screen and (max-width: 768px) {
    padding-top: 107px;
    padding-bottom: 120px;
  }
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;
const TitleDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: sticky;
  top: 0px;
  height: fit-content;
  padding: 120px 0px 190px;
  min-width: 200px;
  span {
    line-height: 140%;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    gap: 6px;
    min-width: 80px;
  }
`;
const SubTitle = styled.span`
  ${({ theme }) => theme.fonts.font24};
  color: ${({ theme }) => theme.colors.black};
  @media screen and (max-width: 768px) {
    // tablet
    ${({ theme }) => theme.fonts.font18};
  }
`;
const MainTitle = styled.span`
  margin-bottom: ${(props) => (props.isMobile ? "20px" : 0)};

  font-weight: 600;
  ${({ theme }) => theme.fonts.font36};
  color: ${({ theme }) => theme.colors.black};
  isMobile @media screen and (max-width: 1280px) {
    // pc
    ${({ theme }) => theme.fonts.font34};
  }
  @media screen and (max-width: 768px) {
    // tablet
    ${({ theme }) => theme.fonts.font22};
  }
  @media screen and (max-width: 600px) {
    // mobile
    ${({ theme }) => theme.fonts.font16};
  }
`;
const ModelSectionContainer = styled.div`
  min-width: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ExplanationSection = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  margin-bottom: 40px;
  align-items: flex-start;
  @media screen and (max-width: 600px) {
    // mobile
    align-items: center;
  }
`;
const Desc = styled.span`
  line-height: 170%;
  ${({ theme }) => theme.fonts.font26};

  @media screen and (max-width: 1280px) {
    // pc
    ${({ theme }) => theme.fonts.font20};
  }
  @media screen and (max-width: 768px) {
    // tablet
    ${({ theme }) => theme.fonts.font14};
  }
  @media screen and (max-width: 600px) {
    // mobile
    text-align: center;
  }
`;
const ImageSection = styled.div`
  img {
    max-width: 1134px;
    width: 100%;
  }
`;
const Section = styled.div`
  &:last-child {
    padding: 230px 0px 20px;
    @media only screen and (max-width: 1280px) {
      padding: 120px 0px 0px;
    }
    @media screen and (max-width: 768px) {
      padding: 81px 0px 0px;
    }
    @media screen and (max-width: 600px) {
      padding: 58px 0px 0px;
    }
  }
`;
const VideoContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterRow};
  gap: 24px;
  @media screen and (max-width: 1280px) {
    gap: 20px;
  }
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
  @media screen and (max-width: 600px) {
    ${({ theme }) => theme.common.flexCenterColumn};
  }
`;
const ModalImage = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  &:hover {
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const VideoSection = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  overflow: hidden;
  @media screen and (max-width: 600px) {
    &:first-child {
      margin-bottom: 40px;
    }
    &:last-child {
      margin-top: 40px;
    }
  }
`;
const Video = styled.div`
  position: relative;
  cursor: pointer;
  svg {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    @media screen and (max-width: 768px) {
      width: 20px;
      height: 20px;
      right: 7.9px;
      bottom: 7.9px;
    }
  }
  video {
    max-width: 100%;
  }
`;

// const VideoSection = styled.div``;

export default Optimization;
