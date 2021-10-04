import styled from "styled-components";

import { Text } from "components/atoms";

interface MenuItemProps {
  isActive: boolean;
  iconName: string;
  title: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Container = styled.div<{ isActive: boolean }>`
  ${({ theme: { borderRadius, colors, fontSize }, isActive }) => `
    background: ${isActive ? colors.primaryHover : colors.primary};
    border-radius: ${borderRadius.big};
    height: ${isActive ? "150px" : "100px"};
    width: ${isActive ? "150px" : "100px"};
    cursor: ${isActive ? "normal" : "pointer"};
    font-size: ${isActive ? fontSize.title0 : fontSize.display5};
    color: ${isActive ? colors.primary : colors.primaryHover};

    :hover {
      background: ${colors.primaryHover};
      color: ${colors.primary};
    }
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  position: relative;
`;

const MenuItem: React.FC<MenuItemProps> = ({
  isActive,
  iconName,
  title,
  onClick,
  style,
}) => {
  return (
    <Container isActive={isActive} onClick={onClick} style={style}>
      <i className={iconName}></i>
      {isActive && (
        <Text
          fontSize="display0"
          fontWeight="medium"
          style={{
            position: "absolute",
            bottom: "10px",
            left: "calc(100% + 16px)",
          }}
        >
          {title}
        </Text>
      )}
    </Container>
  );
};

export default MenuItem;
