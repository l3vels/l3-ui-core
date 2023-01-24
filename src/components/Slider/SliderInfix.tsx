import React, { FC } from "react";
import { InfixKind } from "./SliderConstants";
import { bem } from "./SliderHelpers";
import { useSliderInfixComponent } from "./SliderInfixHooks";
import l3ComponentProps from "../../types/l3ComponentProps";

interface SliderInfixProps extends l3ComponentProps {
  /**
   * kind (type/mode) of Infix prefix/postfix
   * Infix - additional inserted by Consumer - component/string/number etc.
   */
  kind?: InfixKind;
}

const SliderInfix: FC<SliderInfixProps> & { kinds?: typeof InfixKind } = ({ kind = SliderInfix.kinds.PREFIX }) => {
  const [isShow, modificators, InfixComponent, inlineStyle] = useSliderInfixComponent(kind);
  return (
    isShow && (
      <div className={bem("infix", [...modificators, kind])} style={inlineStyle}>
        {InfixComponent}
      </div>
    )
  );
};

SliderInfix.kinds = InfixKind;

Object.assign(SliderInfix, {
  kinds: InfixKind
});

export default SliderInfix;
