import WarningCheckIcon from "./IconComponents/WarningCheckIcon";
import PositiveCheckIcon from "./IconComponents/PositiveCheckIcon";
import NegativeCheck from "./IconComponents/NegativeCheckIcon";

export enum ToastType {
  WARNING = "warning",
  POSITIVE = "positive",
  NEGATIVE = "negative",
  NORMAL = "normal"
}

export enum ToastActionType {
  LINK = "link",
  BUTTON = "Button"
}

export const defaultIconMap = {
  [ToastType.WARNING]: WarningCheckIcon,
  [ToastType.POSITIVE]: PositiveCheckIcon,
  [ToastType.NORMAL]: PositiveCheckIcon,
  [ToastType.NEGATIVE]: NegativeCheck
};

export type ToastAction = {
  type: ToastActionType;
  content?: string;
  text?: string;
  href?: string;
};

export enum ToastIconSize {
  SMALL = "14.67px",
  MEDIUM = "19.67px",
  LARGE = "26px"
}

export enum ToastArtWorkType {
  IMG = "img",
  ICON = "icon"
}
export enum ToastArtWorkSize {
  SMALL = "24px",
  LARGE = "48px"
}

export enum ToastCloseButtonColor {
  WHITE = "white",
  GRAY = "gray"
}

export enum ToastPosition {
  TOP_LEFT = "top-left",
  TOP_RIGHT = "top-right",
  BOTTOM_LEFT = "bottom-left",
  BOTTOM_RIGHT = "bottom-right"
}
