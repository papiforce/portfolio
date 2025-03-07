import styled from "styled-components";

import useWindowSize from "../utils/useWindowSize";
import Theme from "../utils/Theme";
import { media } from "../utils/mediaQueries";

import Image from "./Image";
import Text from "./Text";

const Container = styled.div`
  ${media(Theme).tablet} {
    gap: 40px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 16px;
`;

const ContentWrapper = styled.div`
  ${media(Theme).tablet} {
    max-width: 100%;
  }

  width: 100%;
  max-width: 524px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Hero = () => {
  const { width } = useWindowSize();
  const { screens, colors } = Theme;
  const isTablet = width <= screens.tablet;

  const greeting = () => {
    const options = { timeZone: "Europe/Paris", hour12: false };
    const now = new Date().toLocaleTimeString("fr-FR", options);
    const [hours, minutes] = now.split(":").map(Number);

    return hours > 17 || (hours === 17 && minutes >= 30)
      ? "Bonsoir"
      : "Bonjour";
  };

  return (
    <Container>
      <ContentWrapper>
        <Text fontFamily="Space Grotesk" fontSize="from34to24" fontWeight={500}>
          {greeting()} ! 👋 <br /> Je suis{" "}
          <b style={{ color: colors.primary }}>Emmanuel</b>, Développeur <br />
          Typescript vivant à Paris.
        </Text>

        <Text fontSize="font16" textAlign={isTablet ? "justify" : "left"}>
          Développeur avec plus de{" "}
          <span style={{ fontWeight: 700 }}>4 ans</span> d'expérience en
          Javascript, Typescript, React et Node. Grâce à mon expérience au sein
          d'entreprises de diverses tailles, j'ai développé une grande capacité
          d'adaptation et une aisance face à la nouveauté. Passionné par le
          développement web, j'ai également d'autres passions comme le sport
          (football, athlétisme, musculation), les mangas et les jeux-vidéos.
        </Text>

        <Text
          as="a"
          href={`${window.location.origin}/assets/Emmanuel-CV.pdf`}
          target="_blank"
          rel="noreferrer"
          fontSize="font16"
          fontWeight={500}
          color="white"
          textAlign="center"
          style={{
            padding: "12px 24px",
            background: colors.black,
            borderRadius: 8,
            width: isTablet ? "100%" : "max-content",
          }}
        >
          Voir le CV
        </Text>
      </ContentWrapper>

      <Image
        src={`${process.env.PUBLIC_URL}/assets/images/profile-picture.avif`}
        alt="Artwork d'un jeune homme travaillant sur son ordinateur"
        width={200}
        height={200}
        style={{
          borderRadius: "100%",
          border: "4px solid black",
          margin: isTablet ? "0 auto" : "0",
        }}
      />
    </Container>
  );
};

export default Hero;
