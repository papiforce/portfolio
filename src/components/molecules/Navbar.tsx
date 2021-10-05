import { useState, useEffect } from "react";
import styled from "styled-components";

import { theme } from "core/Theme";
import { lessThan, useInnerWidth } from "utils";

import { Avatar, Text } from "components/atoms";

const { screens } = theme;

const Container = styled.div`
  ${({ theme: { spacing } }) => `
    padding: ${spacing.five} ${spacing.ten};
    ${lessThan("mobile")(`
      padding: ${spacing.two} ${spacing.three} ${spacing.four};
    `)}
  `}
  display: flex;
  align-items: center;
`;

const RightSide = styled.div`
  ${({ theme: { spacing } }) => `
    gap: ${spacing.ten};
    ${lessThan("mobile")(`
      gap: ${spacing.two};
    `)}
  `}
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const IconWrapper = styled.span`
  ${({ theme: { fontSize } }) => `
    font-size: ${fontSize.display0};
    ${lessThan("mobile")(`
      font-size: ${fontSize.display5};
    `)}
  `}
  cursor: pointer;
`;

const SubRightSide = styled.div`
  ${({ theme: { spacing } }) => `
    gap: ${spacing.seven};
    ${lessThan("mobile")(`
      gap: ${spacing.two};
    `)}
  `}
  display: flex;
  align-items: center;
`;

const Navbar: React.FC = () => {
  const innerWidth = useInnerWidth();

  const IS_MOBILE_DEVICE = innerWidth <= screens.mobile;

  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <Text
        fontSize={IS_MOBILE_DEVICE ? "display5" : "display0"}
        fontWeight="extraBold"
      >
        Portfolio | EK
      </Text>
      <RightSide>
        <SubRightSide>
          <IconWrapper>
            <i className="fas fa-cog"></i>
          </IconWrapper>
          <Avatar />
        </SubRightSide>
        {!IS_MOBILE_DEVICE && (
          <Text
            fontSize="display0"
            fontWeight="light"
            style={{ letterSpacing: "5px" }}
          >
            {currentTime}
          </Text>
        )}
      </RightSide>
    </Container>
  );
};

export default Navbar;
