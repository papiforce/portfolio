import { ThemeType } from "../types";

const createMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = (theme: ThemeType) => ({
  smallMobile: createMediaQuery(theme.screens.smallMobile),
  mobile: createMediaQuery(theme.screens.mobile),
  tablet: createMediaQuery(theme.screens.tablet),
  smallDesktop: createMediaQuery(theme.screens.smallDesktop),
  desktop: createMediaQuery(theme.screens.desktop),
  maxDesktop: createMediaQuery(theme.screens.maxDesktop),
});
