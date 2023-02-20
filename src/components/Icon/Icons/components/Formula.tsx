/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface FormulaProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Formula: React.FC<FormulaProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13645)">
      <path d="M11.833 11.25C11.833 10.2835 12.6165 9.5 13.583 9.5H26.4163C27.3828 9.5 28.1663 10.2835 28.1663 11.25V11.8333C28.1663 12.4777 27.644 13 26.9997 13C26.3553 13 25.833 12.4777 25.833 11.8333H14.1663V12.4634L21.8222 19.0256C22.4198 19.5378 22.4198 20.4622 21.8222 20.9744L14.1663 27.5365V28.1667H25.833C25.833 27.5223 26.3553 27 26.9997 27C27.644 27 28.1663 27.5223 28.1663 28.1667V28.75C28.1663 29.7165 27.3828 30.5 26.4163 30.5H13.583C12.6165 30.5 11.833 29.7165 11.833 28.75V27.2683C11.833 26.7574 12.0562 26.2721 12.4441 25.9396L19.3736 20L12.4441 14.0604C12.0562 13.7279 11.833 13.2426 11.833 12.7317V11.25Z"
        fill="#fff" stroke="#fff" fillRule="evenodd" clipRule="evenodd" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13645" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13645" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13645" result="effect2_dropShadow_718_13645" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13645" result="shape" />
      </filter>
    </defs>
  </svg>
);
Formula.displayName = 'Formula';
export default Formula;
/* tslint:enable */
/* eslint-enable */
