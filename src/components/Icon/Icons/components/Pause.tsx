/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface PauseProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Pause: React.FC<PauseProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13646)">
      <path d="M14.6747 29.4653H17.4246C18.5243 29.4653 19.0971 28.8925 19.0971 27.7832V11.6725C19.0971 10.5449 18.5243 10.0084 17.4246 10H14.6747C13.575 10 13.0001 10.5728 13.0001 11.6725V27.7832C12.9937 28.8925 13.5665 29.4653 14.6747 29.4653ZM23.5443 29.4653H26.2846C27.3939 29.4653 27.9592 28.8925 27.9592 27.7832V11.6725C27.9592 10.5449 27.3939 10 26.2846 10H23.5443C22.435 10 21.8601 10.5728 21.8601 11.6725V27.7832C21.8601 28.8925 22.4287 29.4653 23.5443 29.4653Z"
        fill="#fff" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13646" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13646" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13646" result="effect2_dropShadow_718_13646" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13646" result="shape" />
      </filter>
    </defs>
  </svg>
);
Pause.displayName = 'Pause';
export default Pause;
/* tslint:enable */
/* eslint-enable */
