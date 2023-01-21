import React from "react";
import "./StoryWrapper.scss";
import cx from "classnames";

const StoryWrapper = ({ componentClassName, children }) => {
  return <div className={cx("l3-style-story-wrapper", componentClassName)}>{children}</div>;
};
StoryWrapper.propTypes = {};
StoryWrapper.defaultProps = {};
export default StoryWrapper;
