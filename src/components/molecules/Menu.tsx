import { useState } from "react";
import styled from "styled-components";

import { MenuItem } from "components/atoms";

interface ListProps {
  iconName: string;
  title: string;
}

interface MenuProps {
  list: ListProps[];
  onClick?: (index: number) => void;
  style?: React.CSSProperties;
}

const Container = styled.div`
  ${({ theme: { spacing } }) => `
    gap: ${spacing.two};
  `}
  display: flex;
`;

const Menu: React.FC<MenuProps> = ({ list, onClick, style }) => {
  const [isActive, setIsActive] = useState<number>(0);

  return (
    <Container style={style}>
      {list.map((elem, index) => {
        return (
          <MenuItem
            key={`menuItem_${index}`}
            isActive={isActive === index}
            iconName={elem.iconName}
            title={elem.title}
            onClick={() => {
              setIsActive(index);
              if (onClick) onClick(index);
            }}
          />
        );
      })}
    </Container>
  );
};

export default Menu;
