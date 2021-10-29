import { useState } from "react";
import styled from "styled-components";

import { theme } from "core/Theme";
import { lessThan, useInnerWidth } from "utils";

import { Scanverse, Scanverse2 } from "assets/scanverse";
import { Koliving, Koliving2, Koliving3 } from "assets/koliving";
// import Kamunity from "assets/kamunity/kamunity.png";

import { TitleWithLines } from "components/atoms";
import { ProjectCard, ProjectModal } from "components/molecules";

const { screens, spacing } = theme;

const Container = styled.div`
  ${({ theme: { screens } }) => `
    max-width: ${screens.maxDesktop}px;
    ${lessThan("mobile")(`
      height: calc(100vh - 290px);
    `)}
  `}
  height: calc(100vh - 320px);
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  ${lessThan("tablet")(`
    padding-bottom: ${spacing.twenty};
  `)}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ProjectsZone: React.FC = () => {
  const innerWidth = useInnerWidth();
  const IS_MOBILE_DEVICE = innerWidth <= screens.mobile;

  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [modalContent, setModalContent] = useState<any>({
    name: "",
    images: [],
    technos: "",
    description: "",
  });

  const PROJECTS = [
    // {
    //   name: "Kamunity",
    //   images: [Kamunity],
    //   technos: "React, Typescript, styled-components",
    //   inDev: true,
    //   link: "http://kamunity.herokuapp.com/",
    //   description:
    //     "Refonte du site internet de l'association Kamunity dans le but de rendre service à un ami et ainsi contribuer indirectement au développement de Kamunity.",
    // },
    {
      name: "Koliving",
      images: [Koliving, Koliving2, Koliving3],
      technos: "React, Typescript, styled-components, Hooks, GraphQL",
      inDev: false,
      link: "https://koliving.fr/",
      description:
        "Participation à l'intégration des maquettes faites sur Figma, le développement du site s'est fait from scratch.",
    },
    {
      name: "Scanverse",
      images: [Scanverse, Scanverse2],
      technos: "React, Typescript & styled-components, Hooks",
      inDev: true,
      link: "https://scanverse.netlify.app/",
      description:
        "Plateforme permettant de noter sa progression dans la lecture de scans, elle a pour objectif de regrouper les mangas, les webtoons ainsi que les manwhas.",
    },
  ];

  return (
    <Container>
      <TitleWithLines
        fontSize={IS_MOBILE_DEVICE ? "display0" : "title0"}
        fontWeight="medium"
        style={{
          marginBottom: IS_MOBILE_DEVICE ? spacing.three : spacing.four,
        }}
      >
        Mes projets
      </TitleWithLines>
      <Wrapper>
        {PROJECTS.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              name={project.name}
              imgUrl={project.images[0]}
              onClick={() => {
                setIsHidden(false);
                setModalContent(
                  PROJECTS.find((elem) => elem.name === project.name)
                );
              }}
            />
          );
        })}
        <ProjectModal
          isHidden={isHidden}
          content={modalContent}
          onClose={() => setIsHidden(true)}
        />
      </Wrapper>
    </Container>
  );
};

export default ProjectsZone;
