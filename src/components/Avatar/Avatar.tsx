import React, { AriaRole, useCallback, useMemo } from "react";
import { isNil } from "lodash-es";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { elementColorsNames, getElementColor } from "../../utils/colors-vars-map";
import { AvatarBorderColor, AvatarSize, AvatarType } from "./AvatarConstants";
import { AvatarBadge, AvatarBadgeProps } from "./AvatarBadge";
import { AvatarContent } from "./AvatarContent";
import Tooltip, { TooltipProps } from "../Tooltip/Tooltip";
import ClickableWrapper from "../Clickable/ClickableWrapper";
import Dialog from "../Dialog/Dialog";
import { SubIcon, L3ComponentProps } from "../../types";
import "./Avatar.scss";

const AVATAR_CSS_BASE_CLASS = "l3-style-avatar";
const bemHelper = BEMClass(AVATAR_CSS_BASE_CLASS);

type BackgroundColors = typeof elementColorsNames[keyof typeof elementColorsNames];

export interface AvatarProps extends L3ComponentProps {
  src?: string;
  text?: string;
  tooltipProps?: TooltipProps;
  ariaLabel?: string;
  withoutTooltip?: boolean;
  icon?: SubIcon;
  type?: AvatarType;
  textClassName?: string;
  backgroundColor?: BackgroundColors;
  customBackgroundColor?: string;
  role?: AriaRole;
  size?: AvatarSize;
  customSize?: number;
  tabIndex?: number;
  ariaHidden?: boolean;
  disabled?: boolean;
  isSquare?: boolean;
  isDisabled?: boolean;
  isRectangle?: boolean;
  square?: boolean;
  rectangle?: boolean;
  topLeftBadgeProps?: AvatarBadgeProps;
  topRightBadgeProps?: AvatarBadgeProps;
  bottomLeftBadgeProps?: AvatarBadgeProps;
  bottomRightBadgeProps?: AvatarBadgeProps;
  withoutBorder?: boolean;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent, avatarId: string) => void;
  borderColor?: AvatarBorderColor;
}

const Avatar: React.FC<AvatarProps> & {
  types?: typeof AvatarType;
  sizes?: typeof AvatarSize;
  colors?: BackgroundColors;
  backgroundColors?: BackgroundColors;
} = ({
  id,
  type = AvatarType.TEXT,
  className,
  textClassName = "",
  size = AvatarSize.LARGE,
  src,
  icon,
  text,
  tooltipProps,
  ariaLabel,
  withoutTooltip = false,
  role,
  backgroundColor = elementColorsNames.CHILI_BLUE,
  square,
  disabled,
  rectangle,
  // Backward compatibility for props naming
  isSquare,
  // Backward compatibility for props naming
  isDisabled,
  // Backward compatibility for props naming
  isRectangle,
  tabIndex = 0,
  ariaHidden = false,
  topLeftBadgeProps,
  topRightBadgeProps,
  bottomLeftBadgeProps,
  bottomRightBadgeProps,
  withoutBorder = false,
  customSize = null,
  customBackgroundColor = null,
  borderColor = AvatarBorderColor.NONE,
  onClick
}) => {
  const overrideSquare = backwardCompatibilityForProperties([square, isSquare]);
  const overrideDisabled = backwardCompatibilityForProperties([disabled, isDisabled], false);
  const overrideRectangle = backwardCompatibilityForProperties([rectangle, isRectangle]);
  const backgroundColorStyle = useMemo(() => {
    if (customBackgroundColor) return { backgroundColor: customBackgroundColor };
    return src ? {} : { backgroundColor: getElementColor(backgroundColor) };
  }, [src, backgroundColor, customBackgroundColor]);
  const sizeStyle = useMemo(() => {
    return customSize ? { height: customSize, width: customSize } : {};
  }, [customSize]);

  const overrideTooltipProps = useMemo(() => {
    if (withoutTooltip) return undefined;

    if (tooltipProps) {
      return { content: ariaLabel, ...tooltipProps };
    } else {
      return { content: ariaLabel };
    }
  }, [ariaLabel, tooltipProps, withoutTooltip]);

  const badgesContainer = useMemo(() => {
    const badges = [];
    if (!isNil(topLeftBadgeProps)) {
      badges.push(
        <div
          key="top-left-badge"
          className={cx(bemHelper({ element: "badge" }), bemHelper({ element: "badge", state: "top-left" }))}
        >
          <AvatarBadge size={size} {...topLeftBadgeProps} />
        </div>
      );
    }
    if (!isNil(topRightBadgeProps)) {
      badges.push(
        <div
          key="top-right-badge"
          className={cx(bemHelper({ element: "badge" }), bemHelper({ element: "badge", state: "top-right" }))}
        >
          <AvatarBadge size={size} {...topRightBadgeProps} />
        </div>
      );
    }
    if (!isNil(bottomLeftBadgeProps)) {
      badges.push(
        <div
          key="bottom-left-badge"
          className={cx(bemHelper({ element: "badge" }), bemHelper({ element: "badge", state: "bottom-left" }))}
        >
          <AvatarBadge size={size} {...bottomLeftBadgeProps} />
        </div>
      );
    }
    if (!isNil(bottomRightBadgeProps)) {
      badges.push(
        <div
          key="bottom-right-bade"
          className={cx(bemHelper({ element: "badge" }), bemHelper({ element: "badge", state: "bottom-right" }))}
        >
          <AvatarBadge size={size} {...bottomRightBadgeProps} />
        </div>
      );
    }

    return badges.length > 0 ? <div className={cx(bemHelper({ element: "badges" }))}>{badges}</div> : null;
  }, [size, topLeftBadgeProps, topRightBadgeProps, bottomLeftBadgeProps, bottomRightBadgeProps]);

  const clickHandler = useCallback(
    (event: React.MouseEvent | React.KeyboardEvent) => {
      event.preventDefault();
      if (onClick) {
        onClick(event, id);
      }
    },
    [onClick, id]
  );

  return (
    <div id={id} className={cx(AVATAR_CSS_BASE_CLASS, className, bemHelper({ state: size }))} style={sizeStyle}>
      <ClickableWrapper
        isClickable={!!onClick}
        clickableProps={{
          onClick: clickHandler,
          tabIndex: "-1",
          className: bemHelper({ element: "clickableWrapper" })
        }}
      >
        <Tooltip
          showTrigger={[Dialog.hideShowTriggers.FOCUS, Dialog.hideShowTriggers.MOUSE_ENTER]}
          hideTrigger={[Dialog.hideShowTriggers.BLUR, Dialog.hideShowTriggers.MOUSE_LEAVE]}
          {...overrideTooltipProps}
        >
          {!rectangle && (
            <div
              className={cx(bemHelper({ element: "circle" }), bemHelper({ element: "circle", state: type }), {
                [bemHelper({ element: "circle", state: "is-disabled" })]: overrideDisabled,
                [bemHelper({ element: "circle", state: "is-square" })]: overrideSquare,
                [bemHelper({ element: "circle", state: "is-rectangle" })]: overrideRectangle,
                [bemHelper({ element: "circle", state: "without-border" })]: withoutBorder
              })}
              aria-hidden={ariaHidden}
              tabIndex={tabIndex}
              style={{ ...backgroundColorStyle }}
            >
              <AvatarContent
                type={type}
                size={size}
                src={src}
                icon={icon}
                text={text}
                ariaLabel={ariaLabel}
                role={role}
                textClassName={textClassName}
              />
            </div>
          )}
          {rectangle && (
            <div
              className={
                borderColor &&
                cx("polygon", {
                  polygon_orange: borderColor === "orange",
                  polygon_green: borderColor === "green",
                  polygon_yellow: borderColor === "yellow",
                  polygon_blue: borderColor === "blue",
                  polygon_lightBlue: borderColor === "lightBlue",
                  polygon_pink: borderColor === "pink",
                  polygon_none: borderColor === "none"
                })
              }
            >
              <svg className="svg">
                <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                  <path d="M0.405,0.022 C0.465,-0.007,0.535,-0.007,0.595,0.022 L0.822,0.133 C0.881,0.162,0.923,0.215,0.937,0.278 L0.995,0.536 C1,0.598,0.994,0.663,0.955,0.714 L0.795,0.918 C0.754,0.97,0.691,1,0.625,1 H0.375 C0.309,1,0.246,0.97,0.205,0.918 L0.045,0.714 C0.006,0.663,-0.009,0.598,0.005,0.536 L0.063,0.278 C0.077,0.215,0.119,0.162,0.178,0.133 L0.405,0.022,NaN f, i, l0 lNaN u, r, p, a0 i, n, tNaN r, a0 d, i, a0 lNaN"></path>
                </clipPath>
              </svg>

              {/* <div className="clipped"> */}
              <div className={cx("clipped", { clipped_large: size === "large", clipped_small: size === "small" })}>
                <AvatarContent
                  type={type}
                  size={size}
                  src={src}
                  icon={icon}
                  text={text}
                  ariaLabel={ariaLabel}
                  role={role}
                  textClassName={textClassName}
                />
              </div>
            </div>
          )}
          {badgesContainer}
        </Tooltip>
      </ClickableWrapper>
    </div>
  );
};

Object.assign(Avatar, {
  types: AvatarType,
  sizes: AvatarSize,
  colors: elementColorsNames,
  backgroundColors: elementColorsNames
});

export default Avatar;
