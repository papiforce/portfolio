import styled from "styled-components";
import Shin from "assets/shin-army.jpg";

const Container = styled.div`
  ${({ theme: { borderRadius } }) => `
    border-radius: ${borderRadius.big};
  `}
  height: 48px;
  width: 48px;
  background: url(${Shin});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  position: relative;
`;

const Status = styled.div<{ isActive: boolean }>`
  ${({ theme: { colors, borderRadius }, isActive }) => `
    background: ${isActive ? colors.green : colors.redDark};
    border-radius: ${borderRadius.big};
  `}
  position: absolute;
  bottom: -2px;
  right: -5px;
  height: 12px;
  width: 12px;
`;

const Avatar: React.FC = () => {
  return (
    <Container>
      <Status isActive />
    </Container>
  );
};

export default Avatar;
