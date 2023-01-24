import cx from "classnames";
import React, { forwardRef, useCallback } from "react";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { NOOP } from "../../utils/function-utils";
import Icon from "../Icon/Icon";
import { IconPosition, LinkTarget } from "./LinkConsts";
import { SubIcon, l3Component, l3ComponentProps } from "../../types";
import "./Link.scss";

export interface LinkProps extends l3ComponentProps {
  /** Backward compatibility for props naming */
  componentClassName?: string;
  /** Specifies the location (URL) of the external resource */
  href?: string;
  /** The link text */
  text?: string;
  /** Defines the relationship between a linked resource and the current document */
  rel?: string;
  /** onClick function - MouseEvent */
  onClick?: (event: React.MouseEvent) => void;
  /** Specifies where to open the linked document */
  target?: LinkTarget;
  /** Aria label description */
  ariaLabelDescription?: string;
  /** element id to describe the counter accordingly */
  ariaLabeledBy?: string;
  /** Icon to add to the link element */
  icon?: SubIcon;
  /** the position of the icon in relation to the etext */
  iconPosition?: IconPosition;
  /** disable navigation */
  disableNavigation?: boolean;
  /** inherit text size */
  inheritFontSize?: boolean;
  /** if the link is in part of other text content */
  inlineText?: boolean;
}

const Link: l3Component<LinkProps, HTMLAnchorElement> & {
  targets?: typeof LinkTarget;
  target?: typeof LinkTarget;
  iconPositions?: typeof IconPosition;
  position?: typeof IconPosition;
} = forwardRef(
  (
    {
      className,
      componentClassName,
      href,
      text,
      rel,
      onClick,
      target,
      ariaLabelDescription,
      icon,
      iconPosition,
      id,
      ariaLabeledBy,
      disableNavigation,
      inheritFontSize,
      inlineText
    },
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
    const isStart = iconPosition === IconPosition.START;

    const onClickWrapper = useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        if (disableNavigation) {
          e.preventDefault();
        }
        onClick && onClick(e);
      },
      [disableNavigation, onClick]
    );

    return (
      <a
        id={id}
        href={href}
        rel={rel}
        ref={ref}
        onClick={onClickWrapper}
        target={target}
        className={cx("l3-style-link", overrideClassName, {
          "inherit-font-size": inheritFontSize,
          "inline-text": inlineText
        })}
        aria-label={ariaLabelDescription}
        aria-labelledby={ariaLabeledBy}
      >
        {getIcon(isStart, icon, "l3-style-link--icon-start")}
        <span className="l3-style-link--text">{text}</span>
        {getIcon(!isStart, icon, "l3-style-link--icon-end")}
      </a>
    );
  }
);

function getIcon(shouldShow: boolean, icon: string | React.FunctionComponent | null, className: string) {
  if (!shouldShow) return;
  return <Icon className={className} clickable={false} icon={icon} iconType={Icon.type.ICON_FONT} />;
}

Object.assign(Link, {
  position: IconPosition,
  target: LinkTarget,
  iconPositions: IconPosition,
  targets: LinkTarget
});

Link.defaultProps = {
  id: "",
  className: undefined,
  href: "",
  text: "",
  rel: "noreferrer",
  onClick: NOOP,
  target: Link.targets?.NEW_WINDOW,
  ariaLabelDescription: "",
  icon: "",
  iconPosition: Link.position?.START,
  ariaLabeledBy: "",
  disableNavigation: false,
  inheritFontSize: false,
  inlineText: false
};

export default Link;
