import styled from "styled-components";

export interface CircleButtonProps {
  style?: React.CSSProperties;
  color?: "primary" | "blue" | "blueAlt" | "blueHover" | "white100";
  hoverColor?: "primary" | "blue" | "blueAlt" | "blueHover" | "white100";
  onClick?: () => void;
}

const ButtonStyled = styled.button<CircleButtonProps>`
  ${({ theme: { colors, borderRadius }, color, hoverColor }) => `
    background: ${color ? colors[color] : "transparent"};
    border-radius: ${borderRadius.circle};
    :hover {
      background: ${hoverColor ? colors[hoverColor] : colors.white};
    }
    :active {
      transform: scale(0.93);
    }
  `}
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  width: 32px;
  height: 32px;
  padding: 20px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 100ms cubic-bezier(0.64, 0.04, 0.35, 1);
  transform: scale(1);
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

const CircleButton: React.FC<CircleButtonProps> = ({
  children,
  style,
  color,
  hoverColor,
  onClick,
  ...props
}) => {
  return (
    <ButtonStyled
      color={color}
      hoverColor={hoverColor}
      style={style}
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

export default CircleButton;
