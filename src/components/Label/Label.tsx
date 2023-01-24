import React, { useMemo } from "react";
import cx from "classnames";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import Leg from "./Leg";
import "./Label.scss";
import L3ComponentProps from "../../types/L3ComponentProps";

const LABEL_TYPES = {
  FILL: "fill",
  LINE: "line"
} as const;

const LABEL_COLORS = {
  PRIMARY: "primary",
  DARK: "dark",
  NEGATIVE: "negative",
  POSITIVE: "positive"
} as const;

type LabelTypes = typeof LABEL_TYPES;
type LabelColors = typeof LABEL_COLORS;

interface LabelProps extends L3ComponentProps {
  wrapperClassName?: string;
  kind?: LabelTypes[keyof LabelTypes];
  color?: LabelColors[keyof LabelColors];
  text?: string;
  isAnimationDisabled?: boolean;
  isLegIncluded?: boolean;
}

const Label = ({
  className,
  wrapperClassName,
  kind = LABEL_TYPES.FILL,
  color = LABEL_COLORS.PRIMARY,
  text = "",
  isAnimationDisabled = false,
  isLegIncluded = false
}: LabelProps) => {
  const overrideClassName = backwardCompatibilityForProperties([className, wrapperClassName]) as string;
  const classNames = useMemo(
    () =>
      cx("l3-style-label", `l3-style-label--kind-${kind}`, `l3-style-label--color-${color}`, {
        "l3-style-label--with-animation": !isAnimationDisabled,
        "l3-style-label--with-leg": isLegIncluded
      }),
    [kind, color, isAnimationDisabled, isLegIncluded]
  );
  return (
    <span className={overrideClassName}>
      <div className={classNames}>
        <span>{text}</span>
        <span className="l3-style-label__leg-wrapper">{isLegIncluded ? <Leg /> : null}</span>
      </div>
    </span>
  );
};

Label.colors = LABEL_COLORS;
Label.kinds = LABEL_TYPES;

export default Label;
