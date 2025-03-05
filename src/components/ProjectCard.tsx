import styled from "styled-components";

import { media } from "../utils/mediaQueries";
import Theme from "../utils/Theme";
import useWindowSize from "../utils/useWindowSize";

import Image from "./Image";
import Text from "./Text";

type ProjectCardProps = {
  slug: string;
  imgSrc: string;
  title: string;
  stack: string[];
  date: string;
};

const Container = styled.a`
  ${media(Theme).tablet} {
    flex-direction: column;
    align-items: normal;
    gap: 8px;
  }

  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  transition: box-shadow 0.3s;
  border-radius: 12px;

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const ContentWrapper = styled.div`
  ${media(Theme).mobile} {
    gap: 8px;
    flex-direction: column;
    align-items: normal;
    padding-right: 0;
  }

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding-right: 24px;
`;

const ProjectCard = ({
  slug,
  imgSrc,
  title,
  stack,
  date,
}: ProjectCardProps) => {
  const { width } = useWindowSize();
  const { screens } = Theme;
  const isSmallMobile = width <= screens.smallMobile;

  return (
    <Container href={slug}>
      <Image
        src={`${process.env.PUBLIC_URL}/${imgSrc}`}
        alt={title}
        width={width < 769 ? 744 : width > 480 ? 220 : 480}
        loading="lazy"
      />

      <ContentWrapper>
        <div>
          <Text fontFamily="Space Grotesk" fontSize="font18" fontWeight={500}>
            {title}
          </Text>
          <Text
            fontSize="font14"
            fontWeight={500}
            color="primary"
            isEllipsis
            style={{ width: isSmallMobile ? 350 : 375 }}
          >
            {stack.join(", ")}
          </Text>
        </div>

        <Text
          fontFamily="Space Grotesk"
          fontSize={width > 480 ? "font16" : "font14"}
          fontWeight={500}
          color="grey"
        >
          {new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Text>
      </ContentWrapper>
    </Container>
  );
};

export default ProjectCard;
