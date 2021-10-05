import styled from "styled-components";

import { theme } from "core/Theme";
import { lessThan, useInnerWidth } from "utils";

import { Text } from "components/atoms";

interface TimeLineItemProps {
  iconName: string;
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  style?: React.CSSProperties;
}

const { screens, spacing } = theme;

const Container = styled.div`
  ${({ theme: { spacing } }) => `
    gap: ${spacing.three};
    ${lessThan("mobile")(`
      gap: ${spacing.two};
    `)}
  `}
  display: flex;
  align-items: center;
  width: 100%;
`;

const IconWrapper = styled.span`
  ${({ theme: { spacing, colors, borderRadius, fontSize } }) => `
    padding: 20px ${spacing.three};
    background: ${colors.blue};
    border: 2px solid ${colors.white};
    border-radius: ${borderRadius.big};
    font-size: ${fontSize.display3};
    ${lessThan("mobile")(`
      padding: 12px ${spacing.two};
      font-size: ${fontSize.display5};
    `)}
  `}
`;

const ContentWrapper = styled.div``;

const TimeLineItem: React.FC<TimeLineItemProps> = ({
  iconName,
  title,
  subtitle,
  date,
  description,
  style,
}) => {
  const innerWidth = useInnerWidth();
  const IS_MOBILE_DEVICE = innerWidth <= screens.mobile;

  return (
    <Container style={style}>
      <IconWrapper>
        <i className={iconName}></i>
      </IconWrapper>
      <ContentWrapper>
        <Text
          fontSize={IS_MOBILE_DEVICE ? "big" : "display5"}
          fontWeight="regular"
          style={{ marginBottom: spacing.one }}
        >
          {date}
        </Text>
        <Text
          fontSize={IS_MOBILE_DEVICE ? "display4" : "display2"}
          fontWeight="bold"
          color="orange"
          style={{ marginBottom: spacing.zero }}
        >
          {title}
        </Text>
        <Text
          fontSize={IS_MOBILE_DEVICE ? "display5" : "display4"}
          fontWeight="medium"
          color="blue"
          style={{ marginBottom: spacing.one }}
        >
          {subtitle}
        </Text>
        <Text
          fontSize={IS_MOBILE_DEVICE ? "large" : "big"}
          fontWeight="regular"
          color="glassDisable"
          text={description}
          lineHeight="24px"
        />
      </ContentWrapper>
    </Container>
  );
};

export default TimeLineItem;
