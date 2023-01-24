import React, { FunctionComponent, useCallback, AriaRole, Ref } from "react";
import cx from "classnames";
import SVG from "react-inlinesvg";
import useIconScreenReaderAccessProps from "../../../hooks/useIconScreenReaderAccessProps";
import l3ComponentProps from "../../../types/l3ComponentProps";

function modifySvgCode(svg: string, color = "currentColor") {
  return svg.replace(/fill=".*?"/g, `fill="${color}"`);
}

interface CustomSvgIconProps extends l3ComponentProps {
  onClick?: (event: React.MouseEvent) => void;
  src: string | object;
  ariaLabel?: string;
  tabIndex?: number;
  role?: AriaRole;
  ariaHidden?: boolean;
  clickable?: boolean;
  replaceToCurrentColor?: boolean;
  customColor?: string;
  ref?: Ref<SVGElement>;
}

const CustomSvgIcon: FunctionComponent<CustomSvgIconProps> = ({
  className,
  ref,
  src,
  onClick,
  clickable,
  ariaLabel,
  ariaHidden,
  replaceToCurrentColor = false,
  customColor,
  "data-testid": dataTestId
}) => {
  const screenReaderAccessProps = useIconScreenReaderAccessProps({
    isClickable: clickable,
    label: ariaLabel,
    isDecorationOnly: ariaHidden
  });

  const svgProcessor = useCallback(
    (svg: string) => {
      if (replaceToCurrentColor) return modifySvgCode(svg, "currentColor");
      if (customColor) return modifySvgCode(svg, customColor);
      return svg;
    },
    [replaceToCurrentColor, customColor]
  );

  if (typeof src !== "string") return null;

  return (
    <SVG
      innerRef={ref}
      {...screenReaderAccessProps}
      onClick={onClick}
      src={src}
      className={cx("l3-style-custom-svg-icon--wrapper", className)}
      preProcessor={svgProcessor}
      data-testid={dataTestId}
    />
  );
};

export default CustomSvgIcon;
