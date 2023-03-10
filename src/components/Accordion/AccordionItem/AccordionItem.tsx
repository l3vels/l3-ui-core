import cx from "classnames";
import React, { forwardRef, useCallback, useRef } from "react";
import L3ComponentProps from "src/types/L3ComponentProps";
import useMergeRefs from "../../../hooks/useMergeRefs";
import ExpandCollapse from "../../ExpandCollapse/ExpandCollapse";
import L3Component from "../../../types/L3Component";
import { ElementContent } from "../../../types/ElementContent";

interface AccordionItemProps extends L3ComponentProps {
  /**
   * Header title
   */
  title?: string;
  /**
   * The value of the expandable section
   */
  children?: ElementContent;
  /**
   * The expand icon font size
   */
  iconSize?: number | string;
  /**
   * On click callback
   */
  onClick?: () => void;
  open?: boolean;
  onClickAccordionCallback?: () => void;
}

const AccordionItem: L3Component<AccordionItemProps> = forwardRef(
  (
    { children = null, title = "", className = "", iconSize = 24, id, open, onClick, onClickAccordionCallback },
    ref
  ) => {
    // Change onClick param name to onClickCallback in 1.0.0
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const onClickCallback = useCallback(() => {
      onClickAccordionCallback && onClickAccordionCallback();
      onClick && onClick();
    }, [onClickAccordionCallback, onClick]);

    return (
      <div ref={mergedRef} className={cx("accordion-item", className)} id={id}>
        <ExpandCollapse
          iconSize={iconSize}
          id={`expand-collapse--${id}`}
          onClick={onClickCallback}
          open={open}
          title={title}
        >
          {children}
        </ExpandCollapse>
      </div>
    );
  }
);

export default AccordionItem;
