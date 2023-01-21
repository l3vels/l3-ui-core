import cx from "classnames";
import "./component-name.scss";

export const ComponentName = ({ children, className, withFoundationBackground = false }) => {
  return (
    <h1
      className={cx("l3-storybook-component-name", className, {
        "l3-storybook-component-name--foundation": withFoundationBackground
      })}
    >
      {children}
    </h1>
  );
};

export default ComponentName;
