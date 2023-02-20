/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface LocationProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Location: React.FC<LocationProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13635)">
      <path d="M20.0003 7.16663C14.8437 7.16663 10.667 11.3433 10.667 16.5C10.667 24.76 20.0003 32.8333 20.0003 32.8333C20.0003 32.8333 29.3337 24.76 29.3337 16.5C29.3337 11.3433 25.157 7.16663 20.0003 7.16663ZM20.0003 20C18.0637 20 16.5003 18.4366 16.5003 16.5C16.5003 14.5633 18.0637 13 20.0003 13C21.937 13 23.5003 14.5633 23.5003 16.5C23.5003 18.4366 21.937 20 20.0003 20Z"
        fill="#fff" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13635" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13635" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13635" result="effect2_dropShadow_718_13635" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13635" result="shape" />
      </filter>
    </defs>
  </svg>
);
Location.displayName = 'Location';
export default Location;
/* tslint:enable */
/* eslint-enable */
