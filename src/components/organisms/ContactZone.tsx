import styled from "styled-components";

import { theme } from "core/Theme";
import { lessThan, useInnerWidth } from "utils";

import { TitleWithLines, Text } from "components/atoms";
import { IconWithText } from "components/molecules";

interface ContactZoneProps {
  mode: string;
}

const { screens, spacing } = theme;

const Container = styled.div`
  ${({ theme: { screens } }) => `
    max-width: ${screens.maxDesktop}px;
  `}
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  ${lessThan("tablet")(`
    display: block;
  `)}
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

// const BtnWrapper = styled.a`
//   ${({ theme: { spacing, colors, borderRadius } }) => `
//     padding: ${spacing.one};
//     background: ${colors.primary};
//     border-radius: ${borderRadius.big};
//     margin: ${spacing.ten} auto;
//     gap: ${spacing.one};
//     color: ${colors.white};

//     :hover {
//       background: ${colors.primaryHover};
//     }
//   `}
//   text-decoration: none;
//   cursor: pointer;
//   width: 120px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const IconWrapper = styled.span`
//   font-size: ${({ theme: { fontSize } }) => fontSize.title0};
// `;

const ContactZone: React.FC<ContactZoneProps> = ({ mode }) => {
  const innerWidth = useInnerWidth();
  const IS_TABLET_DEVICE = innerWidth <= screens.tablet;
  const IS_MOBILE_DEVICE = innerWidth <= screens.mobile;
  const isDark = mode.replaceAll(`"`, "") === "dark";

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
        fontSize={IS_MOBILE_DEVICE ? "display0" : "title0"}
        fontWeight="medium"
        color={isDark ? "white" : "black"}
        style={{
          marginBottom: IS_MOBILE_DEVICE ? spacing.three : spacing.four,
        }}
      >
        Contactez-moi
      </TitleWithLines>
      <Wrapper>
        <Text
          fontSize={IS_MOBILE_DEVICE ? "display5" : "display2"}
          fontWeight="medium"
          textAlign={IS_TABLET_DEVICE ? "center" : "left"}
          color={isDark ? "white" : "black"}
          style={{
            maxWidth: IS_TABLET_DEVICE ? "100%" : "550px",
            marginBottom: IS_TABLET_DEVICE ? spacing.four : 0,
          }}
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
                style={{
                  marginLeft: "auto",
                  marginRight: IS_TABLET_DEVICE ? "auto" : 0,
                }}
              />
            );
          })}
        </SocialWrapper>
      </Wrapper>
      {/* <BtnWrapper href="/src/assets/Emmanuel_CV.pdf" target="_blank">
        <Text
          fontSize={IS_MOBILE_DEVICE ? "display5" : "title5"}
          fontWeight="semiBold"
          textAlign="center"
          style={{ cursor: "pointer" }}
        >
          CV
        </Text>
        <IconWrapper>
          <i className="fas fa-eye"></i>
        </IconWrapper>
      </BtnWrapper> */}
    </Container>
  );
};

export default ContactZone;
