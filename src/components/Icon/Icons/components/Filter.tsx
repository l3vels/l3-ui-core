/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface FilterProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Filter: React.FC<FilterProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13620)">
      <path d="M21.2939 28.6697V20.047L28.9087 9.7331C29.131 9.43218 28.922 9 28.5543 9H10.4457C10.078 9 9.86899 9.43218 10.0913 9.7331L17.7063 20.0468V30.6658C17.7063 30.9259 17.9831 31.086 18.1997 30.9511L20.9983 29.2089C21.1816 29.0947 21.2939 28.8901 21.2939 28.6697Z"
        fill="#fff" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13620" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13620" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13620" result="effect2_dropShadow_718_13620" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13620" result="shape" />
      </filter>
    </defs>
  </svg>
);
Filter.displayName = 'Filter';
export default Filter;
/* tslint:enable */
/* eslint-enable */
