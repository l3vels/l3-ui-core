import cx from "classnames";
import "./paragraph.scss";

export const Paragraph = ({ children, className }) => (
  <p className={cx("l3-storybook-paragraph", className)}>{children}</p>
);

export default Paragraph;
