import React, { forwardRef } from "react";
import Clickable from "./Clickable";
import l3ComponentProps from "../../types/l3ComponentProps";
import l3Component from "../../types/l3Component";
import { ClickableProps } from "../Clickable/Clickable";
interface ClickableWrapperProps extends l3ComponentProps {
  children: React.ReactNode;
  isClickable: boolean;
  clickableProps: ClickableProps;
}

const ClickableWrapper: l3Component<ClickableWrapperProps, HTMLElement> = forwardRef(
  ({ children, isClickable = true, clickableProps = {} }, ref) => {
    if (!isClickable) {
      return <>{children}</>;
    }

    return (
      <Clickable {...clickableProps} ref={ref}>
        {children}
      </Clickable>
    );
  }
);

export default ClickableWrapper;
