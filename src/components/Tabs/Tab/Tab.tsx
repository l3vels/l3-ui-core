/* eslint-disable jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events */
import React, { FC, forwardRef, ReactElement, useRef } from "react";
import { noop as NOOP } from "lodash-es";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import Icon, { IconSubComponentProps } from "../../Icon/Icon";
import l3ComponentProps from "../../../types/l3ComponentProps";
import { IconType } from "../../Icon/IconConstants";
import "./Tab.scss";

export interface TabProps extends l3ComponentProps {
  value?: number;
  disabled?: boolean;
  active?: boolean;
  focus?: boolean;
  icon?: string | React.FunctionComponent<IconSubComponentProps> | null;
  iconType?: IconType;
  iconSide?: string;
  onClick?: (value: number) => void;
  children?: string | ReactElement[];
}

const Tab: FC<TabProps> = forwardRef(
  (
    {
      className,
      id,
      value = 0,
      disabled = false,
      active = false,
      focus = false,
      onClick = NOOP,
      icon,
      iconType,
      iconSide = "left",
      children
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    function renderIconAndChildren() {
      if (!icon) return children;

      const iconElement = (
        <Icon
          clickable={false}
          ariaHidden={true}
          iconType={iconType}
          icon={icon}
          className={cx("tab-icon", iconSide)}
          iconSize={18}
          ignoreFocusStyle
        />
      );

      if (iconSide === "left") {
        return [iconElement, ...children];
      }

      return [...children, iconElement];
    }
    return (
      <li
        ref={mergedRef}
        key={id}
        className={cx("tab--wrapper", className, {
          active,
          disabled,
          "tab-focus-visible-inset": focus
        })}
        id={id}
        role="tab"
        aria-selected={active}
        aria-disabled={disabled}
      >
        <a className="tab-inner" onClick={() => !disabled && onClick(value)}>
          {renderIconAndChildren()}
        </a>
      </li>
    );
  }
);

export default Tab;
