import styled from "styled-components";

export interface TextProps {
  color?: string;
  fontSize: string;
  fontWeight: string;
  isEllipsis?: boolean;
  lineHeight?: string;
  textAlign?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const TextStyle = styled.div<TextProps>`
  ${({
    theme,
    color,
    fontSize,
    fontWeight,
    textAlign,
    lineHeight,
    isEllipsis,
    onClick,
  }) => `
    font-size: ${theme.fontSize[fontSize]};
    font-weight: ${theme.fontWeight[fontWeight]};
    color: ${color ? theme.colors[color] : theme.colors.white};
    text-align: ${
      textAlign ? theme.textAlign[textAlign] : theme.textAlign.left
    };
    line-height: ${lineHeight ? lineHeight : theme.fontSize[fontSize]};
    white-space: ${isEllipsis ? "nowrap" : "normal"};
    text-overflow: ${isEllipsis ? "ellipsis" : "unset"};
    overflow: ${isEllipsis ? "hidden" : "visible"};
    cursor: ${onClick ? "pointer" : "default"};
  `}
  margin: 0;
`;

const Text: React.FC<TextProps> = ({
  children,
  fontSize,
  fontWeight,
  color,
  textAlign,
  lineHeight,
  isEllipsis = false,
  style,
  onClick,
  ...props
}) => {
  return (
    <TextStyle
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      textAlign={textAlign}
      lineHeight={lineHeight}
      isEllipsis={isEllipsis}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </TextStyle>
  );
};

export default Text;
