import React, { useRef, forwardRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import L3ComponentProps from "../../types/L3ComponentProps";
import "./HiddenText.scss";

interface HiddenTextProps extends L3ComponentProps {
  text: string;
}

const HiddenText = forwardRef<HTMLSpanElement, HiddenTextProps>(({ text, className = "", id = "hiddenText" }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <span ref={mergedRef} id={id} className={cx("hidden-text--wrapper", className)}>
      {text}
    </span>
  );
});

export default HiddenText;
