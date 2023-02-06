import { ColorsDescription } from "../../../components";

const colorKeys = [
  "color-border-primary",
  "color-border-secondary",
  "color-border-transparent",
  "border-selected-a",
  "border-selected-b",
  "color-border-state-disabled",
  "color-border-accent",
  "color-border-accent-light",
  "color-border-negative",
  "color-border-warning",
  "color-border-positive"
];

export const BorderColors = () => <ColorsDescription colorNames={colorKeys} />;
