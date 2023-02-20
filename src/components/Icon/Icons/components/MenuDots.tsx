/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MenuDotsProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const MenuDots: React.FC<MenuDotsProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13630)" fill="#fff">
      <path d="M24 9.5C24 11.433 22.433 13 20.5 13 18.567 13 17 11.433 17 9.5 17 7.567 18.567 6 20.5 6 22.433 6 24 7.567 24 9.5zM24 19.5C24 21.433 22.433 23 20.5 23 18.567 23 17 21.433 17 19.5 17 17.567 18.567 16 20.5 16 22.433 16 24 17.567 24 19.5zM24 30.5C24 32.433 22.433 34 20.5 34 18.567 34 17 32.433 17 30.5 17 28.567 18.567 27 20.5 27 22.433 27 24 28.567 24 30.5z"
      />
    </g>
    <defs>
      <filter id="filter0_bd_718_13630" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13630" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13630" result="effect2_dropShadow_718_13630" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13630" result="shape" />
      </filter>
    </defs>
  </svg>
);
MenuDots.displayName = 'MenuDots';
export default MenuDots;
/* tslint:enable */
/* eslint-enable */
