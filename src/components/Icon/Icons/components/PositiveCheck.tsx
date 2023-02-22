/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface PositiveCheckProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const PositiveCheck: React.FC<PositiveCheckProps> = ({ size, ...props }) => (
  <>
    <div
      style={{
        width: "37.78px",
        height: "37.78px",
        border: "2px solid white",
        marginLeft: "-10px",
        marginRight: "10px",
        borderRadius: "50%",
        alignItems: "center",
        display: "flex"
      }}
    >
      <div
        style={{
          width: "33.9px",
          height: "33.9px",
          borderRadius: "50%",
          background: "black",
          alignItems: "center",
          display: "flex",
          margin: 0,
          padding: "10px"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path
            d="M5.9268 11.9725L0.865723 6.9114L2.68746 5.08966L5.9268 8.329L13.3163 0.939453L15.1381 2.76119L5.9268 11.9725Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </>
);
PositiveCheck.displayName = "PositiveCheck";
export default PositiveCheck;
/* tslint:enable */
/* eslint-enable */
