/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ArrowRightProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ArrowRight: React.FC<ArrowRightProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13608)">
      <path d="M7.78809 20C7.78809 26.5649 13.2153 32 19.7891 32C26.3513 32 31.7881 26.5649 31.7881 20C31.7881 13.4256 26.3608 8 19.7986 8C13.2248 8 7.78809 13.4256 7.78809 20ZM18.8417 25.7679C18.4726 26.1096 17.7807 26.1287 17.4411 25.8006C17.0287 25.3862 17.0486 24.7532 17.4336 24.382L22.0845 20L17.4336 15.6392C17.035 15.2679 17.0445 14.6055 17.4568 14.2226C17.8281 13.8713 18.4335 13.8745 18.8417 14.2553L23.6301 18.7665C24.3487 19.427 24.3487 20.5941 23.6301 21.2546L18.8417 25.7679Z"
        fill="#fff" fillRule="evenodd" clipRule="evenodd" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13608" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13608" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13608" result="effect2_dropShadow_718_13608" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13608" result="shape" />
      </filter>
    </defs>
  </svg>
);
ArrowRight.displayName = 'ArrowRight';
export default ArrowRight;
/* tslint:enable */
/* eslint-enable */
