/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface ArrowLeftProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({ size, ...props }) => (
  <svg
    width={size || 40}
    height={size || 40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_bd_718_13634)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32 20C32 26.5649 26.5728 32 19.999 32C13.4368 32 8 26.5649 8 20C8 13.4256 13.4273 8 19.9894 8C26.5632 8 32 13.4256 32 20ZM20.9464 25.7679C21.3155 26.1096 22.0074 26.1287 22.347 25.8006C22.7594 25.3862 22.7394 24.7532 22.3544 24.382L17.7036 20L22.3544 15.6392C22.7531 15.2679 22.7436 14.6055 22.3312 14.2226C21.96 13.8713 21.3546 13.8745 20.9464 14.2553L16.158 18.7665C15.4394 19.427 15.4394 20.5941 16.158 21.2546L20.9464 25.7679Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_bd_718_13634"
        x="-10"
        y="-10"
        width="60"
        height="60"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13634" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend mode="normal" in2="effect1_backgroundBlur_718_13634" result="effect2_dropShadow_718_13634" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_718_13634" result="shape" />
      </filter>
    </defs>
  </svg>
);
ArrowLeft.displayName = "ArrowLeft";
export default ArrowLeft;
/* tslint:enable */
/* eslint-enable */
