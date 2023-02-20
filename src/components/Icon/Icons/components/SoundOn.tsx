/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SoundOnProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const SoundOn: React.FC<SoundOnProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13639)">
      <path d="M18.8205 30.9747C19.6952 30.9747 20.3304 30.3395 20.3304 29.4744V11.5717C20.3304 10.7066 19.6952 10.0117 18.8013 10.0117C18.2041 10.0117 17.7881 10.2662 17.1462 10.8688L12.233 15.4593C12.1648 15.5254 12.0698 15.5606 11.9632 15.5606H8.64538C6.92719 15.5606 6 16.5175 6 18.3273V22.6783C6 24.4977 6.92719 25.4472 8.64538 25.4472H11.9611C12.0677 25.4472 12.1627 25.476 12.2309 25.5421L17.1462 30.1773C17.7241 30.7351 18.2149 30.9747 18.8205 30.9747ZM24.5124 25.6804C24.9962 26.0005 25.6482 25.8932 26.0068 25.3792C26.9513 24.1218 27.5115 22.3335 27.5115 20.4815C27.5115 18.6295 26.9513 16.8508 26.0068 15.5796C25.6482 15.0698 24.9962 14.9507 24.5124 15.2826C23.9413 15.6571 23.8393 16.3464 24.287 17.002C24.935 17.9226 25.3006 19.1749 25.3006 20.4815C25.3006 21.7881 24.9233 23.0287 24.287 23.961C23.8489 24.6241 23.9413 25.2962 24.5124 25.6804ZM30.7266 28.4875C30.3617 29.0193 29.713 29.1479 29.1866 28.8128C28.6348 28.465 28.5657 27.7771 28.9613 27.1701C30.1899 25.3314 30.9284 22.9565 30.9284 20.4815C30.9284 18.0065 30.2091 15.6102 28.9613 13.7908C28.5561 13.1838 28.6348 12.498 29.1866 12.1502C29.713 11.815 30.3617 11.9437 30.7266 12.4734C32.2615 14.6116 33.1372 17.5152 33.1372 20.4815C33.1372 23.4477 32.2519 26.3322 30.7266 28.4875Z"
        fill="#fff" fillRule="evenodd" clipRule="evenodd" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13639" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13639" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13639" result="effect2_dropShadow_718_13639" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13639" result="shape" />
      </filter>
    </defs>
  </svg>
);
SoundOn.displayName = 'SoundOn';
export default SoundOn;
/* tslint:enable */
/* eslint-enable */
