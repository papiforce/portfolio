import { useState } from "react";
import styled from "styled-components";

import { lessThan } from "utils";

import { MenuItem } from "components/atoms";

interface ListProps {
  iconName: string;
  title: string;
}

interface MenuProps {
  list: ListProps[];
  mode: string;
  onClick?: (index: number) => void;
  style?: React.CSSProperties;
}

const Container = styled.div`
  ${({ theme: { spacing } }) => `
    gap: ${spacing.two};
  `}
  ${lessThan("mobile")(`
    height: 100px;
  `)}
  display: flex;
  height: 150px;
`;

const Menu: React.FC<MenuProps> = ({ list, mode, onClick, style }) => {
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
            mode={mode}
            isLast={index === list.length - 1}
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
