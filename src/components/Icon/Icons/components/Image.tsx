/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ImageProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Image: React.FC<ImageProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13641)">
      <path d="M10.0111 28.5916C8.93975 28.5916 8.29592 27.9478 8.29592 26.8669V25.9453L11.6194 23.0409C12.1329 22.5881 12.6659 22.358 13.1983 22.358C13.7662 22.358 14.3555 22.5902 14.869 23.0644L17.0904 25.0631L22.6371 20.1366C23.2008 19.6294 23.8369 19.3992 24.4985 19.3992C25.1346 19.3992 25.7963 19.6411 26.3365 20.1483L31.4592 24.8895V26.884C31.4592 27.9478 30.7868 28.5916 29.7537 28.5916H10.0111ZM15.1287 20.1787C13.5223 20.1787 12.2088 18.8653 12.2088 17.2568C12.2088 15.6621 13.5223 14.3369 15.1287 14.3369C16.7255 14.3369 18.0389 15.6621 18.0389 17.2568C18.0389 18.8653 16.7255 20.1787 15.1287 20.1787ZM9.84421 30.878H29.9109C32.4499 30.878 33.7552 29.5823 33.7552 27.0818V12.81C33.7552 10.3073 32.4499 9.00421 29.9109 9.00421H9.84421C7.31484 9.00421 6 10.3073 6 12.81V27.0818C6 29.5823 7.31484 30.878 9.84421 30.878Z"
        fill="#fff" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13641" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13641" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13641" result="effect2_dropShadow_718_13641" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13641" result="shape" />
      </filter>
    </defs>
  </svg>
);
Image.displayName = 'Image';
export default Image;
/* tslint:enable */
/* eslint-enable */
