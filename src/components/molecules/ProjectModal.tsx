import { theme } from "core/Theme";

import { useInnerWidth } from "utils";

import { Modal, Text } from "components/atoms";
import { Carousel } from "components/molecules";

interface ContentProps {
  name: string;
  images: string[];
  technos: string;
  inDev?: boolean;
  link?: string;
  description: string;
}

interface ProjectModalProps {
  isHidden: boolean;
  content: ContentProps;
  onClose?: () => void;
  style?: React.CSSProperties;
}

const { spacing, colors, borderRadius, screens } = theme;

const ProjectModal: React.FC<ProjectModalProps> = ({
  isHidden,
  content,
  onClose,
  style,
}) => {
  const innerWidth = useInnerWidth();
  const IS_TABLET_DEVICE = innerWidth <= screens.tablet;
  const IS_MOBILE_DEVICE = innerWidth <= screens.mobile;

  return (
    <Modal
      isHidden={isHidden}
      onClose={onClose}
      modalWidth="1000px"
      canClose={IS_TABLET_DEVICE ? true : false}
      style={style}
    >
      <Text
        fontSize="display0"
        fontWeight="semiBold"
        textAlign="center"
        style={{ marginBottom: spacing.three }}
      >
        {content.name}
      </Text>
      <Carousel images={content.images} />
      {content.inDev && (
        <Text
          fontSize="large"
          fontWeight="medium"
          style={{
            width: "max-content",
            padding: `${spacing.one} ${spacing.two}`,
            background: colors.orange,
            borderRadius: borderRadius.small,
            margin: `${spacing.four} auto 0`,
          }}
        >
          En développement
        </Text>
      )}
      <Text
        fontSize="big"
        fontWeight="medium"
        style={{
          textTransform: "uppercase",
          margin: IS_MOBILE_DEVICE
            ? `${spacing.five} auto ${spacing.two}`
            : `${spacing.five} 0 ${spacing.two}`,
          width: IS_MOBILE_DEVICE ? "calc(100% - 32px)" : "100%",
        }}
      >
        Technos utilisées
      </Text>
      <Text
        fontSize="large"
        fontWeight="medium"
        style={{
          marginLeft: spacing.three,
          fontStyle: "italic",
          width: IS_MOBILE_DEVICE ? "calc(100% - 32px)" : "100%",
        }}
      >
        {content.technos}
      </Text>
      <Text
        fontSize="big"
        fontWeight="medium"
        style={{
          textTransform: "uppercase",
          margin: IS_MOBILE_DEVICE
            ? `${spacing.four} auto ${spacing.two}`
            : `${spacing.four} 0 ${spacing.two}`,
          width: IS_MOBILE_DEVICE ? "calc(100% - 32px)" : "100%",
        }}
      >
        Description
      </Text>
      <Text
        fontSize="large"
        fontWeight="medium"
        style={{
          marginLeft: spacing.three,
          fontStyle: "italic",
          width: IS_MOBILE_DEVICE ? "calc(100% - 32px)" : "100%",
        }}
      >
        {content.description}
      </Text>
      {content.link && (
        <Text
          fontSize="large"
          fontWeight="medium"
          onClick={() => window.open(content.link, "_blank")}
          style={{
            width: "max-content",
            padding: `${spacing.one} ${spacing.two}`,
            background: colors.primary,
            borderRadius: borderRadius.small,
            margin: `${spacing.four} auto 0`,
          }}
        >
          Voir le site
        </Text>
      )}
    </Modal>
  );
};

export default ProjectModal;
