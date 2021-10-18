import styled from "styled-components";

import { Text } from "components/atoms";

interface SkillElemProps {
  iconName: string;
  label: string;
  description: string;
  style?: React.CSSProperties;
}

const Container = styled.div`
  width: 300px;
`;

const IconTitleWrapper = styled.div`
  ${({ theme: { borderRadius, colors, spacing } }) => `
    background: ${colors.blue};
    border-radius: ${borderRadius.fullCircle};
    border: 2px solid ${colors.white};
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
  ${({ theme: { colors, spacing } }) => `
    margin: 0 auto ${spacing.one};
    color: ${colors.blueDark};
  `}
  font-size: 64px;
`;

const SkillElem: React.FC<SkillElemProps> = ({
  iconName,
  label,
  description,
  style,
}) => {
  return (
    <Container style={style}>
      <IconTitleWrapper>
        <CenterDiv>
          <IconWrapper>
            <i className={iconName}></i>
          </IconWrapper>
          <Text fontSize="display4" fontWeight="semiBold" color="blueDark">
            {label}
          </Text>
        </CenterDiv>
      </IconTitleWrapper>
      <Text fontSize="display5" fontWeight="regular" textAlign="center">
        {description}
      </Text>
    </Container>
  );
};

export default SkillElem;
