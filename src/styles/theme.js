const theme = {
  // ${({ theme }) => theme.colors.컬러이름};
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    // Header
    gray: "#6F757B",
    lightGray: "#F6F7F8",
    // Optimization
    deselect: "#bdc1c7",
  },
  fonts: {
    // 최적화
    //big
    font48: "font-size: 4.8rem",
    font44: "font-size: 4.4rem",
    font26: "font-size: 2.6rem",
    font24: "font-size: 2.4rem",
    font22: "font-size: 2.2rem",
    // pc
    font36: "font-size: 3.6rem",
    font20: "font-size: 2rem",

    // tablet
    font18: "font-size: 1.8rem",
    font16: "font-size: 1.6rem",
    font14: "font-size: 1.4rem",
    font13: "font-size: 1.3rem",
    // rgb(189, 193, 199)

    // 아이템
    //아이템 모바일
  },
  common: {
    ContainerDiv: `
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 30px;
    @media screen and (min-width: 1200px) {
      max-width: 1200px;
    }
    @media screen and (max-width: 768px) {
      padding: 0 60px;
    }
    @media screen and (max-width: 600px) {
      padding: 0 20px;
    }`,
    flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    flexCenterColumn: `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    flexCenterRow: `
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `,
    fixedTop: `
      position: fixed;
      top: 0;
    `,
    lineAnimation: `
    position: absolute;
    content: "";
    top: 100%;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: rgb(23, 60, 254);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
    `,
    transition: `
      transform: scaleX(0);
      transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
    `,
    mobileTxt: `
    font-size: 16px;
    line-height: 19px;
    `,
  },
};

export default theme;
