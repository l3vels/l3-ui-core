/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface PlayProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Play: React.FC<PlayProps> = ({size, ...props}) => (
  <svg viewBox="0 0 32 32" fill="currentColor" width={ size || "32" } height={ size || "32" } {...props}>
    <g filter="url(#filter0_bd_761_16748)">
      <path d="M11 20.3601V10.6399C11 9.28182 12.6248 8.51443 13.747 9.34246L20.334 14.2026C21.222 14.8578 21.222 16.1422 20.334 16.7974L13.747 21.6575C12.6248 22.4856 11 21.7182 11 20.3601Z"
        stroke="#fff" strokeLinecap="round" />
    </g>
    <defs>
      <filter id="filter0_bd_761_16748" x="-10" y="-10" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_761_16748" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_761_16748" result="effect2_dropShadow_761_16748" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_761_16748" result="shape" />
      </filter>
    </defs>
  </svg>
);
Play.displayName = 'Play';
export default Play;
/* tslint:enable */
/* eslint-enable */
