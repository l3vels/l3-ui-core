/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface PlayProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Play: React.FC<PlayProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13655)">
      <path d="M12.6172 30.5045C13.1134 30.5045 13.5455 30.3191 14.0776 30.0137L27.8872 22.0246C28.8957 21.4293 29.3094 20.9826 29.3094 20.2581C29.3094 19.5337 28.8957 19.087 27.8872 18.5034L14.0776 10.5046C13.5455 10.1971 13.1134 10.0234 12.6172 10.0234C11.6656 10.0234 11 10.7451 11 11.9017V28.6166C11 29.7733 11.6656 30.5045 12.6172 30.5045Z"
        fill="#fff" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13655" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13655" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13655" result="effect2_dropShadow_718_13655" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13655" result="shape" />
      </filter>
    </defs>
  </svg>
);
Play.displayName = 'Play';
export default Play;
/* tslint:enable */
/* eslint-enable */
