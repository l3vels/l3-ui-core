/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface TagsProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Tags: React.FC<TagsProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13638)">
      <path d="M21.165 32.7883L32.6435 21.2906C33.5583 20.3758 33.6506 19.8297 33.6506 18.5128V14.066C33.6506 12.7774 33.345 12.3337 32.3974 11.384L29.7127 8.70138C28.7726 7.7613 28.3289 7.44818 27.0424 7.44818H22.586C21.267 7.44818 20.741 7.54685 19.8263 8.46372L8.31681 19.9518C6.57353 21.6951 6.54471 23.5476 8.32853 25.3197L15.7971 32.7787C17.5788 34.5529 19.4217 34.5337 21.165 32.7883ZM24.9851 17.1965C24.0213 17.1965 23.3037 16.4521 23.3037 15.5172C23.3037 14.5727 24.0213 13.8358 24.9851 13.8358C25.9392 13.8358 26.6665 14.5727 26.6665 15.5172C26.6665 16.4521 25.9392 17.1965 24.9851 17.1965Z"
        fill="#fff" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13638" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13638" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13638" result="effect2_dropShadow_718_13638" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13638" result="shape" />
      </filter>
    </defs>
  </svg>
);
Tags.displayName = 'Tags';
export default Tags;
/* tslint:enable */
/* eslint-enable */
