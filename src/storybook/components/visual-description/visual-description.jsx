import cx from "classnames";
import "./visual-description.scss";

export const VisualDescription = ({ title, ariaLabel, children, description, className }) => {
  return (
    <div className={cx("l3-storybook-visual-description", className)} aria-label={ariaLabel}>
      <figure className="l3-storybook-visual-description_visual" aria-hidden>
        {children}
      </figure>
      <section className="l3-storybook-visual-description_text">
        <h5 className="l3-storybook-visual-description_title">{title}</h5>
        {description}
      </section>
    </div>
  );
};

export default VisualDescription;
