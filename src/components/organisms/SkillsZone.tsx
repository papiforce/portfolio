import styled from "styled-components";

import { theme } from "core/Theme";
import { lessThan, useInnerWidth } from "utils";

import { TitleWithLines, Text } from "components/atoms";
import { SkillElem } from "components/molecules";

interface SkillsZoneProps {
  mode: string;
}

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
  ${lessThan("mobile")(`
    padding-bottom: ${spacing.twenty};
  `)}
  padding-bottom: ${spacing.sixteen};
  max-height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SkillsWrapper = styled.div`
  ${({ theme: { spacing } }) => `
    gap: ${spacing.six};
    margin-bottom: ${spacing.ten};
  `}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const LogoWrapper = styled.div<{ mode: string }>`
  ${({ theme: { borderRadius, colors, spacing }, mode }) => `
    background: ${
      mode.replaceAll(`"`, "") === "dark" ? colors.white : colors.black
    };
    border-radius: ${borderRadius.fullCircle};
    border: 2px solid ${colors.blue};
    margin: 0 auto ${spacing.two};
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
`;

const LanguageLogo = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

const SkillsZone: React.FC<SkillsZoneProps> = ({ mode }) => {
  const innerWidth = useInnerWidth();
  const IS_MOBILE_DEVICE = innerWidth <= screens.mobile;
  const isDark = mode.replaceAll(`"`, "") === "dark";

  const SKILLS = [
    {
      iconName: "fas fa-cubes",
      label: "Organisé",
      description:
        "Je suis organisé et j'aime me lancer dans des projets bien réfléchis.",
    },
    {
      iconName: "fas fa-chart-line",
      label: "Efficace",
      description:
        "Une fois le cadre posé et les problématiques en place, je suis efficace pour développer la solution désirée.",
    },
    {
      iconName: "fas fa-hand-sparkles",
      label: "Méticuleux",
      description:
        "Je me plais à perfectionner le produit final pour vous satisfaire au mieux.",
    },
    {
      iconName: "fas fa-lightbulb",
      label: "Créatif",
      description:
        "J'essaie de vous apporter mon avis et mon opinion tout en respectant votre vision du projet et ce, à tout stade du développement.",
    },
  ];

  const LANGUAGES = [
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
      label: "HTML",
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
      label: "CSS",
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
      label: "PHP",
    },
    {
      imgUrl: "https://friconix.com/png/fi-xnsuxx-symfony.png",
      label: "Symfony",
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
      label: "Javascript",
    },
    {
      imgUrl: "https://iconape.com/wp-content/png_logo_vector/typescript.png",
      label: "Typescript",
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      label: "React",
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
      label: "NodeJS",
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png",
      label: "MySQL",
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png",
      label: "MongoDB",
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
        Mes compétences
      </TitleWithLines>
      <Wrapper>
        <SkillsWrapper>
          {SKILLS.map((skill, index) => {
            return (
              <SkillElem
                key={index}
                iconName={skill.iconName}
                label={skill.label}
                description={skill.description}
                mode={mode}
              />
            );
          })}
        </SkillsWrapper>
        <Text
          fontSize="display3"
          fontWeight="regular"
          textAlign="center"
          color={isDark ? "white" : "black"}
          style={{
            fontStyle: "italic",
            margin: `0 auto ${spacing.ten}`,
            maxWidth: 650,
          }}
        >
          “ Amoureux de Javascript, Typescript, React et NodeJS ❤️ ”
        </Text>
        <SkillsWrapper style={{ marginBottom: 0 }}>
          {LANGUAGES.map((language, index) => {
            return (
              <LogoWrapper key={`language_${index}`} mode={mode}>
                <div>
                  <LanguageLogo src={language.imgUrl} alt={language.label} />
                  <Text
                    fontSize="display4"
                    fontWeight="semiBold"
                    color={isDark ? "black" : "white"}
                    textAlign="center"
                    style={{ marginTop: spacing.one }}
                  >
                    {language.label}
                  </Text>
                </div>
              </LogoWrapper>
            );
          })}
        </SkillsWrapper>
      </Wrapper>
    </Container>
  );
};

export default SkillsZone;
