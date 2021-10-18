import styled from "styled-components";

import { theme } from "core/Theme";
import { lessThan, useInnerWidth } from "utils";

import { TitleWithLines } from "components/atoms";

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

const ProjectsZone: React.FC = () => {
  const innerWidth = useInnerWidth();
  const IS_MOBILE_DEVICE = innerWidth <= screens.mobile;

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
    </Container>
  );
};

export default ProjectsZone;
