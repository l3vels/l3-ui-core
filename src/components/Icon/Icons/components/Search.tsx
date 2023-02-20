/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SearchProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Search: React.FC<SearchProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13606)">
      <path d="M32 20C32 26.5649 26.5728 32 19.999 32C13.4368 32 8 26.5649 8 20C8 13.4256 13.4273 8 19.9894 8C26.5632 8 32 13.4256 32 20ZM13.7282 18.6793C13.7282 21.4323 15.9931 23.7028 18.7512 23.7028C19.6819 23.7028 20.5566 23.4258 21.3024 22.9767L24.2163 25.8772C24.4791 26.1475 24.7661 26.2742 25.1333 26.2742C25.7832 26.2742 26.2408 25.7878 26.2408 25.1147C26.2408 24.8162 26.1131 24.5292 25.8863 24.2951L22.9711 21.3606C23.472 20.5968 23.7763 19.6661 23.7763 18.6793C23.7763 15.9073 21.5135 13.6422 18.7512 13.6422C15.9931 13.6422 13.7282 15.9168 13.7282 18.6793ZM21.9701 18.6793C21.9701 20.4447 20.5143 21.908 18.7512 21.908C16.9807 21.908 15.5229 20.4447 15.5229 18.6793C15.5229 16.9045 16.9807 15.4412 18.7512 15.4412C20.5143 15.4412 21.9701 16.8949 21.9701 18.6793Z"
        fill="#fff" fillRule="evenodd" clipRule="evenodd" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13606" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13606" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13606" result="effect2_dropShadow_718_13606" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13606" result="shape" />
      </filter>
    </defs>
  </svg>
);
Search.displayName = 'Search';
export default Search;
/* tslint:enable */
/* eslint-enable */
