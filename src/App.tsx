import { ThemeProvider } from "styled-components";

import { theme } from "core/Theme";

import { HomeBanner } from "components/molecules";

const Portfolio: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeBanner />
    </ThemeProvider>
  );
};

export default Portfolio;
