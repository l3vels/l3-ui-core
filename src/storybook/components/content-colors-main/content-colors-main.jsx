import { useMemo } from "react";
import { ColorsDescription } from "../colors-description/colors-description";

export const ContentColorsMain = () => {
  const colorKeys = useMemo(
    () => [
      "color-content-primary",
      "color-content-secondary",
      "color-content-tertiary",
      "color-content-quaternary",
      "color-content-state-disabled",
      "color-content-on-color",
      "color-content-on-color-inverse",
      "color-content-accent",
      "color-content-negative",
      "color-content-warning",
      "color-content-positive"
    ],
    []
  );
  return <ColorsDescription colorNames={colorKeys} />;
};

export default ContentColorsMain;
