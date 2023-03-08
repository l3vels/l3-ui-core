import React, { FC, useMemo } from "react";
import { debounce } from "lodash-es";
// import TextField from "../TextField/TextField";
import { useSliderActions, useSliderSelection } from "./SliderContext";
import cx from "classnames";
import { InTextFixKind, SliderTextSize } from "./SliderConstants";
import L3ComponentProps from "../../types/L3ComponentProps";
import "../Slider/Slider.scss";

const VALUE_UPDATE_DELAY = 300;

function getCurrentLabel(isTextFix: boolean, ranged: boolean, value: number | number[], valueText: string | string[]) {
  if (!ranged) {
    return [value as number, valueText as string];
  }
  if (isTextFix) {
    return [(value as number[])[1], (valueText as string[])[1]];
  }
  return [(value as number[])[0], (valueText as string[])[0]];
}

function parseValue(valueText: string) {
  return valueText.replace(/\D/g, "");
}

export interface SelectionTextIndicatorProps extends L3ComponentProps {
  kind?: InTextFixKind;
  key?: InTextFixKind;
  textSize?: SliderTextSize;
  className?: string;
}

const SelectionTextIndicator: FC<SelectionTextIndicatorProps> & {
  textSizes?: typeof SliderTextSize;
} = ({ kind = InTextFixKind.TEXTFIX, textSize, className }) => {
  const isTextFix = kind === InTextFixKind.TEXTFIX;
  const { ranged, value, valueText } = useSliderSelection();
  const [, currentTextValue] = getCurrentLabel(isTextFix, ranged, value, valueText);
  const { changeThumbValue } = useSliderActions();
  const handleChange = useMemo(
    () =>
      debounce(newValueText => {
        const newValue = parseValue(newValueText);
        const thumbIndex = isTextFix ? 1 : 0;
        changeThumbValue(newValue, thumbIndex, true);
      }, VALUE_UPDATE_DELAY),
    [changeThumbValue, isTextFix]
  );
  const classNames = useMemo(
    () => cx("sliderText", `sliderText--textSize-${textSize}`, className),
    [textSize, className]
  );
  console.log(classNames);
  return <input disabled type="text" className={classNames} onChange={handleChange} value={String(currentTextValue)} />;
};

export default SelectionTextIndicator;
