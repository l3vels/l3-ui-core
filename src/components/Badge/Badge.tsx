import { forwardRef } from "react";
import { L3Component, L3ComponentProps } from "../../types";
import { DotStates } from "./BadgeConstants";
import cx from "classnames";
import "./Badge.scss";

interface BadgeProps extends L3ComponentProps {
  dot?: DotStates;
}

const Badge: L3Component<BadgeProps, HTMLElement> = forwardRef(({ dot = "accent" }) => {
  const badgeClassName = cx("badge", { badge_positive: dot === "positive", badge_warning: dot === "warning" });

  return <div className={badgeClassName}></div>;
});

export default Badge;
