/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SendProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Send: React.FC<SendProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13648)">
      <path d="M22.7984 32.9669C23.6991 32.9669 24.3284 32.2319 24.762 31.1048L32.4926 10.8979C32.6973 10.3757 32.8081 9.90581 32.8081 9.5137C32.8081 8.68026 32.2866 8.16089 31.4532 8.16089C31.059 8.16089 30.5891 8.27175 30.069 8.47425L9.77562 16.2454C8.76383 16.6288 8 17.2581 8 18.1684C8 19.2866 8.83508 19.7005 9.98539 20.0509L16.0625 21.9053C16.88 22.1608 17.3588 22.1437 17.9302 21.6201L30.9713 9.52823C31.1342 9.37917 31.329 9.4005 31.4525 9.51651C31.5739 9.64003 31.5898 9.83479 31.4387 9.99768L19.3873 23.0645C18.8839 23.6019 18.8424 24.0995 19.0841 24.9269L20.8946 30.8908C21.2546 32.0891 21.6706 32.9669 22.7984 32.9669Z"
        fill="#fff" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13648" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13648" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13648" result="effect2_dropShadow_718_13648" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13648" result="shape" />
      </filter>
    </defs>
  </svg>
);
Send.displayName = 'Send';
export default Send;
/* tslint:enable */
/* eslint-enable */
