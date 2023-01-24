import React, { FC, useMemo } from "react";
import cx from "classnames";
import { calculatePercentage } from "../LinearProgressBarHelpers";
import L3ComponentProps from "src/types/L3ComponentProps";
import { ProgressBarStyle } from "../LinearProgressBarConstants";

interface BarProps extends L3ComponentProps {
  /**
   * Determine the progress bar style (Supported options exposed through `LinearProgressBar.styles`).
   */
  barStyle?: ProgressBarStyle;
  /**
   * The progress bar starting value.
   */
  min?: number;
  /**
   * The progress bar ending value.
   */
  max?: number;
  /**
   * The progress bar current value.
   */
  value?: number;
  /**
   * If set to *true*, animations are used.
   */
  animated?: boolean;
  /**
   * Set external styling to the progress bar.
   */
  className?: string;
  baseClass?: string;
  barLabelName?: string;
  color?: string;
}

const Bar: FC<BarProps> = ({ value, baseClass, barStyle, animated, min, max, color, barLabelName }) => {
  const classNames = useMemo(() => {
    return cx(baseClass, `${baseClass}--${barStyle}`, {
      [`${baseClass}--animate`]: animated
    });
  }, [barStyle, animated, baseClass]);

  const valuePercentage = useMemo(() => {
    if (value === null || value === undefined) return 0;
    return calculatePercentage(value, min, max);
  }, [value, min, max]);

  if (!value) return null;

  return (
    <div
      role="progressbar"
      aria-label={barLabelName}
      aria-valuenow={valuePercentage}
      aria-valuemin={0}
      aria-valuemax={100}
      className={classNames}
      style={{
        width: `${valuePercentage}%`,
        ...(color && { backgroundColor: color })
      }}
    />
  );
};

export default Bar;
