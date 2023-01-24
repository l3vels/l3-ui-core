/* eslint-disable react/jsx-props-no-spreading */
import React, { cloneElement, CSSProperties, ReactElement, useCallback, useRef } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import useOnClickOutside from "../../../hooks/useClickOutside";
import { chainFunctions, NOOP } from "../../../utils/function-utils";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { HideShowEvent } from "../consts/dialog-show-hide-event";
import { l3Component, l3ComponentProps } from "../../../types";
import { ESCAPE_KEYS } from "../../../constants";
import * as PopperJS from "@popperjs/core";
import "./DialogContent.scss";

const transitionOptions: { classNames?: string } = {};
const EMPTY_OBJECT = {};

export interface DialogContentProps extends l3ComponentProps {
  children?: ReactElement | ReactElement[];
  position?: PopperJS.Placement;
  wrapperClassName?: string;
  isOpen?: boolean;
  startingEdge?: any;
  animationType?: string;
  onEsc?: (event: React.KeyboardEvent) => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
  onClickOutside?: (event: React.MouseEvent, hideShowEvent: HideShowEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
  showDelay?: number;
  styleObject?: CSSProperties;
  isReferenceHidden?: boolean;
  hasTooltip?: boolean;
  disableOnClickOutside?: boolean; // TODO prop is passsed, but not used. How it should behave?
}

export const DialogContent: l3Component<DialogContentProps> = React.forwardRef(
  (
    {
      onEsc = NOOP,
      children,
      position,
      wrapperClassName,
      isOpen = false,
      startingEdge,
      animationType = "expand",
      onMouseEnter = NOOP,
      onMouseLeave = NOOP,
      onClickOutside = NOOP,
      onClick = NOOP,
      showDelay,
      styleObject = EMPTY_OBJECT,
      isReferenceHidden,
      hasTooltip = false
    },
    forwardRef
  ) => {
    const ref = useRef(null);
    const onOutSideClick = useCallback(
      (event: React.MouseEvent) => {
        if (isOpen) {
          return onClickOutside(event, HideShowEvent.CLICK_OUTSIDE);
        }
      },
      [isOpen, onClickOutside]
    );
    useKeyEvent({ keys: ESCAPE_KEYS, callback: onEsc });
    useOnClickOutside({ callback: onOutSideClick, ref });

    if (animationType) {
      transitionOptions.classNames = `l3-style-animation-${animationType}`;
    }
    return (
      <span
        className={classNames("l3-style-dialog-content-wrapper", wrapperClassName)}
        ref={forwardRef}
        style={styleObject}
        onClickCapture={onClick}
        data-popper-reference-hidden={isReferenceHidden}
      >
        <CSSTransition {...transitionOptions} in={isOpen} appear={!!animationType} timeout={showDelay}>
          <div
            className={classNames("l3-style-dialog-content-component", position, {
              [`edge-${startingEdge}`]: startingEdge,
              "has-tooltip": hasTooltip
            })}
            ref={ref}
          >
            {React.Children.toArray(children).map((child: ReactElement) => {
              return cloneElement(child, {
                onMouseEnter: chainFunctions([child.props.onMouseEnter, onMouseEnter]),
                onMouseLeave: chainFunctions([child.props.onMouseLeave, onMouseLeave])
              });
            })}
          </div>
        </CSSTransition>
      </span>
    );
  }
);
