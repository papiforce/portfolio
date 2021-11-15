import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { theme } from "core/Theme";
import { lessThan, useInnerWidth } from "utils";
import { ThemeMode } from "global";

import { Menu, Navbar } from "components/molecules";
import {
  ContactZone,
  InfosZone,
  ProjectsZone,
  SkillsZone,
} from "components/organisms";

const { screens, spacing } = theme;

const Layout = styled.div`
  ${({ theme: { spacing } }) => `
    padding: 0 ${spacing.five};
    ${lessThan("mobile")(`
      padding: 0 ${spacing.two};
    `)}
  `}
`;

const Portfolio: React.FC = () => {
  const innerWidth = useInnerWidth();
  const IS_MOBILE_DEVICE = innerWidth <= screens.mobile;

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [themeMode, setThemeMode] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );

  const MENU_ITEMS = [
    { iconName: "fas fa-info", title: "Informations" },
    { iconName: "far fa-chart-bar", title: "Compétences" },
    { iconName: "fas fa-project-diagram", title: "Projets" },
    { iconName: "fas fa-comment", title: "Contact" },
  ];

  const displayZone = (page: number, mode: ThemeMode) => {
    switch (page) {
      case 1:
        return <SkillsZone mode={mode} />;
      case 2:
        return <ProjectsZone mode={mode} />;
      case 3:
        return <ContactZone mode={mode} />;
      default:
        return <InfosZone mode={mode} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar onThemeChange={(mode) => setThemeMode(mode)} />
      <Layout>
        <Menu
          list={MENU_ITEMS}
          mode={themeMode}
          onClick={(index) => setCurrentPage(index)}
          style={{
            marginBottom: IS_MOBILE_DEVICE ? spacing.four : spacing.five,
          }}
        />
        {displayZone(currentPage, themeMode as ThemeMode)}
      </Layout>
    </ThemeProvider>
  );
};

export default Portfolio;
