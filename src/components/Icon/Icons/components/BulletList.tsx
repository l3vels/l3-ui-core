/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface BulletListProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const BulletList: React.FC<BulletListProps> = ({ size, ...props }) => (
  <svg
    width={size || 40}
    height={size || 40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_bd_718_13609)">
      <path
        d="M10.8125 14.5938C11.4511 14.5938 11.9688 14.0761 11.9688 13.4375C11.9688 12.7989 11.4511 12.2812 10.8125 12.2812C10.1739 12.2812 9.65625 12.7989 9.65625 13.4375C9.65625 14.0761 10.1739 14.5938 10.8125 14.5938Z"
        fill="white"
        stroke="white"
      />
      <path
        d="M10.8125 21.1562C11.4511 21.1562 11.9688 20.6386 11.9688 20C11.9688 19.3614 11.4511 18.8438 10.8125 18.8438C10.1739 18.8438 9.65625 19.3614 9.65625 20C9.65625 20.6386 10.1739 21.1562 10.8125 21.1562Z"
        fill="white"
        stroke="white"
      />
      <path
        d="M10.8125 27.7194C11.4511 27.7194 11.9688 27.2018 11.9688 26.5632C11.9688 25.9246 11.4511 25.4069 10.8125 25.4069C10.1739 25.4069 9.65625 25.9246 9.65625 26.5632C9.65625 27.2018 10.1739 27.7194 10.8125 27.7194Z"
        fill="white"
        stroke="white"
      />
      <path d="M15.625 13.4375H29.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15.625 20H29.6243" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M15.625 26.5625H29.6243"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_bd_718_13609"
        x="-10"
        y="-10"
        width="60"
        height="60"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13609" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend mode="normal" in2="effect1_backgroundBlur_718_13609" result="effect2_dropShadow_718_13609" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_718_13609" result="shape" />
      </filter>
    </defs>
  </svg>
);
BulletList.displayName = "BulletList";
export default BulletList;
/* tslint:enable */
/* eslint-enable */
