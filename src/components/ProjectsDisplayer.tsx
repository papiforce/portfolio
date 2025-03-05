import { CSSProperties } from "react";
import styled from "styled-components";

import { ProjectType } from "../types";
import Theme from "../utils/Theme";
import useWindowSize from "../utils/useWindowSize";

import Text from "./Text";
import ProjectCard from "./ProjectCard";

type ProjectsDisplayerProps = {
  projects: ProjectType[];
  title?: string;
  titleAs?: string;
  titleStyle?: CSSProperties;
  buttonLabel?: string;
  buttonUrl?: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProjectsDisplayer = ({
  projects,
  title,
  titleAs = "h1",
  titleStyle,
  buttonLabel,
  buttonUrl,
}: ProjectsDisplayerProps) => {
  const { width } = useWindowSize();
  const { colors, screens } = Theme;
  const isTablet = width <= screens.tablet;

  return (
    <Container>
      {title && (
        <Text
          as={titleAs}
          fontFamily="Space Grotesk"
          fontSize="font24"
          fontWeight={600}
          style={titleStyle}
        >
          {title}
        </Text>
      )}

      {projects.map((project: any, index: number) => (
        <ProjectCard
          key={`${project.title}-${index}`}
          slug={`${process.env.PUBLIC_URL}/projets/${project.slug}`}
          imgSrc={project.cardCover}
          title={project.title}
          stack={project.stack}
          date={project.date}
        />
      ))}

      {buttonLabel && (
        <Text
          as="a"
          href={buttonUrl}
          fontSize="font16"
          fontWeight={500}
          color="white"
          textAlign="center"
          style={{
            padding: "12px 24px",
            background: colors.black,
            borderRadius: 8,
            width: isTablet ? "100%" : "max-content",
            margin: isTablet ? "32px 0 0" : "40px auto 0",
          }}
        >
          {buttonLabel}
        </Text>
      )}
    </Container>
  );
};

export default ProjectsDisplayer;
