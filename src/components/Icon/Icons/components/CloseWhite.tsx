/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface CloseWhiteProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const CloseWhite: React.FC<CloseWhiteProps> = ({ size, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.505077 0.292893C0.895601 -0.0976311 1.52877 -0.0976311 1.91929 0.292893L8 6.3736L14.0807 0.292893C14.4712 -0.0976311 15.1044 -0.0976311 15.4949 0.292893C15.8855 0.683418 15.8855 1.31658 15.4949 1.70711L9.41421 7.78782L15.7071 14.0807C16.0976 14.4712 16.0976 15.1044 15.7071 15.4949C15.3166 15.8854 14.6834 15.8854 14.2929 15.4949L8 9.20203L1.70711 15.4949C1.31658 15.8854 0.683417 15.8854 0.292893 15.4949C-0.0976311 15.1044 -0.0976311 14.4712 0.292893 14.0807L6.58579 7.78782L0.505077 1.70711C0.114552 1.31658 0.114553 0.683418 0.505077 0.292893Z"
      fill="white"
      fill-opacity="0.8"
    />
  </svg>
);
CloseWhite.displayName = "CloseWhite";
export default CloseWhite;
/* tslint:enable */
/* eslint-enable */
