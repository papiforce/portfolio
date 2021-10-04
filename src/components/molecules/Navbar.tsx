// import { useState, useEffect } from "react";
import styled from "styled-components";

import { Avatar, Text } from "components/atoms";

const Container = styled.div`
  ${({ theme: { spacing } }) => `
    padding: ${spacing.five} ${spacing.ten};
  `}
  display: flex;
  align-items: center;
`;

const RightSide = styled.div`
  ${({ theme: { spacing } }) => `
    gap: ${spacing.ten};
  `}
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const IconWrapper = styled.span`
  ${({ theme: { fontSize } }) => `
    font-size: ${fontSize.display0};
  `}
  cursor: pointer;
`;

const SubRightSide = styled.div`
  ${({ theme: { spacing } }) => `
    gap: ${spacing.seven};
  `}
  display: flex;
  align-items: center;
`;

const Navbar: React.FC = () => {
  // const [currentTime, setCurrentTime] = useState<string>(
  //   new Date().toLocaleString("fr-FR", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   })
  // );

  // useEffect(() => {
  //   setCurrentTime(
  //     new Date().toLocaleString("fr-FR", {
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     })
  //   );
  // });

  return (
    <Container>
      <Text fontSize="display0" fontWeight="extraBold">
        Portfolio
      </Text>
      <RightSide>
        <SubRightSide>
          <IconWrapper>
            <i className="fas fa-cog"></i>
          </IconWrapper>
          <Avatar />
        </SubRightSide>
        {/* <Text
          fontSize="display0"
          fontWeight="light"
          style={{ letterSpacing: "5px" }}
        >
          {currentTime}
        </Text> */}
      </RightSide>
    </Container>
  );
};

export default Navbar;
