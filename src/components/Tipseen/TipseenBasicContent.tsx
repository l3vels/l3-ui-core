import { FC } from "react";
import cx from "classnames";
import TipseenTitle from "./TipseenTitle";
import { l3ComponentProps } from "../../types";
import { ElementContent } from "../../types/ElementContent";
import styles from "./TipseenBasicContent.module.scss";

const BASE_CSS_CLASS = "l3-style-tipseen-basic-content";

interface TipseenBasicContentProps extends l3ComponentProps {
  title?: string;
  children?: ElementContent | ElementContent[];
}

const TipseenBasicContent: FC<TipseenBasicContentProps> = ({ title, children = null, className }) => {
  return (
    <div className={cx(styles.tipseenBasicContent, BASE_CSS_CLASS, className)}>
      <TipseenTitle text={title} />
      {children}
    </div>
  );
};

export default TipseenBasicContent;
