import styled from "styled-components";

import { Text } from "components/atoms";

interface SkillElemProps {
  iconName: string;
  label: string;
  description: string;
  mode: string;
  style?: React.CSSProperties;
}

const Container = styled.div`
  width: 300px;
`;

const IconTitleWrapper = styled.div<{ mode: string }>`
  ${({ theme: { borderRadius, colors, spacing }, mode }) => `
    background: ${colors.blue};
    border-radius: ${borderRadius.fullCircle};
    border: ${
      mode.replaceAll(`"`, "") === "dark"
        ? `2px solid ${colors.white}`
        : `2px solid ${colors.black}`
    };
    margin: 0 auto ${spacing.two};
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
`;

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.span`
  margin: ${({ theme: { spacing } }) => `0 auto ${spacing.one}`};
  font-size: 64px;
`;

const SkillElem: React.FC<SkillElemProps> = ({
  iconName,
  label,
  description,
  mode,
  style,
}) => {
  const isDark = mode.replaceAll(`"`, "") === "dark";

  return (
    <Container style={style}>
      <IconTitleWrapper mode={mode}>
        <CenterDiv>
          <IconWrapper>
            <i className={iconName}></i>
          </IconWrapper>
          <Text fontSize="display4" fontWeight="semiBold" color="orange">
            {label}
          </Text>
        </CenterDiv>
      </IconTitleWrapper>
      <Text
        fontSize="display5"
        fontWeight="regular"
        color={isDark ? "white" : "black"}
        textAlign="center"
      >
        {description}
      </Text>
    </Container>
  );
};

export default SkillElem;
