import { ColorsDescription } from "../../../components";

const colorKeys = [
  "color-core-background-primary",
  "color-core-background-secondary",
  "color-core-background-tertiary",
  "color-background-state-disabled",
  "color-background-overlay-art",
  "color-background-overlay-dark",
  "color-background-overlay-light",
  "color-background-accent",
  "color-background-negative",
  "color-background-warning",
  "color-background-positive",
  "color-background-light-accent",
  "color-background-light-negative",
  "color-background-light-warning",
  "color-background-light-positive",
  "color-background-always-dark",
  "color-background-always-white",
  "color-background-primary",
  "color-background-secondary"
];

export const BackgroundColors = () => <ColorsDescription colorNames={colorKeys} />;
