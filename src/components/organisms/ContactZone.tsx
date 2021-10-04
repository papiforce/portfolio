import styled from "styled-components";

import { theme } from "core/Theme";

import { TitleWithLines, Text } from "components/atoms";
import { IconWithText } from "components/molecules";

const { spacing } = theme;

const Container = styled.div`
  ${({ theme: { screens } }) => `
    max-width: ${screens.maxDesktop}px;
  `}
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SocialWrapper = styled.div`
  ${({ theme: { spacing } }) => `
    gap: ${spacing.four};
  `}
  display: flex;
  flex-direction: column;
`;

const ContactZone: React.FC = () => {
  const CONTACT_ITEMS = [
    {
      iconName: "fab fa-github",
      text: "Github",
      onClick: () => window.open("https://github.com/papiforce", "_blank"),
    },
    {
      iconName: "fab fa-linkedin",
      text: "Linkedin",
      onClick: () =>
        window.open("https://www.linkedin.com/in/emmanuel-kasomo/", "_blank"),
    },
    {
      iconName: "fab fa-google",
      text: "kasomo.emm@gmail.com",
    },
  ];

  return (
    <Container>
      <TitleWithLines
        fontSize="title0"
        fontWeight="medium"
        style={{ marginBottom: spacing.four }}
      >
        Contactez-moi
      </TitleWithLines>
      <Wrapper>
        <Text
          fontSize="display3"
          fontWeight="medium"
          style={{ maxWidth: "500px" }}
        >
          Je suis joignable par mail ainsi que sur Linkedin. N'hésitez pas à me
          contacter.
        </Text>
        <SocialWrapper>
          {CONTACT_ITEMS.map((item, index) => {
            return (
              <IconWithText
                key={`iconText_${index}`}
                iconName={item.iconName}
                text={item.text}
                onClick={item.onClick}
                style={{ marginLeft: "auto" }}
              />
            );
          })}
        </SocialWrapper>
      </Wrapper>
    </Container>
  );
};

export default ContactZone;
