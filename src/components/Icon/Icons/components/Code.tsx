/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CodeProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Code: React.FC<CodeProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13636)" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 16.25L9.5 20 14 23.75M26 16.25L30.5 20 26 23.75M23 11.75L17 28.25" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13636" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13636" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13636" result="effect2_dropShadow_718_13636" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13636" result="shape" />
      </filter>
    </defs>
  </svg>
);
Code.displayName = 'Code';
export default Code;
/* tslint:enable */
/* eslint-enable */
