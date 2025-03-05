import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PROJECTS_DATA } from "../data";
import { ProjectType } from "../types";
import Theme from "../utils/Theme";
import useWindowSize from "../utils/useWindowSize";

import Layout from "../components/Layout";
import Image from "../components/Image";
import Text from "../components/Text";
import Badge from "../components/Badge";
import Breadcrumb from "../components/Breadcrumb";
import ProjectsDisplayer from "../components/ProjectsDisplayer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0 24px;
  cursor: default;
`;

const ProjectPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const { colors, screens } = Theme;
  const isMobile = width <= screens.mobile;

  const data = PROJECTS_DATA.find((elem) => elem.slug === slug);

  const suggestSimilarProjects = (
    currentProject: ProjectType,
    allProjects: ProjectType[]
  ): ProjectType[] => {
    const otherProjects = allProjects.filter(
      (project) => project.title !== currentProject.title
    );

    const projectSimilarities = otherProjects.map((project) => ({
      project,
      commonStackElements:
        project.stack &&
        project.stack.filter(
          (tech) => currentProject.stack && currentProject.stack.includes(tech)
        ).length,
    }));

    return projectSimilarities
      .sort((a, b) => {
        if (b.commonStackElements !== a.commonStackElements) {
          if (a.commonStackElements && b.commonStackElements) {
            return b.commonStackElements - a.commonStackElements;
          }
        }

        return (
          new Date(b.project.date).getTime() -
          new Date(a.project.date).getTime()
        );
      })
      .map((item) => item.project);
  };

  useEffect(() => {
    if (!data) {
      navigate("/projets");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Container>
        <Breadcrumb />

        <Image
          src={`${process.env.PUBLIC_URL}/${data?.cover ?? ""}`}
          alt={data?.title ?? ""}
          height={280}
          style={{ margin: "24px 0 0" }}
        />

        <Text fontSize="font12" color="grey" style={{ marginBottom: 24 }}>
          Publié le{" "}
          {new Date(data?.date ?? "").toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Text>

        <Text
          as="h1"
          fontFamily="Space Grotesk"
          fontSize="font24"
          fontWeight={600}
        >
          {data?.title}
        </Text>

        <BadgeWrapper>
          {data?.stack &&
            data.stack.map((elem: string, index: number) => (
              <Badge key={`elem-${index}`}>{elem}</Badge>
            ))}
        </BadgeWrapper>

        <Text
          fontSize="font16"
          fontWeight={500}
          textAlign="justify"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        />

        {data?.websiteUrl && (
          <Text
            as="a"
            href={data.websiteUrl}
            target="_blank"
            rel="noreferrer"
            fontSize="font16"
            fontWeight={500}
            color="white"
            style={{
              padding: "12px 24px",
              background: colors.black,
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              width: isMobile ? "100%" : "max-content",
              margin: isMobile ? "32px 0 0" : "32px auto 0",
            }}
          >
            <Image
              src={`${process.env.PUBLIC_URL}/assets/icons/link.svg`}
              alt=""
              width={16}
            />
            Site web
          </Text>
        )}

        {data && (
          <ProjectsDisplayer
            title="Découvrez mes autres projets"
            titleAs="h2"
            titleStyle={{ margin: "60px 0 0" }}
            projects={suggestSimilarProjects(data, PROJECTS_DATA)
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .slice(0, 3)}
          />
        )}
      </Container>
    </Layout>
  );
};

export default ProjectPage;
