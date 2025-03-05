import styled from "styled-components";

import { media } from "../utils/mediaQueries";
import Theme from "../utils/Theme";

import Image from "./Image";
import Text from "./Text";

type SpotifyCardProps = {
  url: string;
  title: string;
  artist: string;
};

const LinkTemplate = styled.a`
  ${media(Theme).tablet} {
    max-width: 100%;
  }

  width: 100%;
  max-width: 372px;
`;

const Container = styled.div`
  ${media(Theme).tablet} {
    max-width: 100%;
  }

  width: 100%;
  height: 100%;
  max-height: 174px;
  max-width: 372px;
  padding: 32px;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background: rgb(29, 185, 84);
  background: -moz-linear-gradient(
    120deg,
    rgba(29, 185, 84, 1) 55%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-linear-gradient(
    120deg,
    rgba(29, 185, 84, 1) 55%,
    rgba(0, 0, 0, 1) 100%
  );
  background: linear-gradient(
    120deg,
    rgba(29, 185, 84, 1) 55%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1db954",endColorstr="#000000",GradientType=1);
`;

const SpotifyCard = ({ url, title, artist }: SpotifyCardProps) => {
  return (
    <LinkTemplate href={url} target="_blank" rel="noreferrer">
      <Container>
        <Image
          src={`${process.env.PUBLIC_URL}/assets/icons/spotify.svg`}
          alt=""
          width={36}
          height={36}
          style={{ position: "absolute", top: 16, right: 16 }}
        />

        <Text
          fontFamily="Space Grotesk"
          fontSize="font24"
          fontWeight={600}
          color="white"
          style={{ marginBottom: 8 }}
        >
          En boucle
        </Text>

        <Text
          fontFamily="Space Grotesk"
          fontSize="font20"
          fontWeight={500}
          color="white"
        >
          {title}
        </Text>

        <Text fontSize="font12" fontWeight={500} color="white">
          {artist}
        </Text>
      </Container>
    </LinkTemplate>
  );
};

export default SpotifyCard;
