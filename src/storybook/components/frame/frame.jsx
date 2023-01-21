import cx from "classnames";
import "./frams.scss";

export const Frame = ({ children, className, noGutter, noBorder }) => (
  <div
    className={cx("l3-storybook-frame", className, {
      "l3-storybook-frame--no-gutter": noGutter,
      "l3-storybook-frame--no-border": noBorder
    })}
  >
    {children}
  </div>
);

export default Frame;
