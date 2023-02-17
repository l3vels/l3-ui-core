/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface CheckProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const WarningCheck: React.FC<CheckProps> = ({ size, ...props }) => (
  <div style={{ marginLeft: "-10px" }}>
    <div
      style={{
        width: "0px",
        height: "0px",
        borderWidth: "0 21px 30px 21px",
        borderStyle: "solid",
        borderColor: "transparent transparent white transparent",
        alignItems: "center",
        display: "flex"
      }}
    >
      <div
        style={{
          width: "0px",
          height: "0px",
          borderWidth: "0 16px 24px 16px",
          borderStyle: "solid",
          borderColor: "transparent transparent black transparent",
          marginTop: "32px",
          marginLeft: "-16px",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ marginLeft: "-2px", marginTop: "6px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="13" viewBox="0 0 4 13" fill="none">
            <path
              d="M1.9909 10.3969C2.33418 10.3969 2.63455 10.5256 2.89201 10.7831C3.14946 11.0406 3.27819 11.3409 3.27819 11.6842C3.27819 12.0275 3.14946 12.3279 2.89201 12.5853C2.63455 12.8428 2.33418 12.9715 1.9909 12.9715C1.64763 12.9715 1.30435 12.8428 1.0898 12.5853C0.832343 12.3279 0.703613 12.0275 0.703613 11.6842C0.703613 11.3409 0.832343 11.0406 1.0898 10.7831C1.34726 10.5256 1.64763 10.3969 1.9909 10.3969ZM1.00398 9.28127L0.832342 0.0556641H3.19237L2.97783 9.28127H1.00398Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
);
WarningCheck.displayName = "WarningCheck";
export default WarningCheck;
/* tslint:enable */
/* eslint-enable */
