import { forwardRef } from "react";
import { L3Component, L3ComponentProps, SubIcon } from "../../types";
import { BadgeType, DotStates, DraftShape, SpecialType } from "./BadgeConstants";
import cx from "classnames";
import "./Badge.scss";
import Icon from "../Icon/Icon";

interface BadgeProps extends L3ComponentProps {
  dot?: DotStates;
  type?: BadgeType;
  label?: string;
  text?: string;
  icon?: SubIcon;
  iconClassName?: string;
  draft?: DraftShape;
  isDot?: boolean;
  special?: SpecialType;
  value?: string;
  badgeGroup?: boolean;
}

const Badge: L3Component<BadgeProps, HTMLElement> & {
  types?: typeof BadgeType;
  drafts?: typeof DraftShape;
  specials?: typeof SpecialType;
  dots?: typeof DotStates;
} = forwardRef(
  ({
    dot,
    type,
    label,
    icon,
    iconClassName,
    draft,
    isDot = false,
    special,
    value = "0,96",
    badgeGroup = false,
    text
  }) => {
    return (
      <>
        {isDot && <div className={cx("badge", `badge--dot-${dot}`)} />}
        {badgeGroup && (
          <div className="badgeGroup">
            {label}
            <Icon
              iconType={Icon?.type.ICON_FONT}
              clickable={false}
              icon={icon}
              className={iconClassName}
              ignoreFocusStyle
            />
            {text}
          </div>
        )}
        {special && <div className={cx("badgeBase", `badgeBase--special-${special}`)}>{value}</div>}
        {draft && (
          <div className={cx("badgeBase", `badgeBase--draft-${draft}`)}>
            {<div className={cx("badge", `badge--dot-${dot}`)} />}
            <div className="draftLabel">{label}</div>
          </div>
        )}
        {type && (
          <div className={cx("badgeBase", `badgeBase--type-${type}`)}>
            {icon && (
              <Icon
                iconType={Icon?.type.ICON_FONT}
                clickable={false}
                icon={icon}
                className={iconClassName}
                ignoreFocusStyle
              />
            )}
            {label && (
              <div
                className={type === BadgeType.PRIMARY || type === BadgeType.PRIMARYCIRCLE ? "labelWhite" : "labelBlack"}
              >
                {label}
              </div>
            )}
          </div>
        )}
      </>
    );
  }
);

export default Badge;
