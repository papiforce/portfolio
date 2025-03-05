import { CSSProperties } from "react";
import styled from "styled-components";

import { StackType } from "../types";

import Text from "./Text";
import Image from "./Image";

type StackDisplayerProps = {
  stack: StackType;
  title?: string;
  titleAs?: string;
  titleStyle?: CSSProperties;
};

const Container = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px 40px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StackDisplayer = ({
  stack,
  title,
  titleAs,
  titleStyle,
}: StackDisplayerProps) => {
  return (
    <Container>
      {title && (
        <Text
          as={titleAs}
          fontFamily="Space Grotesk"
          fontSize="font24"
          fontWeight={600}
          style={titleStyle}
        >
          {title}
        </Text>
      )}

      <Text
        fontFamily="Space Grotesk"
        fontSize="font18"
        fontWeight={500}
        style={{ marginBottom: 16 }}
      >
        Front-End
      </Text>

      <ContentWrapper>
        {stack.front.map((elem, index: number) => (
          <TextWrapper key={`${elem.label}-${index}`}>
            <Image
              src={`${process.env.PUBLIC_URL}/assets/icons/skills/${elem.icon}.svg`}
              alt=""
              height={32}
              width={32}
              style={{ borderRadius: 0 }}
            />

            <Text fontSize="font16" fontWeight={500}>
              {elem.label}
            </Text>
          </TextWrapper>
        ))}
      </ContentWrapper>

      <Text
        fontFamily="Space Grotesk"
        fontSize="font18"
        fontWeight={500}
        style={{ margin: "40px 0 16px" }}
      >
        Back-End
      </Text>

      <ContentWrapper>
        {stack.back.map((elem, index: number) => (
          <TextWrapper key={`${elem.label}-${index}`}>
            <Image
              src={`${process.env.PUBLIC_URL}/assets/icons/skills/${elem.icon}.svg`}
              alt=""
              height={32}
              width={32}
              style={{ borderRadius: 0 }}
            />

            <Text fontSize="font16" fontWeight={500}>
              {elem.label}
            </Text>
          </TextWrapper>
        ))}
      </ContentWrapper>

      <Text
        fontFamily="Space Grotesk"
        fontSize="font18"
        fontWeight={500}
        style={{ margin: "40px 0 16px" }}
      >
        Autres
      </Text>

      <ContentWrapper>
        {stack.other.map((elem, index: number) => (
          <TextWrapper key={`${elem.label}-${index}`}>
            <Image
              src={`${process.env.PUBLIC_URL}/assets/icons/skills/${elem.icon}.svg`}
              alt=""
              height={32}
              width={32}
              style={{ borderRadius: 0 }}
            />

            <Text fontSize="font16" fontWeight={500}>
              {elem.label}
            </Text>
          </TextWrapper>
        ))}
      </ContentWrapper>
    </Container>
  );
};

export default StackDisplayer;
