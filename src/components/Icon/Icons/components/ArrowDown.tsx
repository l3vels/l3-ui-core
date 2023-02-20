/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ArrowDownProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ArrowDown: React.FC<ArrowDownProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13605)">
      <path d="M20.001 7.78894C13.4361 7.78894 8.00098 13.2162 8.00098 19.79C8.00098 26.3521 13.4361 31.7889 20.001 31.7889C26.5753 31.7889 32.001 26.3617 32.001 19.7995C32.001 13.2257 26.5753 7.78894 20.001 7.78894ZM14.233 18.8426C13.8913 18.4734 13.8723 17.7815 14.2003 17.4419C14.6148 17.0296 15.2478 17.0495 15.619 17.4345L20.001 22.0853L24.3618 17.4345C24.7331 17.0358 25.3955 17.0453 25.7784 17.4577C26.1297 17.8289 26.1264 18.4344 25.7456 18.8426L21.2345 23.631C20.574 24.3495 19.4069 24.3495 18.7464 23.631L14.233 18.8426Z"
        fill="#fff" fillRule="evenodd" clipRule="evenodd" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13605" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13605" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13605" result="effect2_dropShadow_718_13605" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13605" result="shape" />
      </filter>
    </defs>
  </svg>
);
ArrowDown.displayName = 'ArrowDown';
export default ArrowDown;
/* tslint:enable */
/* eslint-enable */
