import cx from "classnames";
import React, { forwardRef, ReactElement, useCallback, useMemo, useRef, useState } from "react";
import L3ComponentProps from "src/types/L3ComponentProps";
import useMergeRefs from "../../../hooks/useMergeRefs";
import L3Component from "../../../types/L3Component";
import "./Accordion.scss";

const COMPONENT_ID = "l3-accordion";

function defineChildId(index: number, props: { id: string }, accordionId: string) {
  if (props.id) {
    return props.id;
  }
  if (accordionId) {
    return `${accordionId}--item-${index}`;
  }
  return `${COMPONENT_ID}--item-${index}`;
}

interface AccordionProps extends L3ComponentProps {
  /**
   * List of AccordionItems
   */
  children?: Array<ReactElement> | ReactElement;
  /**
   * is allowed multiple opened accordion items
   */
  allowMultiple?: boolean;
  /**
   * Unique TestId - can be used as Selector for integration tests and other needs (tracking, etc.)
   */
  "data-testid"?: string;
  /**
   * Array of initial expanded indexes
   */
  defaultIndex?: Array<number>;
}

const Accordion: L3Component<AccordionProps> = forwardRef(
  (
    {
      children: originalChildren = null,
      allowMultiple = false,
      "data-testid": dataTestId = COMPONENT_ID,
      defaultIndex = [],
      className = "",
      id
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const [expandedItems, setExpandedItems] = useState(defaultIndex);

    const children = useMemo(() => React.Children.toArray(originalChildren), [originalChildren]);

    const isChildExpanded = useCallback(
      (itemIndex: number) => {
        return expandedItems.includes(itemIndex);
      },
      [expandedItems]
    );

    const onChildClick = useCallback(
      (itemIndex: number) => {
        if (allowMultiple) {
          const newExpandedItems = [...expandedItems];
          if (isChildExpanded(itemIndex)) {
            const index = newExpandedItems.indexOf(itemIndex);
            if (index > -1) {
              newExpandedItems.splice(index, 1);
            }
          } else {
            newExpandedItems.push(itemIndex);
          }
          setExpandedItems(newExpandedItems);
          return;
        }

        setExpandedItems([itemIndex]);
      },
      [isChildExpanded, expandedItems, allowMultiple]
    );

    const renderChildElements = useMemo(() => {
      return React.Children.map(children, (child: ReactElement, itemIndex) => {
        const originalProps = { ...child?.props };
        const childId = defineChildId(itemIndex, originalProps, id);
        return React.cloneElement(child, {
          ...originalProps,
          id: childId,
          onClickAccordionCallback: () => {
            onChildClick(itemIndex);
          },
          open: isChildExpanded(itemIndex)
        });
      });
    }, [children, id, isChildExpanded, onChildClick]);

    return (
      <div ref={mergedRef} className={cx("accordion", className)} data-testid={dataTestId} id={id}>
        {children && renderChildElements}
      </div>
    );
  }
);

export default Accordion;
