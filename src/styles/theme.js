const theme = {
  // ${({ theme }) => theme.colors.컬러이름};
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    gray: "#6F757B",
    lightGray: "#F6F7F8",
  },
  common: {
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
