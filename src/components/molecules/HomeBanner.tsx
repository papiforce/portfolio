import styled from "styled-components";

import { theme } from "core/Theme";
import { lessThan, useInnerWidth } from "utils/index";

import Text from "components/atoms/Text";

const { colors, screens, spacing } = theme;

const Banner = styled.div`
  ${({ theme: { spacing } }) => `
    padding: 0 ${spacing.three};
  `}
  min-height: 100vh;
  width: 100%;
  background: url(http://www.telemanga.net/wallpapers2/tele-manga-13609.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const CenterDiv = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  ${lessThan("tablet")(`
    top: 20%;
  `)}
`;

const HomeBanner: React.FC = () => {
  const innerWidth = useInnerWidth();
  const IS_TABLET_DEVICE = innerWidth <= screens.tablet;
  const IS_MOBILE_DEVICE = innerWidth <= screens.mobile;

  const nameSize = () => {
    if (IS_MOBILE_DEVICE) {
      return "title0";
    }
    if (IS_TABLET_DEVICE) {
      return "specialTitle1";
    }
    return "specialTitle0";
  };

  const jobSize = () => {
    if (IS_MOBILE_DEVICE) {
      return "title4";
    }
    if (IS_TABLET_DEVICE) {
      return "specialSubtitle1";
    }
    return "specialSubtitle0";
  };

  return (
    <Banner>
      <CenterDiv>
        <Text
          fontSize={nameSize()}
          fontWeight="extraLight"
          textAlign="center"
          style={{
            textShadow: `2px 2px 3px ${colors.black}`,
            marginBottom: IS_MOBILE_DEVICE ? spacing.one : 0,
          }}
        >
          Emmanuel Kasomo
        </Text>
        <Text
          fontSize={jobSize()}
          fontWeight="thin"
          textAlign="center"
          style={{ textShadow: `2px 2px 3px ${colors.black}` }}
        >
          Développeur web
        </Text>
      </CenterDiv>
    </Banner>
  );
};

export default HomeBanner;
