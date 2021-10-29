import { useState, useEffect } from "react";
import styled from "styled-components";

import { theme } from "core/Theme";
import { useInnerWidth, lessThan } from "utils";

import { CircleButton } from "components/atoms";

interface CarouselProps {
  images: string[];
  style?: React.CSSProperties;
}

const { screens } = theme;

const Container = styled.div`
  ${lessThan("tablet")(`
    flex-direction: column;
  `)}
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  ${({ theme: { borderRadius } }) => `
    border-radius: ${borderRadius.small};
  `}
  ${lessThan("tablet")(`
    width: 100%;
  `)}
  ${lessThan("mobile")(`
    height: auto;
    width: calc(100% - 32px);
  `)}
  height: 405px;
  max-height: 405px;
  width: calc(100% - 160px);
  margin: 0 auto;
`;

const DotWrapper = styled.div`
  margin: ${({ theme: { spacing } }) => spacing.three} auto 0;
  display: flex;
  gap: 24px;
  width: max-content;
`;

const Dot = styled.span<{ isActive: boolean }>`
  ${({ theme: { colors, borderRadius }, isActive }) => `
    background: ${isActive ? colors.primary : colors.white100};
    border-radius: ${borderRadius.circle};
  `}
  height: 24px;
  width: 24px;
`;

const Carousel: React.FC<CarouselProps> = ({ images, style }) => {
  const innerWidth = useInnerWidth();
  const IS_TABLET_DEVICE = innerWidth <= screens.tablet;

  const [currentImage, setCurrentImage] = useState<number>(0);

  // eslint-disable-next-line
  useEffect(() => {
    if (currentImage > images.length - 1) {
      setCurrentImage(0);
    }
  });

  return (
    <Container style={style}>
      {!IS_TABLET_DEVICE && (
        <CircleButton
          color="white100"
          onClick={() => {
            if (currentImage === 0) {
              setCurrentImage(images.length - 1);
            } else {
              setCurrentImage(currentImage - 1);
            }
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </CircleButton>
      )}
      <Image src={images[currentImage]} alt={`image_${currentImage}`} />
      {!IS_TABLET_DEVICE && (
        <CircleButton
          color="white100"
          onClick={() => {
            if (currentImage === images.length - 1) {
              setCurrentImage(0);
            } else {
              setCurrentImage(currentImage + 1);
            }
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </CircleButton>
      )}
      {IS_TABLET_DEVICE && (
        <DotWrapper>
          {images.map((__, index) => {
            return (
              <Dot
                key={index}
                isActive={index === currentImage}
                onClick={() => setCurrentImage(index)}
              />
            );
          })}
        </DotWrapper>
      )}
    </Container>
  );
};

export default Carousel;
