/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface VideoProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Video: React.FC<VideoProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13611)">
      <path d="M9.68045 29H21.1461C23.474 29 24.8266 27.6766 24.8266 25.3747V14.6164C24.8266 12.3234 23.5651 11 21.2373 11H9.68045C7.43288 11 6 12.3234 6 14.6183V25.4357C6 27.7377 7.35063 29 9.68045 29ZM26.4081 23.4871L30.155 26.7343C30.5934 27.1175 31.0658 27.3646 31.5162 27.3646C32.402 27.3646 33 26.7256 33 25.776V14.2733C33 13.3236 32.402 12.6846 31.5162 12.6846C31.0638 12.6846 30.5953 12.9317 30.155 13.3148L26.4081 16.5531V23.4871Z"
        fill="#fff" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13611" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13611" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13611" result="effect2_dropShadow_718_13611" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13611" result="shape" />
      </filter>
    </defs>
  </svg>
);
Video.displayName = 'Video';
export default Video;
/* tslint:enable */
/* eslint-enable */
