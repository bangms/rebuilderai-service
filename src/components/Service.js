import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import { styled } from "styled-components";
import Slide from "./Slider";
// import serviceData from "../assets/data/service_list";
import serviceData from "../assets/data/service_list.json";
import { Context } from "../Contexts";
import ServiceItem from "./ServiceItem";

const Service = () => {
  const context = useContext(Context);

  return (
    <>
      <Wrapper>
        <Container>
          {context.state.lang === "KOR"
            ? serviceData.KOR.map((r, i) => <ServiceItem r={r} i={i} />)
            : serviceData.ENG.map((r, i) => <ServiceItem r={r} i={i} />)}
        </Container>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenterRow};
  justify-content: center;
`;
const Container = styled.div`
  ${({ theme }) => theme.common.ContainerDiv};
  padding-bottom: 325px;
  overflow: hidden;
`;

export default Service;
