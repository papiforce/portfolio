import styled from "styled-components";

export interface TitleWithLinesProps {
  fontSize: string;
  fontWeight: string;
  color?: string;
  style?: React.CSSProperties;
}

const TextStyled = styled.div<TitleWithLinesProps>`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0;
  text-align: center;
  ${(props) => `
    font-size: ${props.theme.fontSize[props.fontSize]};
    font-weight: ${props.theme.fontWeight[props.fontWeight]};
    color: ${
      props.color ? props.theme.colors[props.color] : props.theme.colors.white
    };
  `}
  :before, :after {
    position: absolute;
    top: 57%;
    overflow: hidden;
    width: 50%;
    height: 1px;
    content: "\a0";
    background: ${(props) =>
      props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  }
  :before {
    margin-left: -52%;
    text-align: right;
  }
  :after {
    margin-left: 2%;
  }
`;

const TitleWithLines: React.FC<TitleWithLinesProps> = ({
  fontSize,
  fontWeight,
  color,
  style,
  children,
}) => {
  return (
    <TextStyled
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      style={style}
    >
      {children}
    </TextStyled>
  );
};

export default TitleWithLines;
