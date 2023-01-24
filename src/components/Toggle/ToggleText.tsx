import React, { FC } from "react";
import { BASE_TOGGLE_CLASS_NAME } from "./ToggleConstants";
import l3ComponentProps from "../../types/l3ComponentProps";

interface ToggleTextProps extends l3ComponentProps {
  children: string;
}

const ToggleText: FC<ToggleTextProps> = ({ children }) => (
  <span className={`${BASE_TOGGLE_CLASS_NAME}_text`}>{children}</span>
);
export default ToggleText;
