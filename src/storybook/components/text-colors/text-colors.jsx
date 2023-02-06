import { useMemo } from "react";
import { ColorsDescription } from "../colors-description/colors-description";

export const TextColors = () => {
  const colorKeys = useMemo(
    () => ["color-primary-a", "color-primary-b", "color-accent", "color-negative", "color-warning", "color-positive"],
    []
  );
  return <ColorsDescription colorNames={colorKeys} />;
};

export default TextColors;
