import styled from "styled-components";

import { SETTINGS_DATA, PROJECTS_DATA } from "../data";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SpotifyCard from "../components/SpotifyCard";
import AvailabilityCard from "../components/AvailabilityCard";
import ProjectsDisplayer from "../components/ProjectsDisplayer";
import StackDisplayer from "../components/StackDisplayer";

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
  margin: 80px 0;
`;

const HomePage = () => {
  const { stack, spotify, availability } = SETTINGS_DATA;

  return (
    <Layout>
      <Hero />

      <StackDisplayer
        title="Mes compétences"
        titleAs="h2"
        titleStyle={{ margin: "80px 0 24px" }}
        stack={stack}
      />

      <CardsWrapper>
        <SpotifyCard {...spotify} />
        <AvailabilityCard type={availability} />
      </CardsWrapper>

      <ProjectsDisplayer
        title="Mes derniers projets"
        titleAs="h2"
        titleStyle={{ marginBottom: 16 }}
        projects={PROJECTS_DATA.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ).slice(0, 3)}
        buttonLabel="Voir les projets"
        buttonUrl="/projets"
      />
    </Layout>
  );
};

export default HomePage;
