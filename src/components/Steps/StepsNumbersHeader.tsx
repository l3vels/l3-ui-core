import React, { FC } from "react";
import { STEPS_CSS_BASE_CLASS } from "./StepsConstants";
import L3ComponentProps from "../../types/L3ComponentProps";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-header_numbers`;

export interface StepsNumbersHeaderProps extends L3ComponentProps {
  activeStepIndex: number;
  stepsCount: number;
}

export const StepsNumbersHeader: FC<StepsNumbersHeaderProps> = ({ activeStepIndex, stepsCount }) => {
  return <div className={CSS_BASE_CLASS}>{`${activeStepIndex + 1} \\ ${stepsCount}`}</div>;
};
