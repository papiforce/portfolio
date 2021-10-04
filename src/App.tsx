import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { theme } from "core/Theme";

import { Menu, Navbar } from "components/molecules";
import { ContactZone } from "components/organisms";

const { spacing } = theme;

const Layout = styled.div`
  ${({ theme: { spacing } }) => `
    padding: 0 ${spacing.five};
  `}
`;

const Portfolio: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const MENU_ITEMS = [
    { iconName: "fas fa-info", title: "Informations" },
    { iconName: "far fa-chart-bar", title: "Compétences" },
    { iconName: "fas fa-project-diagram", title: "Projets" },
    { iconName: "fas fa-comment", title: "Contact" },
  ];

  const displayZone = (page: number) => {
    switch (page) {
      case 3:
        return <ContactZone />;
      default:
        <></>;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Layout>
        <Menu
          list={MENU_ITEMS}
          onClick={(index) => setCurrentPage(index)}
          style={{ marginBottom: spacing.five }}
        />
        {displayZone(currentPage)}
      </Layout>
    </ThemeProvider>
  );
};

export default Portfolio;
