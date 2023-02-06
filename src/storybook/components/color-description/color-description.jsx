import cx from "classnames";
import { VisualDescription } from "../visual-description/visual-description";
import "./color-description.scss";

export const ColorDescription = ({ colorName, description, withBorder }) => {
  const color = (
    <div
      className={cx("l3-storybook-color-description", {
        "l3-storybook-color-description--with-border": withBorder
      })}
      style={{ background: `var(--${colorName})` }}
    />
  );
  return (
    <VisualDescription title={colorName} description={description}>
      {color}
    </VisualDescription>
  );
};
