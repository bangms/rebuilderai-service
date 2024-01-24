import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import LogoIcon from "../assets/images/ic_logo.svg";
import LocaleIcon from "../assets/images/ic_locale.svg";
import HamburgerIcon from "../assets/images/ic_hamburger.svg";
import HamburgerIconOff from "../assets/images/ic_hamburger_off.svg";
import TopBtn from "../assets/images/ic_topsvg.svg";
import { Context } from "../Contexts";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const context = useContext(Context);
  const { scrollY, scrollYProgress } = useScroll();
  const [dropDownOnOff, setDropDownOnOff] = useState(true);
  const [svgColor, setSvgColor] = useState("#fff");
  const [scrolling, setScrolling] = useState(false);
  const isPc = useMediaQuery({
    query: "(min-width:769px)",
  });
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
  const colorValue = useTransform(
    scrollY,
    [0, 375, 376],
    ["#000", "#000", "#fff"]
  );
  const txtColorValue = useTransform(
    scrollY,
    [0, 375, 376],
    ["#fff", "#fff", "#000"]
  );

  const handleScroll = () => {
    const scrollYValue = scrollY.get();
    if (scrollYValue > 375) {
      setSvgColor("#000");
    } else {
      setSvgColor("#fff");
    }

    // 스크롤 위치에 따라 버튼 보이기/숨기기 처리
    if (scrollYValue > window.innerHeight / 2) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트되면 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 페이지 상단으로 스크롤
  };
  const scrollToTopVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };
  const isMobile = useMediaQuery({
    query: "(max-width:600px)",
  });

  return (
    <>
      <Wrapper
        option={context.state.option}
        style={{ background: colorValue, display: displayValue }}
      >
        <MenuContainer>
          <BtnList>
            <LogoBtn href="https://rebuilderai.com" aria-label="Go to HomePage">
              {/* <LogoIcon style={{ fill: colorValue }} /> */}
              <LogoIcon fill={svgColor} />
            </LogoBtn>
            {isPc ? (
              <>
                <MenuUl>
                  <MenuLi>
                    <motion.a href="#" style={{ color: txtColorValue }}>
                      Service
                    </motion.a>
                  </MenuLi>
                  <MenuLi>
                    <motion.a href="#" style={{ color: txtColorValue }}>
                      Technology
                    </motion.a>
                    <SubMenuUl
                      style={{ background: colorValue, color: txtColorValue }}
                      option={context.state.option}
                    >
                      <SubMenuLi>광원추론</SubMenuLi>
                      <SubMenuLi>재질추론</SubMenuLi>
                      <SubMenuLi>실측크기</SubMenuLi>
                      <SubMenuLi>3D 공간 영상</SubMenuLi>
                    </SubMenuUl>
                  </MenuLi>
                  <MenuLi>
                    <motion.a href="#" style={{ color: txtColorValue }}>
                      About
                    </motion.a>
                  </MenuLi>
                  <MenuLi>
                    <motion.a href="#" style={{ color: txtColorValue }}>
                      Contact
                    </motion.a>
                  </MenuLi>
                </MenuUl>
                <LocaleContainer>
                  <LocaleBtn>
                    <LocaleIcon fill={svgColor} />
                  </LocaleBtn>
                  <ToolTip>
                    <LocaleButton
                      lang={context.state.lang === "KOR"}
                      onClick={() => {
                        context.dispatch({
                          type: "SET_LOCALE",
                          lang: "KOR",
                        });
                      }}
                    >
                      KOR
                    </LocaleButton>
                    <LocaleButton
                      lang={context.state.lang === "ENG"}
                      onClick={() => {
                        context.dispatch({
                          type: "SET_LOCALE",
                          lang: "ENG",
                        });
                      }}
                    >
                      ENG
                    </LocaleButton>
                  </ToolTip>
                </LocaleContainer>
              </>
            ) : (
              <>
                <HIconContainer
                  option={context.state.option}
                  onClick={() => {
                    setDropDownOnOff(!dropDownOnOff);
                  }}
                >
                  {dropDownOnOff ? (
                    <HamburgerIconOff fill={svgColor} />
                  ) : (
                    <HamburgerIcon fill={svgColor} />
                  )}
                  {dropDownOnOff && (
                    <HMenuContainer style={{ background: colorValue }}>
                      <HMenuEl option={context.state.option}>
                        <motion.span style={{ color: txtColorValue }}>
                          Service
                        </motion.span>
                        Service
                      </HMenuEl>
                      <HMenuEl option={context.state.option}>
                        <motion.span style={{ color: txtColorValue }}>
                          Technology
                        </motion.span>
                      </HMenuEl>
                      <HMenuEl option={context.state.option}>
                        <motion.span style={{ color: txtColorValue }}>
                          About
                        </motion.span>
                      </HMenuEl>
                      <HMenuEl option={context.state.option}>
                        <motion.span style={{ color: txtColorValue }}>
                          Contact
                        </motion.span>
                      </HMenuEl>
                      <HMenuEl
                        style={{ color: txtColorValue }}
                        option={context.state.option}
                      >
                        <HLocaleContainer>
                          <HLocaleButton
                            style={{ color: txtColorValue }}
                            lang={context.state.lang === "KOR"}
                            onClick={() => {
                              context.dispatch({
                                type: "SET_LOCALE",
                                lang: "KOR",
                              });
                            }}
                          >
                            KOR
                          </HLocaleButton>
                          <hr />
                          <HLocaleButton
                            style={{ color: txtColorValue }}
                            option={context.state.option}
                            lang={context.state.lang === "KOR"}
                            onClick={() => {
                              context.dispatch({
                                type: "SET_LOCALE",
                                lang: "ENG",
                              });
                            }}
                          >
                            ENG
                          </HLocaleButton>
                        </HLocaleContainer>
                      </HMenuEl>
                    </HMenuContainer>
                  )}
                </HIconContainer>
              </>
            )}
          </BtnList>
        </MenuContainer>
      </Wrapper>
      {scrolling && isMobile && (
        <ScrollToTopButton
          variants={scrollToTopVariants}
          initial="hidden"
          animate="visible"
          onClick={scrollToTop}
        >
          <TopBtn />
        </ScrollToTopButton>
      )}
    </>
  );
};

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 94px;
  ${(props) => (props.lang ? "#fff" : "rgb(111, 117, 123)")};
  background: #000;

  z-index: 9999;
  ${({ theme }) => theme.common.flexCenter};
  ${(props) =>
    props.option !== "hide" && (({ theme }) => theme.common.fixedTop)};
  transition: all 0.2s ease-in-out 0s;
  @media screen and (max-width: 768px) {
    height: 64px;
  }
`;
const MenuContainer = styled.div`
  ${({ theme }) => theme.common.ContainerDiv};
`;
const BtnList = styled.div`
  height: 100%;
  ${({ theme }) => theme.common.flexCenterRow};
`;
const LogoBtn = styled.a`
  display: block;
  height: 100%;
  width: fit-content;
  ${({ theme }) => theme.common.flexCenter};
`;
const SubMenuUl = styled(motion.ul)`
  position: fixed;
  width: 100%;
  left: 50%;
  top: 60px;
  background: #000;
  height: 114px;
  transform: translateX(-50%);
  display: none;
  align-items: center;
  justify-content: center;
  gap: 40px;
  color: #000;

  &:hover {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    top: 84px;
  }
`;
const MenuLi = styled(motion.li)`
  margin-right: 46px;

  &:last-child {
    margin-right: 0;
  }
  a {
    position: relative;
    display: block;
    color: #000;
    text-decoration: none;
    transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
    font-size: 2rem;
    font-weight: 500;
  }
  & a:after {
    ${({ theme }) => theme.common.lineAnimation};
  }

  &:nth-child(2) a:hover + ${SubMenuUl} {
    display: flex;
  }
  & a:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const SubMenuLi = styled.li`
  position: relative;
  width: fit-content;
  font-weight: 400;
  font-size: 2rem;
  line-height: 24px;
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;

  &:hover {
    display: flex;
  }
  &:after {
    ${({ theme }) => theme.common.lineAnimation};
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
const MenuUl = styled.ul`
  ${({ theme }) => theme.common.flexCenterRow};
`;
const ToolTip = styled.div`
  opacity: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 133ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transform-origin: center top;
  margin-top: 4px;
  min-width: 80px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 12px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: 14px 0;
  background: ${({ theme }) => theme.colors.white};
  &:hover {
    opacity: 1;
  }
`;
const LocaleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 32px;
  text-align: center;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 20px;
  cursor: pointer;
  color: ${(props) => (props.lang ? "#000" : "rgb(111, 117, 123)")};
  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
  }
`;
const LocaleBtn = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  position:relative;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
  &:hover > svg {
    fill: ${({ theme }) => theme.colors.gray};
  }
  &:hover + ${ToolTip} {
    opacity: 1;
  }
  span {
    display: block;
    width: 20px;
    height: 20px;
  }
  span:after {
    display:block
    width: 20px;
    height: 20px;
  }
  border-radius: 4px;
  ${({ theme }) => theme.common.flexCenter};
`;
const LocaleContainer = styled.div`
  z-index: 1500;
  position: relative;
`;
const HIconContainer = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  ${({ theme }) => theme.common.flexCenter};
`;
const HMenuContainer = styled(motion.div)`
  width: 100%;
  position: absolute;
  top: 64px;
  left: 0;
  ${({ theme }) => theme.common.flexCenterColumn};
  align-items: flex-start;
  gap: 32px;
  padding: 32px 60px;
  background: #000;
  @media screen and (max-width: 600px) {
    padding: 32px 20px;
  }
`;
const HMenuEl = styled(motion.div)`
  width: 100vw;
  ${({ theme }) => theme.common.flexCenter};
  justify-content: space-between;
  transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  & span {
    z-index: 2;
    ${({ theme }) => theme.common.mobileTxt};
    color: #000;
    font-weight: 500;
  }
  &:after {
    background: ${(props) =>
      props.option === "black" ? "rgb(20, 20, 20)" : "rgb(246, 247, 248)"};
    display: block;
    content: "";
    position: absolute;
    left: 0;
    width: 100vw;
    height: 51px;
    transform-origin: 0px 0px;
    ${({ theme }) => theme.common.transition};
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0px 0px;
    backface-visibility: hidden;
  }
  @media screen and (max-width: 600px) {
    left: -20px;
  }
`;
const HLocaleContainer = styled.div`
  display: flex;
  hr {
    border-width: 0px thin 0px 0px;
    border-color: rgba(0, 0, 0, 0.12);
    margin: 3px 8px;
    height: 12px;
    background-color: rgb(111, 117, 123);
    z-index: 10;
  }
`;
const HLocaleButton = styled.div`
  ${({ theme }) => theme.common.mobileTxt};
  font-weight: 600;
  z-index: 10;
  color: ${(props) => !props.lang && "#6F757B"};
`;
const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(230, 232, 235);
  border-radius: 50%;
  cursor: pointer;
  filter: drop-shadow(rgba(0, 0, 0, 0.12) 0px 4px 12px);
  z-index: 1200;
`;
export default Header;
