import styled from "styled-components";

import { lessThan } from "utils";

import { TimeLineItem } from "components/atoms";

interface ListProps {
  iconName: string;
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  style?: React.CSSProperties;
}

interface TimeLineProps {
  list: ListProps[];
  mode: string;
  style?: React.CSSProperties;
}

const Container = styled.div`
  ${({ theme: { spacing, colors } }) => `
    gap: ${spacing.ten};

    :before {
      position: absolute;
      left: 34px;
      width: 6px;
      height: 100%;
      content: "";
      background: ${colors.blue};
    }

    ${lessThan("mobile")(`
      gap: ${spacing.five};

      :before {
        width: 4px;
        left: 26px;
      }
    `)}
  `}
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TimeLine: React.FC<TimeLineProps> = ({ list, mode, style }) => {
  return (
    <Container style={style}>
      {list.map((elem, index) => {
        return (
          <TimeLineItem
            key={`timelineitem_${index}`}
            iconName={elem.iconName}
            title={elem.title}
            subtitle={elem.subtitle}
            date={elem.date}
            description={elem.description}
            mode={mode}
            style={{ zIndex: 2 }}
          />
        );
      })}
    </Container>
  );
};

export default TimeLine;
