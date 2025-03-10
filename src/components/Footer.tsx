import { FC } from "react";
import styled from "styled-components";

import { media } from "../utils/mediaQueries";
import Theme from "../utils/Theme";
import useWindowSize from "../utils/useWindowSize";

import Text from "./Text";
import Image from "./Image";

type SocialType = {
  src: string;
  href: string;
  ariaLabel: string;
};

const Container = styled.div`
  ${({ theme: { screens } }) => `
    max-width: ${screens.smallDesktop}px;
  `}

  ${media(Theme).tablet} {
    margin: 80px 16px 24px;
    padding: 0;
  }

  margin: 80px auto 24px;
  padding: 0 24px;
`;

const Divider = styled.hr`
  ${({ theme: { colors } }) => `
    background-color: ${colors.grey};
  `}

  height: 2px;
  width: 100%;
  margin: 0 auto 32px;
`;

const Wrapper = styled.div`
  @media (max-width: 574px) {
    flex-direction: column;
    justify-content: center;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
`;

const SocialsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Footer: FC = () => {
  const { width } = useWindowSize();
  const { screens } = Theme;
  const isMobile = width <= screens.mobile;

  const SOCIALS: SocialType[] = [
    {
      src: "assets/icons/resume.svg",
      href: `${window.location.origin}/assets/Emmanuel-CV.pdf`,
      ariaLabel: "CV",
    },
    {
      src: "assets/icons/linkedin.svg",
      href: "https://www.linkedin.com/in/emmanuel-kasomo/",
      ariaLabel: "Linkedin",
    },
    {
      src: "assets/icons/github.svg",
      href: "https://github.com/papiforce",
      ariaLabel: "Github",
    },
    {
      src: "assets/icons/mail.svg",
      href: "mailto:kasomo.emm@gmail.com",
      ariaLabel: "Mail",
    },
  ];

  return (
    <Container>
      <Divider />

      <Wrapper>
        <Text
          fontFamily="Space Grotesk"
          fontSize="font16"
          fontWeight={500}
          color="grey"
          textAlign={isMobile ? "center" : "left"}
        >
          © {new Date().getFullYear()} Emmanuel Kasomo. Tous droits réservés.
        </Text>

        <SocialsWrapper>
          {SOCIALS.map((social, index: number) => (
            <a
              key={`${social.src}-${index}`}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.ariaLabel}
              style={{ width: 28, height: 28 }}
            >
              <Image
                src={`${process.env.PUBLIC_URL}/${social.src}`}
                alt=""
                width={28}
                height={28}
                style={{ borderRadius: 0 }}
              />
            </a>
          ))}
        </SocialsWrapper>
      </Wrapper>
    </Container>
  );
};

export default Footer;
