import React, { AriaRole, forwardRef } from "react";
import classNames from "classnames";
import { SubIcon, l3Component, l3ComponentProps } from "../../../types";

interface FontIconProps extends l3ComponentProps {
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  "aria-label"?: string;
  tabIndex?: number;
  icon?: SubIcon;
  role?: AriaRole;
  "aria-hidden"?: boolean;
}

const FontIcon: l3Component<FontIconProps, HTMLElement> = forwardRef(
  (
    {
      id,
      className,
      onClick,
      "aria-label": iconLabel,
      tabIndex,
      icon: Icon,
      role = "img",
      "aria-hidden": ariaHidden,
      "data-testid": dataTestId
    },
    iconRef
  ) => {
    const isIconFunction = typeof Icon === "function";
    const iconClassName = isIconFunction ? "" : Icon;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <span
        aria-hidden={ariaHidden}
        className={classNames(className, "fa", iconClassName)}
        onClick={onClick}
        ref={iconRef}
        aria-label={iconLabel}
        tabIndex={tabIndex}
        role={role}
        id={id}
        data-testid={dataTestId}
      >
        {isIconFunction && <Icon />}
      </span>
    );
  }
);
export default FontIcon;
