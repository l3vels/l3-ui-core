/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ArrowUpProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ArrowUp: React.FC<ArrowUpProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13604)">
      <path d="M20 32C26.5649 32 32 26.5728 32 19.999C32 13.4368 26.5649 8 20 8C13.4256 8 8 13.4273 8 19.9894C8 26.5632 13.4256 32 20 32ZM25.7679 20.9464C26.1096 21.3155 26.1287 22.0074 25.8006 22.347C25.3862 22.7594 24.7532 22.7394 24.382 22.3544L20 17.7036L15.6392 22.3544C15.2679 22.7531 14.6055 22.7436 14.2226 22.3312C13.8713 21.96 13.8745 21.3546 14.2553 20.9464L18.7665 16.158C19.427 15.4394 20.5941 15.4394 21.2546 16.158L25.7679 20.9464Z"
        fill="#fff" fillRule="evenodd" clipRule="evenodd" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13604" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13604" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13604" result="effect2_dropShadow_718_13604" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13604" result="shape" />
      </filter>
    </defs>
  </svg>
);
ArrowUp.displayName = 'ArrowUp';
export default ArrowUp;
/* tslint:enable */
/* eslint-enable */
