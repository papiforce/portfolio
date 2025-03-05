import styled from "styled-components";

import Image from "./Image";
import Text from "./Text";

const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
`;

const Breadcrumb = () => {
  const slugs = window.location.href
    .split("/")
    .slice(3)
    .map((slug: string) => ({
      label: slug.charAt(0).toUpperCase() + slug.slice(1),
      slug: `/${slug}`,
    }));

  const reconstructSlugs = (item: any) => {
    return item.map((item: any, index: number, arr: any) => ({
      ...item,
      slug: index === 0 ? item.slug : arr[index - 1].slug + item.slug,
    }));
  };

  return (
    <Container>
      <a href="/">
        <Image
          src={`${process.env.PUBLIC_URL}/assets/icons/home.svg`}
          alt=""
          width={24}
        />
      </a>

      {reconstructSlugs(slugs).map((item: any, index: number) => {
        const isActive = index === slugs.length - 1;

        return (
          <>
            {index < slugs.length && (
              <Text fontSize="font14" fontWeight={500}>
                {"»"}
              </Text>
            )}
            <Text
              as={isActive ? "p" : "a"}
              {...(!isActive && { href: item.slug })}
              fontSize="font14"
              fontWeight={isActive ? 700 : 600}
              color={isActive ? "primary" : "black"}
            >
              {item.label}
            </Text>
          </>
        );
      })}
    </Container>
  );
};

export default Breadcrumb;
