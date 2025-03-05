import styled from "styled-components";

import { AvailabilityType } from "../types";
import { media } from "../utils/mediaQueries";
import Theme from "../utils/Theme";

import Image from "./Image";
import Text from "./Text";

type ContainerProps = {
  $type: AvailabilityType;
};

type AvailabilityCardProps = {
  type: AvailabilityType;
};

const Container = styled.div<ContainerProps>`
  ${({ theme: { colors } }) => `
    background: ${colors.black};
  `}

  ${media(Theme).tablet} {
    max-width: 100%;
  }

  position: relative;
  width: 100%;
  height: 174px;
  max-width: 372px;
  padding: 32px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const AvailabilityCard = ({ type }: AvailabilityCardProps) => {
  const getIcon = (availabilityType: AvailabilityType) => {
    switch (availabilityType) {
      case "BUSY":
        return "thumb-down";
      case "SOON":
        return "neutral";
      default:
        return "thumb-up";
    }
  };

  const getMessage = (availabilityType: AvailabilityType) => {
    switch (availabilityType) {
      case "BUSY":
        return `Malheureusement je ne suis <span style="color: ${Theme.colors.secondary}">pas disponible</span>.`;
      case "SOON":
        return `Je suis <span style="color: ${Theme.colors.orange}">en mesure de me libérer</span> pour aborder une mission.`;
      default:
        return `Je suis <span style="color: ${Theme.colors.green}">disponible immédiatement</span> pour tous types de missions.`;
    }
  };

  return (
    <Container $type={type}>
      <Image
        src={`${process.env.PUBLIC_URL}/assets/icons/${getIcon(type)}.svg`}
        alt=""
        width={36}
        height={36}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          transform: type === "BUSY" ? "scaleY(-1)" : "scaleY(1)",
        }}
      />

      <Text
        fontFamily="Space Grotesk"
        fontSize="font20"
        fontWeight={500}
        color="white"
        dangerouslySetInnerHTML={{ __html: getMessage(type) }}
      />
    </Container>
  );
};

export default AvailabilityCard;
