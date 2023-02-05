import { ColorsDescription } from "../../../components";

const colorKeys = [
  "color-primary-a",
  "color-primary-b",
  "color-accent",
  "color-negative",
  "color-warning",
  "color-positive"
];

export const SemanticColors = () => <ColorsDescription colorNames={colorKeys} />;
