/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SoundOffProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const SoundOff: React.FC<SoundOffProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13653)">
      <path d="M25.8226 30.9747C26.6952 30.9747 27.3325 30.3395 27.3325 29.4744V11.5717C27.3325 10.7066 26.6952 10.0117 25.8013 10.0117C25.2159 10.0117 24.7881 10.2566 24.1462 10.8688L19.2447 15.4593C19.1669 15.5254 19.0816 15.5606 18.9728 15.5606H15.6454C13.9368 15.5606 13 16.5175 13 18.3273V22.6783C13 24.4977 13.9368 25.4472 15.6454 25.4472H18.9707C19.0773 25.4472 19.1648 25.476 19.2426 25.5421L24.1462 30.1773C24.7337 30.7351 25.2245 30.9747 25.8226 30.9747Z"
        fill="#fff" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13653" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13653" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13653" result="effect2_dropShadow_718_13653" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13653" result="shape" />
      </filter>
    </defs>
  </svg>
);
SoundOff.displayName = 'SoundOff';
export default SoundOff;
/* tslint:enable */
/* eslint-enable */
