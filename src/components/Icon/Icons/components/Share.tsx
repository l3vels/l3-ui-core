/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ShareProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Share: React.FC<ShareProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13652)">
      <path d="M20.7299 30.7959C21.3611 30.7959 21.8678 30.5426 22.4788 29.9709L31.7544 21.2552C32.2103 20.8249 32.3859 20.3248 32.3859 19.898C32.3859 19.4531 32.222 18.9731 31.7566 18.5332L22.4788 9.88476C21.805 9.25453 21.3719 9 20.7491 9C19.8276 9 19.1531 9.72258 19.1531 10.6153V14.8193H18.8617C10.7355 14.8193 7 20.0424 7 28.5591C7 29.9909 7.62062 30.7474 8.43062 30.7474C9.03038 30.7474 9.60952 30.5627 10.064 29.7157C11.9174 26.2528 14.5565 25.0052 18.8617 25.0052H19.1531V29.2308C19.1531 30.1235 19.8276 30.7959 20.7299 30.7959Z"
        fill="#fff" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13652" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13652" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13652" result="effect2_dropShadow_718_13652" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13652" result="shape" />
      </filter>
    </defs>
  </svg>
);
Share.displayName = 'Share';
export default Share;
/* tslint:enable */
/* eslint-enable */
