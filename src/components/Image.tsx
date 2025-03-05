import styled from "styled-components";
import { HTMLAttributes } from "react";

interface TemplateProps {
  $width?: number;
  $height?: number;
}

const Template = styled.img<TemplateProps>`
  ${({ $width, $height }) => `
    max-height: ${$height}px;
    max-width: ${$width}px;
  `}

  border-radius: 12px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy" | undefined;
}

const Image = ({
  src,
  alt,
  width,
  height,
  loading = "eager",
  ...props
}: ImageProps) => {
  return (
    <Template
      src={src}
      alt={alt}
      $width={width}
      $height={height}
      loading={loading}
      {...props}
    />
  );
};

export default Image;
