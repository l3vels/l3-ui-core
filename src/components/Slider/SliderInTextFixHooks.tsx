import React, { CSSProperties, ReactElement } from "react";
import Icon from "../../components/Icon/Icon";
import { InTextFixKind, SliderTextSize } from "./SliderConstants";
import { useSliderInfix, useSliderSelection } from "./SliderContext";
// import SelectionIndicator from "./SelectionIndicator";
import { IconType } from "../Icon/IconConstants";
import SelectionTextIndicator from "./SelectionTextIndicator";

const defaultIconProps = {
  clickable: false,
  iconSize: 18,
  ignoreFocusStyle: true
};

export function useSliderInTextFixComponent(
  kind: InTextFixKind,
  textSize: SliderTextSize
): [boolean, string[], ReactElement, CSSProperties] {
  const { textfix, indicateTextSelection, selectionIndicatorWidth } = useSliderInfix();
  const { ranged, value, valueText } = useSliderSelection();
  const inTextFix = kind === InTextFixKind.TEXTFIX && textfix;

  const isTextFix = kind === InTextFixKind.TEXTFIX;
  if (indicateTextSelection && (isTextFix || ranged)) {
    return [
      true,
      [],
      <SelectionTextIndicator key={kind} kind={kind} textSize={textSize} />,
      { width: selectionIndicatorWidth }
    ];
  }
  if (typeof inTextFix === "object" && (inTextFix as { icon: IconType }).icon) {
    const { icon, ...restIconProps } = inTextFix as { icon: IconType };
    const iconProps = { ...defaultIconProps, ...restIconProps };
    return [true, [], <Icon key="inTextFix-icon" icon={icon} {...iconProps} />, {}];
  }
  if (typeof inTextFix === "function") {
    return [true, [], inTextFix(value, valueText), {}];
  }
  if (typeof inTextFix === "string") {
    return [true, ["txt"], <>{inTextFix}</>, {}];
  }
  if (typeof inTextFix === "undefined") {
    return [false, [], null, {}];
  }
  return [true, [], <>{inTextFix}</>, {}];
}
