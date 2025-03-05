type Screens = {
  smallMobile: number;
  mobile: number;
  tablet: number;
  smallDesktop: number;
  desktop: number;
  maxDesktop: number;
};

type FontSize = {
  font12: string;
  font14: string;
  font16: string;
  font18: string;
  font20: string;
  font24: string;
  font32: string;
  from20to14: string;
  from20to16: string;
  from24to14: string;
  from24to20: string;
  from32to18: string;
  from34to16: string;
  from34to24: string;
  from40to24: string;
  from40to30: string;
  from56to32: string;
  from100to52: string;
};

type Colors = {
  primary: string;
  secondary: string;
  white: string;
  black: string;
  grey: string;
  green: string;
  orange: string;
};

export type ThemeType = {
  screens: Screens;
  fontSize: FontSize;
  colors: Colors;
};

export type StackType = {
  front: { icon: string; label: string }[];
  back: { icon: string; label: string }[];
  other: { icon?: string; label: string }[];
};

type SpotifyType = {
  url: string;
  title: string;
  artist: string;
};

export type AvailabilityType = "NOW" | "SOON" | "BUSY";

export type SettingsType = {
  stack: StackType;
  spotify: SpotifyType;
  availability: AvailabilityType;
};

export type ProjectType = {
  date: string;
  type: "PRO" | "PERSO";
  slug: string;
  title: string;
  description: string;
  cover: string;
  cardCover: string;
  images?: string[];
  stack?: string[];
  githubUrl?: string[];
  websiteUrl?: string;
};
