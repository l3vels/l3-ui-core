import React, { FC } from "react";
import { InTextFixKind, SliderTextSize } from "./SliderConstants";
import { bem } from "./SliderHelpers";
// import { useSliderInfixComponent } from "./SliderInfixHooks";
import L3ComponentProps from "../../types/L3ComponentProps";
import { useSliderInTextFixComponent } from "./SliderInTextFixHooks";

interface SliderInTextFixProps extends L3ComponentProps {
  /**
   * kind (type/mode) of Infix prefix/postfix
   * Infix - additional inserted by Consumer - component/string/number etc.
   */
  kind?: InTextFixKind;
  textSize?: SliderTextSize;
}

const SliderInTextFix: FC<SliderInTextFixProps> & {
  kinds?: typeof InTextFixKind;
  textSizes?: typeof SliderTextSize;
} = ({ kind = SliderInTextFix.kinds.TEXTFIX, textSize = SliderTextSize.SMALL }) => {
  const [isShow, modificators, InfixComponent, inlineStyle] = useSliderInTextFixComponent(kind, textSize);
  return (
    isShow && (
      <div className={bem("", [...modificators, kind, textSize])} style={inlineStyle}>
        {InfixComponent}
      </div>
    )
  );
};

SliderInTextFix.kinds = InTextFixKind;
SliderInTextFix.textSizes = SliderTextSize;

Object.assign(SliderInTextFix, {
  kinds: InTextFixKind,
  sizes: SliderTextSize
});

export default SliderInTextFix;
