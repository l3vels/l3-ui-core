/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface NavigateCheckProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const NegativeCheck: React.FC<NavigateCheckProps> = ({ size, ...props }) => (
  <>
    <div
      style={{
        width: "37.78px",
        height: "37.78px",
        border: "2px solid white",
        marginLeft: "-10px",
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
          padding: "15px"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none">
          <path
            d="M2.02255 3.41831C1.5771 3.41831 1.20437 3.26832 0.895277 2.96832C0.586186 2.66832 0.431641 2.29558 0.431641 1.85013C0.431641 1.40922 0.586186 1.03649 0.895277 0.745583C1.20437 0.454674 1.5771 0.304688 2.02255 0.304688C2.468 0.304688 2.83619 0.450129 3.12709 0.745583C3.42255 1.04104 3.568 1.40922 3.568 1.85013C3.568 2.29558 3.42255 2.66377 3.12709 2.96832C2.83164 3.26832 2.46346 3.41831 2.02255 3.41831ZM3.418 15.6956H0.604368V4.60015H3.418V15.6956Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </>
);
NegativeCheck.displayName = "NegativeCheck";
export default NegativeCheck;
/* tslint:enable */
/* eslint-enable */
