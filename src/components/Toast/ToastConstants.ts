import Info from "../Icon/Icons/components/Info";
import Check from "../Icon/Icons/components/Check";
import Alert from "../Icon/Icons/components/Alert";

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
  [ToastType.WARNING]: Info,
  [ToastType.POSITIVE]: Check,
  [ToastType.NEGATIVE]: Alert
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
