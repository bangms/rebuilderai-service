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

  const [dropDownOnOff, setDropDownOnOff] = useState(false);

  // useEffect(() => {
  //   console.log(dropDownOnOff);
  // }, [dropDownOnOff]);

  return (
    <>
      <Wrapper>
        <MenuContainer>
          <BtnList>
            <LogoBtn href="https://rebuilderai.com" aria-label="Go to HomePage">
              <LogoIcon fill="#fff" />
            </LogoBtn>
            {isPc ? (
              <>
                <MenuUl>
                  <MenuLi>
                    <a href="#">Service</a>
                  </MenuLi>
                  <MenuLi>
                    <a href="#">Technology</a>
                    <SubMenuUl>
                      <SubMenuLi class="sc-cmaqmh bLBBOs">광원추론</SubMenuLi>
                      <SubMenuLi class="sc-cmaqmh bLBBOs">재질추론</SubMenuLi>
                      <SubMenuLi class="sc-cmaqmh bLBBOs">실측크기</SubMenuLi>
                      <SubMenuLi class="sc-cmaqmh bLBBOs">
                        3D 공간 영상
                      </SubMenuLi>
                    </SubMenuUl>
                  </MenuLi>
                  <MenuLi>
                    <a href="#">About</a>
                  </MenuLi>
                  <MenuLi>
                    <a href="#">Contact</a>
                  </MenuLi>
                </MenuUl>
                <LocalContainer>
                  <LocalBtn>
                    <LocaleIcon />
                  </LocalBtn>
                  <ToolTip>
                    <LocalButton
                      long={context.state.lang === "KOR"}
                      onClick={() =>
                        context.dispatch({
                          type: "SET_LOCALE",
                          lang: "KOR",
                        })
                      }
                    >
                      KOR
                    </LocalButton>
                    <LocalButton
                      long={context.state.lang === "ENG"}
                      onClick={() =>
                        context.dispatch({
                          type: "SET_LOCALE",
                          lang: "ENG",
                        })
                      }
                    >
                      ENG
                    </LocalButton>
                  </ToolTip>
                </LocalContainer>
              </>
            ) : (
              <>
                <HIconContainer
                  onClick={() => {
                    setDropDownOnOff(!dropDownOnOff);
                  }}
                >
                  {dropDownOnOff ? (
                    <HamburgerIconOff fill="#fff" />
                  ) : (
                    <HamburgerIcon fill="#fff" />
                  )}
                  {dropDownOnOff && (
                    <HMenuContainer>
                      <HMenuEl>Service</HMenuEl>
                      <HMenuEl>Technology</HMenuEl>
                      <HMenuEl>About</HMenuEl>
                      <HMenuEl>Contact</HMenuEl>
                      <HMenuEl>
                        <div
                          onClick={() =>
                            context.dispatch({
                              type: "SET_LOCALE",
                              lang: "KOR",
                            })
                          }
                        >
                          KOR
                        </div>
                        <div
                          onClick={() =>
                            context.dispatch({
                              type: "SET_LOCALE",
                              lang: "ENG",
                            })
                          }
                        >
                          ENG
                        </div>
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
  background: ${({ theme }) => theme.colors.black};
  z-index: 9999;
  ${({ theme }) => theme.common.flexCenter};
  ${({ theme }) => theme.common.fixedTop};

  transition: all 0.2s ease-in-out 0s;
  @media screen and (max-width: 768px) {
    height: 64px;
  }
`;
const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  position: relative;

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 60px;
  }
  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
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
  /* top: 114px; */
  height: 114px;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  gap: 40px;
  color: ${({ theme }) => theme.colors.white};

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
    color: ${({ theme }) => theme.colors.white};
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
  margin-top: 14px;
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
`;
const LocalButton = styled.div`
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
  color: ${(props) => (props.long ? "#000" : "rgb(111, 117, 123)")};
  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
  }
`;
const LocalBtn = styled.div`
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
const LocalContainer = styled.div`
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
  padding: 32px 60px 0;
  @media screen and (max-width: 600px) {
    padding: 32px 20px 0;
  }
`;
const HMenuEl = styled.div`
  width: 100vw;
  ${({ theme }) => theme.common.flexCenter};
  justify-content: space-between;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  &:after {
    background: rgb(20, 20, 20);
    display: block;
    content: "";
    position: absolute;
    left: 0;
    width: 100vw;
    height: 51px;
    transform-origin: 0px 0px;
    ${({ theme }) => theme.common.transition};
    z-index: -1;
  }
  &:hover {
    font-weight: 700;
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
const HLocalButton = styled.div``;

export default Header;
