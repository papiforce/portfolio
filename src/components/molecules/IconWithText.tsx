import styled from "styled-components";

import { theme } from "core/Theme";
import { lessThan, useInnerWidth } from "utils";

import { Text } from "components/atoms";

interface IconWithTextProps {
  iconName: string;
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const { screens } = theme;

const Container = styled.div`
  ${({ theme: { spacing, fontSize, borderRadius, colors } }) => `
    gap: ${spacing.three};
    padding: ${spacing.two} ${spacing.three};
    border-radius: ${borderRadius.circle};
    font-size: ${fontSize.title5};
    background: ${colors.primary};

    :hover {
      background: ${colors.primaryHover};
    }

    ${lessThan("mobile")(`
      font-size: ${fontSize.display3};
      gap: ${spacing.two};
      padding: ${spacing.two};
    `)}
  `}
  width: max-content;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const IconWithText: React.FC<IconWithTextProps> = ({
  iconName,
  text,
  onClick,
  style,
}) => {
  const innerWidth = useInnerWidth();
  const IS_MOBILE_DEVICE = innerWidth <= screens.mobile;

  return (
    <Container style={style} onClick={onClick}>
      <i className={iconName}></i>
      <Text
        fontSize={IS_MOBILE_DEVICE ? "display5" : "title5"}
        fontWeight="regular"
        style={{ cursor: "pointer" }}
      >
        {text}
      </Text>
    </Container>
  );
};

export default IconWithText;
