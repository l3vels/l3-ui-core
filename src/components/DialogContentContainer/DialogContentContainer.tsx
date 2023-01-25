import React, { useRef, forwardRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { BEMClass } from "../../helpers/bem-helper";
import L3ComponentProps from "src/types/L3ComponentProps";
import L3Component from "src/types/L3Component";
import { DialogSize, DialogType } from "./DialogContentContainerConstants";
import "./DialogContentContainer.scss";

interface DialogContentContainerProps extends L3ComponentProps {
  children?: React.ReactNode;
  className?: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  type?: DialogType;
  size?: DialogSize;
  style?: React.CSSProperties;
}

const bemHelper = BEMClass("dialog-content-container");

const DialogContentContainer: L3Component<DialogContentContainerProps> & {
  types?: typeof DialogType;
  sizes?: typeof DialogSize;
} = forwardRef(
  (
    {
      className = "",
      ariaLabelledby = "",
      ariaDescribedby = "",
      type = DialogType.POPOVER,
      size = DialogSize.MEDIUM,
      children,
      style
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <div
        role="dialog"
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        ref={mergedRef}
        style={style}
        className={cx("dialog-content-container", className, bemHelper({ state: type }), bemHelper({ state: size }))}
      >
        {children}
      </div>
    );
  }
);

Object.assign(DialogContentContainer, {
  types: DialogType,
  sizes: DialogSize
});

export default DialogContentContainer;
