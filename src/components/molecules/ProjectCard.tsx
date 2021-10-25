import styled from "styled-components";

import { lessThan } from "utils";

import { Text } from "components/atoms";

interface ProjetCardProps {
  imgUrl: string;
  name: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Container = styled.div`
  ${({ theme: { borderRadius, colors, spacing } }) => `
    ${lessThan("tablet")(`
      transform: none;
    `)}
    padding: ${spacing.two};
    border-radius: ${borderRadius.big};

    :hover {
      background: ${colors.glass};
      transform: scale(1);
    }
  `}
  transition: transform .2s;
  transform: scale(0.8);
  width: max-content;
  cursor: pointer;
`;

const Wallpaper = styled.img`
  ${({ theme: { borderRadius, colors, spacing } }) => `
    border: 2px solid ${colors.white};
    border-radius: ${borderRadius.small};
    margin-bottom: ${spacing.two};
  `}
  max-width: 400px;
  width: 100%;
`;

const ProjetCard: React.FC<ProjetCardProps> = ({
  imgUrl,
  name,
  onClick,
  style,
}) => {
  return (
    <Container onClick={onClick} style={style}>
      <Wallpaper src={imgUrl} alt={name} />
      <Text
        fontSize="display5"
        fontWeight="medium"
        textAlign="center"
        style={{ textTransform: "uppercase", cursor: "pointer" }}
      >
        {name}
      </Text>
    </Container>
  );
};

export default ProjetCard;
