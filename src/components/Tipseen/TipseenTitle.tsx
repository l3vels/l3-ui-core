import React, { FC } from "react";
import cx from "classnames";
import { L3ComponentProps } from "../../types";
import styles from "./TipseenTitle.module.scss";

const BASE_CSS_CLASS = "l3-style-tipseen-title";

interface TipseenTitleProps extends L3ComponentProps {
  text?: string;
}

const TipseenTitle: FC<TipseenTitleProps> = ({ text, className }) => {
  return text ? (
    <span role="heading" aria-level={3} className={cx(styles.tipseenTitle, BASE_CSS_CLASS, className)}>
      {text}
    </span>
  ) : null;
};

export default TipseenTitle;
