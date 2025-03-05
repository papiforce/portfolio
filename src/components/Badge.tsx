import { ReactNode } from "react";
import styled from "styled-components";

import Text from "./Text";

type TemplateProps = {
  children: ReactNode;
};

const Template = styled(Text)`
  ${({ theme: { colors } }) => `
    background-color: ${colors.black};
    color: ${colors.white};
  `}

  font-weight: 500;
  border-radius: 4px;
  padding: 4px 10px;
  max-width: max-content;
`;

const Badge = ({ children }: TemplateProps) => {
  return (
    <Template as="span" fontSize="font14" fontWeight={600}>
      {children}
    </Template>
  );
};

export default Badge;
