import React, { FC } from "react";
import cx from "classnames";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import { MenuTitleCaptionPosition, MenuTitleSize } from "./MenuTitleConstants";
import { L3ComponentProps } from "../../../types";
import "./MenuTitle.scss";
// import EditableHeading from "../../EditableHeading/EditableHeading";

interface MenuTitleProps extends L3ComponentProps {
  /** Backward compatibility for props naming **/
  classname?: string;
  caption?: string;
  captionPosition?: MenuTitleCaptionPosition;
  size?: MenuTitleSize;
  iconName?: string;
  titleEditable?: boolean;
}

const MenuTitle: FC<MenuTitleProps> & {
  positions?: typeof MenuTitleCaptionPosition;
  captionPositions?: typeof MenuTitleCaptionPosition;
  isMenuChild?: boolean;
  size?: typeof MenuTitleSize;
  iconName?: string;
  titleEditable?: boolean;
} = ({
  className,
  // Backward compatibility for props naming
  classname,
  caption = "",
  captionPosition = MenuTitle.positions.BOTTOM,
  id,
  size = MenuTitleSize.LARGE,
  titleEditable = false
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, classname]);
  const menutitleSizeClassName =
    size === "sm"
      ? "menu-title-size__sm"
      : size === "md"
      ? `menu-title-size__md`
      : size === "lg"
      ? `menu-title-size__lg`
      : size === "bg"
      ? `menu-title-size__bg`
      : "";

  const renderTitlteIconIfNeeded = () => {
    return (
      <div className="polygon-main-container">
        <svg className="svg">
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M0.405,0.022 C0.465,-0.007,0.535,-0.007,0.595,0.022 L0.822,0.133 C0.881,0.162,0.923,0.215,0.937,0.278 L0.995,0.536 C1,0.598,0.994,0.663,0.955,0.714 L0.795,0.918 C0.754,0.97,0.691,1,0.625,1 H0.375 C0.309,1,0.246,0.97,0.205,0.918 L0.045,0.714 C0.006,0.663,-0.009,0.598,0.005,0.536 L0.063,0.278 C0.077,0.215,0.119,0.162,0.178,0.133 L0.405,0.022,NaN f, i, l0 lNaN u, r, p, a0 i, n, tNaN r, a0 d, i, a0 lNaN"></path>
          </clipPath>
        </svg>

        <div className="clipped">
          <img src="https://picsum.photos/200" alt="title" />
        </div>
      </div>
    );
  };

  const renderCaptionIfNeeded = () => {
    if (caption) {
      // if (titleEditable) {
      //   return <EditableHeading type={EditableHeading.types.h2} value="H2 Header" highlightTerm="head" />;
      // }
      if (!titleEditable) {
        return (
          <>
            <label
              className={`l3-style-menu-title__caption l3-style-menu-title__caption--${captionPosition} ${menutitleSizeClassName}`}
              id={id}
              contentEditable={true}
            >
              {caption}
            </label>
          </>
        );
      }
    }
  };
  return (
    <div className={cx("l3-style-menu-title", overrideClassName)}>
      {renderTitlteIconIfNeeded()}
      {renderCaptionIfNeeded()}
    </div>
  );
};

Object.assign(MenuTitle, {
  positions: MenuTitleCaptionPosition,
  captionPositions: MenuTitleCaptionPosition,
  isMenuChild: true
});

export default MenuTitle;
