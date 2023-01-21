import cx from "classnames";
import "./multiple-story-elements-wrapper.scss";

export const MultipleStoryElementsWrapper = ({ className, children }) => {
  return (
    <div className={cx("l3-storybook_multiple-story-elements-wrapper", className)}>
      <div data-testid="focusTrap" className="l3-storybook_focus-trap" />
      {children}
    </div>
  );
};

export default MultipleStoryElementsWrapper;
