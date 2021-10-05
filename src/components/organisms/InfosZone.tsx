import styled from "styled-components";

import { theme } from "core/Theme";
import { lessThan, useInnerWidth } from "utils";

import { Text, TitleWithLines } from "components/atoms";
import { TimeLine } from "components/molecules";

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
    padding-bottom: ${spacing.ten};
  `)}
  padding-bottom: ${spacing.sixteen};
  max-height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SidesWrapper = styled.div`
  ${({ theme: { spacing } }) => `
    margin-bottom: ${spacing.ten};
    ${lessThan("tablet")(`
      display: block;
      margin-bottom: ${spacing.six};
    `)}
  `}
  display: flex;
`;

const LeftSide = styled.div`
  ${({ theme: { spacing } }) => `
    gap: ${spacing.four};
    ${lessThan("tablet")(`
      gap: ${spacing.two};
      margin-bottom: ${spacing.four};
    `)}
  `}
  display: flex;
  flex-direction: column;
`;

const RightSide = styled.div`
  ${({ theme: { spacing } }) => `
    gap: ${spacing.four};
    ${lessThan("tablet")(`
      gap: ${spacing.two};
    `)}
  `}
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

const InfosZone: React.FC = () => {
  const innerWidth = useInnerWidth();
  const IS_TABLET_DEVICE = innerWidth <= screens.tablet;
  const IS_MOBILE_DEVICE = innerWidth <= screens.mobile;

  const LEFT_INFOS = [
    "Emmanuel KASOMO",
    "21 ans",
    "Actuellement en 3ème annéee du Bachelor Développeur Web à HETIC",
  ];

  const RIGHT_INFOS = [
    "Recherche activement un contrat d'alternance (apprentissage ou professionnalisation)",
    "1 semaine en formation / 3 semaines en entreprise",
    "Début dés que possible",
  ];

  const TIMELINE_ITEMS = [
    {
      iconName: "fas fa-user-graduate",
      title: "HETIC",
      subtitle: "Bachelor Développeur Web",
      date: "Octobre 2021 - Maintenant",
    },
    {
      iconName: "fas fa-user-tie",
      title: "Développeur Front-End",
      subtitle: "Koliving",
      date: "Octobre 2021 - Septembre 2022",
      description:
        "Contrat d'apprentissage<br>React (Typescript, styled-components, Hooks, GraphQL)<br><a class='link' href='https://koliving.fr/' target='_blank'>Site Koliving</a>",
    },
    {
      iconName: "fas fa-user-graduate",
      title: "Web@cademie by {EPITECH}",
      subtitle: "Titre Intégrateur - Développeur Web",
      date: "Avril 2019 - Septembre 2021",
      description:
        "Pédagogie par projets comprenant du PHP, Javascript et des Frameworks",
    },
    {
      iconName: "fas fa-user-tie",
      title: "Equipier polyvalent",
      subtitle: "McDonald's",
      date: "Novembre 2018 - Janvier 2020",
      description: "Contrat étudiant (15h)",
    },
    {
      iconName: "fas fa-user-graduate",
      title: "Université Gustave Eiffel",
      subtitle: "Licence Maths et Informatique",
      date: "Septembre 2017 - Avril 2019",
      description:
        "Apprentissage des bases de la logique, de l'algorithmie et de la programmation et particulièrement en Python",
    },
    {
      iconName: "fas fa-user-tie",
      title: "Employé polyvalent",
      subtitle: "Leader Price",
      date: "Janvier - Août 2018",
      description: "Contrat étudiant (15h)",
    },
    {
      iconName: "fas fa-user-graduate",
      title: "Lycée Gaston Bachelard",
      subtitle: "Baccalauréat Scientifique",
      date: "Septembre 2016 - Juillet 2017",
      description: "Spécialité Sciences de l'Ingénieur",
    },
  ];

  return (
    <Container>
      <TitleWithLines
        fontSize={IS_MOBILE_DEVICE ? "display0" : "title0"}
        fontWeight="medium"
        style={{
          marginBottom: IS_MOBILE_DEVICE ? spacing.three : spacing.four,
        }}
      >
        Mes informations
      </TitleWithLines>
      <Wrapper>
        <SidesWrapper>
          <LeftSide>
            {LEFT_INFOS.map((info, index) => {
              return (
                <Text
                  key={`leftText_${index}`}
                  fontSize={IS_MOBILE_DEVICE ? "display5" : "display2"}
                  fontWeight="medium"
                  style={{ maxWidth: IS_TABLET_DEVICE ? "100%" : "550px" }}
                >
                  {info}
                </Text>
              );
            })}
          </LeftSide>
          <RightSide>
            {RIGHT_INFOS.map((info, index) => {
              return (
                <Text
                  key={`rightText_${index}`}
                  fontSize={IS_MOBILE_DEVICE ? "display5" : "display2"}
                  fontWeight="medium"
                  textAlign={IS_TABLET_DEVICE ? "text" : "right"}
                  style={{ maxWidth: "550px" }}
                >
                  {info}
                </Text>
              );
            })}
          </RightSide>
        </SidesWrapper>
        <TimeLine list={TIMELINE_ITEMS} />
      </Wrapper>
    </Container>
  );
};

export default InfosZone;
