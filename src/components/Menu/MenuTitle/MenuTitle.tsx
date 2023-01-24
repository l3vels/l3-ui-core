import React, { FC } from "react";
import cx from "classnames";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import { MenuTitleCaptionPosition } from "./MenuTitleConstants";
import { L3ComponentProps } from "../../../types";
import "./MenuTitle.scss";

interface MenuTitleProps extends L3ComponentProps {
  /** Backward compatibility for props naming **/
  classname?: string;
  caption?: string;
  captionPosition?: MenuTitleCaptionPosition;
}

const MenuTitle: FC<MenuTitleProps> & {
  positions?: typeof MenuTitleCaptionPosition;
  captionPositions?: typeof MenuTitleCaptionPosition;
  isMenuChild?: boolean;
} = ({
  className,
  // Backward compatibility for props naming
  classname,
  caption = "",
  captionPosition = MenuTitle.positions.BOTTOM,
  id
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, classname]);
  const renderCaptionIfNeeded = () => {
    if (caption) {
      return (
        <label className={`l3-style-menu-title__caption l3-style-menu-title__caption--${captionPosition}`} id={id}>
          {caption}
        </label>
      );
    }
  };
  return <div className={cx("l3-style-menu-title", overrideClassName)}>{renderCaptionIfNeeded()}</div>;
};

Object.assign(MenuTitle, {
  positions: MenuTitleCaptionPosition,
  captionPositions: MenuTitleCaptionPosition,
  isMenuChild: true
});

export default MenuTitle;
