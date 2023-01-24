import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import L3ComponentProps from "../../types/L3ComponentProps";
import "./ListTitle.scss";

export interface ListTitleProps extends L3ComponentProps {
  tabIndex?: number;
  children?: string;
}

const ListTitle: React.FC<ListTitleProps> = forwardRef(({ className, id, children, tabIndex }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div
      aria-level={3}
      tabIndex={tabIndex}
      role="heading"
      ref={mergedRef}
      className={cx("list-title", className)}
      id={id}
    >
      {children}
    </div>
  );
});

Object.assign(ListTitle, {
  // Used by VirtualizedListItems
  displayName: "ListTitle"
});

export default ListTitle;
