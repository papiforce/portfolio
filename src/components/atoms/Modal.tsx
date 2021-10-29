import styled from "styled-components";

import { OutsideClick } from "utils";
import { lessThan } from "utils/mediaQueries";

import { CircleButton } from "components/atoms";

export interface ModalProps {
  style?: React.CSSProperties;
  isHidden: boolean;
  modalWidth?: string;
  canClose?: boolean;
  isFullScreen?: boolean;
  onClose?: () => void;
}

const Overlay = styled.div<{ isHidden: boolean; isFullScreen: boolean }>`
  ${({ isHidden, isFullScreen }) => `
    ${lessThan("mobile")(`
      transition: ${
        !isFullScreen
          ? "unset"
          : isHidden
          ? "width 0.5s 1s, height 0.5s 1s, opacity 1s"
          : "width 0.5s, height 0.5s, opacity 0.45s 0.45s"
      };
    `)}
    opacity: ${isHidden ? 0 : 1};
    transition: ${
      !isFullScreen
        ? "unset"
        : isHidden
        ? "unset"
        : "width 0.5s, height 0.5s, opacity 0.45s 0.45s"
    };
    width: ${isHidden ? 0 : "100%"};
    height: ${isHidden ? 0 : "100%"};
  `}
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 100;
  cursor: pointer;
`;

const Container = styled.div<{
  isHidden: boolean;
  modalWidth?: string;
  isFullScreen?: boolean;
}>`
  ${({
    isHidden,
    modalWidth,
    isFullScreen,
    theme: { spacing, colors, borderRadius },
  }) => `
    max-width: ${modalWidth ? modalWidth : "448px"};
    padding: ${spacing.three};
    background: ${colors.grey200};
    ${
      isFullScreen
        ? `
          ${lessThan("mobile")(`
            padding: ${spacing.three} 0 0 0;
            width: 100%;
            max-width: none;
            height: calc(100% - 40px);
            max-height: none;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            position: fixed;
            top: ${isHidden ? "150%" : "53%"};
            border-radius: ${borderRadius.large} ${borderRadius.large} 0 0;
            transition: ${isHidden ? "top 0.75s" : "top 0.75s 1s"};
          `)}
        `
        : `
          ${lessThan("mobile")(`
            padding: ${spacing.three} 0;
            width: 100%;
            max-width: none;
            transform: translate(-50%, 0%);
            bottom: 0px;
            top: unset;
            border-radius: ${borderRadius.large} ${borderRadius.large} 0 0;
          `)}
        `
    }
  `}
  width: 100%;
  height: auto;
  border-radius: 28px;
  position: absolute;
  margin: 0;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  cursor: auto;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const Modal: React.FC<ModalProps> = ({
  children,
  style,
  isHidden,
  modalWidth,
  canClose = true,
  isFullScreen = true,
  onClose,
}) => {
  return (
    <Overlay isHidden={isHidden} isFullScreen={isFullScreen}>
      <OutsideClick
        action={() => {
          if (!isHidden && onClose) onClose();
        }}
      >
        <Container
          isHidden={isHidden}
          modalWidth={modalWidth}
          isFullScreen={isFullScreen}
          style={style}
        >
          {canClose && (
            <CircleButton
              color="white100"
              style={{ position: "absolute", right: "24px" }}
              onClick={onClose}
            >
              <i className="fas fa-times"></i>
            </CircleButton>
          )}
          {children}
        </Container>
      </OutsideClick>
    </Overlay>
  );
};

export default Modal;
