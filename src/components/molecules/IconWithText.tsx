import styled from "styled-components";

import { Text } from "components/atoms";

interface IconWithTextProps {
  iconName: string;
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Container = styled.div`
  ${({ theme: { spacing, fontSize, borderRadius, colors } }) => `
    gap: ${spacing.three};
    padding: ${spacing.two} ${spacing.three};
    border-radius: ${borderRadius.circle};
    font-size: ${fontSize.title0};
    background: ${colors.primary};

    :hover {
      background: ${colors.primaryHover};
    }
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
  return (
    <Container style={style} onClick={onClick}>
      <i className={iconName}></i>
      <Text
        fontSize="title4"
        fontWeight="regular"
        style={{ cursor: "pointer" }}
      >
        {text}
      </Text>
    </Container>
  );
};

export default IconWithText;
