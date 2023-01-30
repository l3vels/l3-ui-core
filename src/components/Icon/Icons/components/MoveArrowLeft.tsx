/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface MoveArrowLeftProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const MoveArrowLeft: React.FC<MoveArrowLeftProps> = ({ size, ...props }) => (
  <svg
    width={size || "6"}
    height={size || "10"}
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 8.75L0.75 5L4.5 1.25"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
MoveArrowLeft.displayName = "MoveArrowLeft";
export default MoveArrowLeft;
/* tslint:enable */
/* eslint-enable */
