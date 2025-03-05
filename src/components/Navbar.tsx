import { FC } from "react";
import styled from "styled-components";

import { media } from "../utils/mediaQueries";
import Theme from "../utils/Theme";
import useWindowSize from "../utils/useWindowSize";

import Text from "./Text";
import Image from "./Image";

const Container = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0px 2px 4px 0px rgba(185, 185, 185, 0.2);
  backdrop-filter: blur(4px);
`;

const Wrapper = styled.div`
  ${({ theme: { screens } }) => `
    max-width: ${screens.smallDesktop}px;
  `}

  ${media(Theme).tablet} {
    padding: 12px;
  }

  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 16px 24px;
`;

const Navbar: FC = () => {
  const { width } = useWindowSize();

  const isProjectsPage =
    window.location.href.split("/").splice(-1)[0] === "projets";

  return (
    <Container>
      <Wrapper>
        <Text
          as="a"
          href="/"
          fontFamily="Space Grotesk"
          fontSize="from24to20"
          fontWeight={600}
          color="black"
        >
          emmanuel@home: $
        </Text>

        <a href="/projets" style={{ marginLeft: "auto" }}>
          {width <= Theme.screens.mobile ? (
            <Image
              src={`${process.env.PUBLIC_URL}/assets/icons/${
                isProjectsPage ? "projects-active" : "projects"
              }.svg`}
              alt=""
              width={28}
              height={28}
              style={{ borderRadius: 0 }}
            />
          ) : (
            <Text
              fontFamily="Space Grotesk"
              fontSize="font18"
              fontWeight={500}
              color={isProjectsPage ? "primary" : "black"}
            >
              Projets
            </Text>
          )}
        </a>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
