const primary: string = "#77ACA2";
const primaryHover: string = "#093A3E";
const primaryActive: string = "#001011";

const blue: string = "#587792";
const blueAlt: string = "#1B2028";
const blueHover: string = "#7ca1b8";
const blueDark: string = "#020202";

const white: string = "#ffffff";
const white100: string = "#F4F4ED";

const grey: string = "#D5D5D0";
const grey100: string = "#B2B2B0";
const grey200: string = "#2c2f33";

const black: string = "#000000";

const green: string = "#B2D335";

const yellow: string = "#FFC107";

const orange: string = "#FF9F43";

const red: string = "#F08080";
const redHover: string = "#CD5C5C";
const redDark: string = "#8B0000";

const glass: string = "rgba(255, 255, 255, .15)";
const glassDisable: string = "rgba(255, 255, 255, .35)";

export const theme = {
  screens: {
    smallMobile: 374,
    mobile: 480,
    tablet: 769,
    smallDesktop: 1024,
    specialScreen: 1120,
    desktop: 1200,
    maxDesktop: 1440,
  },
  colors: {
    primary: primary,
    primaryHover: primaryHover,
    primaryActive: primaryActive,

    blue: blue,
    blueAlt: blueAlt,
    blueHover: blueHover,
    blueDark: blueDark,

    white: white,
    white100: white100,

    grey: grey,
    grey100: grey100,
    grey200: grey200,

    black: black,

    green: green,

    yellow: yellow,

    orange: orange,

    red: red,
    redHover: redHover,
    redDark: redDark,

    glass: glass,
  },
  spacing: {
    zero: "4px",
    one: "8px",
    two: "16px",
    three: "24px",
    four: "32px",
    five: "40px",
    six: "48px",
    seven: "56px",
    eight: "64px",
    nine: "72px",
    ten: "80px",
    eleven: "88px",
    twelve: "96px",
    thirteen: "104px",
    fourteen: "112px",
    fifteen: "120px",
    sixteen: "128px",
  },
  fontSize: {
    extraSmall: "9px",
    semiSmall: "10px",
    small: "12px",
    medium: "14px",
    large: "16px",
    big: "18px",
    display5: "20px",
    display4: "22px",
    display3: "24px",
    display2: "26px",
    display1: "28px",
    display0: "30px",
    title5: "32px",
    title4: "34px",
    title3: "36px",
    title2: "38px",
    title1: "40px",
    title0: "42px",
    specialSubtitle1: "48px",
    specialTitle1: "80px",
    specialSubtitle0: "88px",
    specialTitle0: "120px",
  },
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    extremeBold: 900,
  },
  textAlign: {
    center: "center",
    left: "left",
    right: "right",
  },
  borderRadius: {
    none: "none",
    extraSmall: "4px",
    small: "8px",
    big: "16px",
    round: "24px",
    large: "32px",
    circle: "3.75em",
  },
  btnColor: {
    primary: {
      bg: primary,
      hover: primaryHover,
      active: primaryActive,
      disableBg: grey100,
    },
    blueHover: {
      bg: blueHover,
      hover: white,
      active: grey,
      disableBg: grey100,
    },
    glass: {
      bg: glass,
      hover: glassDisable,
      active: glass,
      disableBg: glassDisable,
    },
  },
  inpColor: {
    white: {
      background: white,
      borderFocus: black,
      color: black,
    },
    blueAlt: {
      background: blueAlt,
      borderFocus: blue,
      color: white,
    },
  },
  inpStyle: {
    small: {
      padding: "6px 16px",
      borderRadius: "16px",
    },
    smallRound: {
      padding: "6px 16px",
      borderRadius: "32px",
    },
    medium: {
      padding: "12px 16px",
      borderRadius: "16px",
    },
    mediumRound: {
      padding: "12px 16px",
      borderRadius: "32px",
    },
    big: {
      padding: "16px",
      borderRadius: "16px",
    },
    bigRound: {
      padding: "16px",
      borderRadius: "32px",
    },
  },
};
