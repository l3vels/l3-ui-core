import WarningCheck from "../Icon/Icons/components/WarningCheck";
import PositiveCheck from "../Icon/Icons/components/PositiveCheck";
import NegativeCheck from "../Icon/Icons/components/NegativeCheck";

export enum ToastType {
  WARNING = "warning",
  POSITIVE = "positive",
  NEGATIVE = "negative"
}

export enum ToastActionType {
  LINK = "link",
  BUTTON = "Button"
}

export const defaultIconMap = {
  [ToastType.WARNING]: WarningCheck,
  [ToastType.POSITIVE]: PositiveCheck,
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
  LARGE = "25.67px"
}

export enum ToastArtWorkType {
  IMG = "img",
  ICON = "icon"
}
export enum ToastArtWorkSize {
  SMALL = "24px",
  LARGE = "48px"
}
