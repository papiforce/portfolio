import { ThemeType } from "../types";

const Theme: ThemeType = {
  screens: {
    smallMobile: 375,
    mobile: 480,
    tablet: 768,
    smallDesktop: 1024,
    desktop: 1280,
    maxDesktop: 1440,
  },
  fontSize: {
    font12: "12px",
    font14: "14px",
    font16: "16px",
    font18: "18px",
    font20: "20px",
    font24: "24px",
    font32: "32px",
    from20to14: "clamp(0.875rem, 3vw, 1.25rem)",
    from20to16: "clamp(1rem, 2vw, 1.25rem)",
    from24to14: "clamp(0.875rem, 3vw, 1.5rem)",
    from24to20: "clamp(1.25rem, 1vw + 0.9rem, 1.5rem)",
    from32to18: "clamp(1.125rem, 3vw, 2rem)",
    from34to16: "clamp(1rem, 3vw, 2.125rem)",
    from34to24: "clamp(1.5rem, 2vw + 0.7rem, 1.875rem)",
    from40to24: "clamp(1.5rem, 5vw, 2.5rem)",
    from40to30: "clamp(1.875rem, 5vw, 2.5rem)",
    from56to32: "clamp(2rem, 6vw, 3.5rem)",
    from100to52: "clamp(3.25rem, 10vw, 6.25rem)",
  },
  colors: {
    primary: "#4682B4",
    secondary: "#880808",
    white: "#FFFFFF",
    black: "#000000",
    grey: "#6b7280",
    green: "#1DB954",
    orange: "#FF7F00",
  },
};

export default Theme;
