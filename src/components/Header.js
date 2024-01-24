import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import LogoIcon from "../assets/images/ic_logo.svg";
import LocaleIcon from "../assets/images/ic_locale.svg";
import HamburgerIcon from "../assets/images/ic_hamburger.svg";
import HamburgerIconOff from "../assets/images/ic_hamburger_off.svg";
import { Context } from "../Contexts";

const Header = () => {
  const context = useContext(Context);
  const isPc = useMediaQuery({
    query: "(min-width:769px)",
  });

  const [dropDownOnOff, setDropDownOnOff] = useState(true);

  useEffect(() => {
    console.log("지금은 ", context.state.option);
  }, [context.state.option]);
  return (
    <>
      <Wrapper option={context.state.option}>
        <MenuContainer>
          <BtnList>
            <LogoBtn href="https://rebuilderai.com" aria-label="Go to HomePage">
              <LogoIcon
                fill={context.state.option === "white" ? "#000" : "#fff"}
              />
            </LogoBtn>
            {isPc ? (
              <>
                <MenuUl>
                  <MenuLi option={context.state.option}>
                    <a href="#">Service</a>
                  </MenuLi>
                  <MenuLi option={context.state.option}>
                    <a href="#">Technology</a>
                    <SubMenuUl option={context.state.option}>
                      <SubMenuLi>광원추론</SubMenuLi>
                      <SubMenuLi>재질추론</SubMenuLi>
                      <SubMenuLi>실측크기</SubMenuLi>
                      <SubMenuLi>3D 공간 영상</SubMenuLi>
                    </SubMenuUl>
                  </MenuLi>
                  <MenuLi option={context.state.option}>
                    <a href="#">About</a>
                  </MenuLi>
                  <MenuLi option={context.state.option}>
                    <a href="#">Contact</a>
                  </MenuLi>
                </MenuUl>
                <LocaleContainer>
                  <LocaleBtn>
                    <LocaleIcon
                      fill={context.state.option === "white" ? "#000" : "#fff"}
                    />
                  </LocaleBtn>
                  <ToolTip>
                    <LocaleButton
                      lang={context.state.lang === "KOR"}
                      onClick={() =>
                        context.dispatch({
                          type: "SET_LOCALE",
                          lang: "KOR",
                        })
                      }
                    >
                      KOR
                    </LocaleButton>
                    <LocaleButton
                      lang={context.state.lang === "ENG"}
                      onClick={() =>
                        context.dispatch({
                          type: "SET_LOCALE",
                          lang: "ENG",
                        })
                      }
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
                    <HamburgerIconOff
                      fill={context.state.option === "white" ? "#000" : "#fff"}
                    />
                  ) : (
                    <HamburgerIcon
                      fill={context.state.option === "white" ? "#000" : "#fff"}
                    />
                  )}
                  {dropDownOnOff && (
                    <HMenuContainer option={context.state.option}>
                      <HMenuEl option={context.state.option}>
                        <span>Service</span>Service
                      </HMenuEl>
                      <HMenuEl option={context.state.option}>
                        <span>Technology</span>
                      </HMenuEl>
                      <HMenuEl option={context.state.option}>
                        <span>About</span>
                      </HMenuEl>
                      <HMenuEl option={context.state.option}>
                        <span>Contact</span>
                      </HMenuEl>
                      <HMenuEl option={context.state.option}>
                        <HLocaleContainer>
                          <HLocaleButton
                            lang={context.state.lang === "KOR"}
                            onClick={() =>
                              context.dispatch({
                                type: "SET_LOCALE",
                                lang: "KOR",
                              })
                            }
                          >
                            KOR
                          </HLocaleButton>
                          <hr />
                          <HLocaleButton
                            option={context.state.option}
                            lang={context.state.lang === "KOR"}
                            onClick={() =>
                              context.dispatch({
                                type: "SET_LOCALE",
                                lang: "ENG",
                              })
                            }
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
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 94px;
  ${(props) => (props.lang ? "#fff" : "rgb(111, 117, 123)")};
  background: ${(props) =>
    props.option === "black"
      ? ({ theme }) => theme.colors.black
      : ({ theme }) => theme.colors.white};

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
const SubMenuUl = styled.ul`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 60px;
  background: ${(props) =>
    props.option === "black"
      ? ({ theme }) => theme.colors.black
      : ({ theme }) => theme.colors.white};
  height: 114px;
  transform: translateX(-50%);
  display: none;
  align-items: center;
  justify-content: center;
  gap: 40px;
  color: ${(props) =>
    props.option === "black"
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.black};

  &:hover {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    top: 84px;
  }
`;
const MenuLi = styled.li`
  margin-right: 46px;

  &:last-child {
    margin-right: 0;
  }
  a {
    position: relative;
    display: block;
    color: ${(props) =>
      props.option === "black"
        ? ({ theme }) => theme.colors.white
        : ({ theme }) => theme.colors.black};
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
const HMenuContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 64px;
  left: 0;
  ${({ theme }) => theme.common.flexCenterColumn};
  align-items: flex-start;
  gap: 32px;
  padding: 32px 60px;
  background: ${(props) =>
    props.option === "black"
      ? ({ theme }) => theme.colors.black
      : ({ theme }) => theme.colors.white};
  @media screen and (max-width: 600px) {
    padding: 32px 20px;
  }
`;
const HMenuEl = styled.div`
  width: 100vw;
  ${({ theme }) => theme.common.flexCenter};
  justify-content: space-between;
  transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  & span {
    z-index: 2;
    ${({ theme }) => theme.common.mobileTxt};
    color: ${(props) =>
      props.option === "black"
        ? ({ theme }) => theme.colors.white
        : ({ theme }) => theme.colors.black};
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
  color: ${(props) =>
    props.lang
      ? props.option === "black"
        ? ({ theme }) => theme.colors.white
        : ({ theme }) => theme.colors.black
      : ({ theme }) => theme.colors.gray};
`;

export default Header;
