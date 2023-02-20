/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DownloadProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Download: React.FC<DownloadProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13626)">
      <path d="M29.1432 21.2216C29.1432 20.5081 28.6243 19.9806 27.9181 19.9806C27.5546 19.9806 27.2387 20.1186 27.009 20.3504L24.3519 22.9754L20.4413 27.3362L21.2115 27.7203L21.3519 23.9012V9.33336C21.3519 8.57329 20.8276 8.03845 20.0726 8.03845C19.3177 8.03845 18.7934 8.57329 18.7934 9.33336V23.9012L18.9338 27.7203L19.7136 27.3362L15.7934 22.9754L13.1342 20.3504C12.912 20.1186 12.5886 19.9806 12.2251 19.9806C11.5189 19.9806 11 20.5081 11 21.2216C11 21.564 11.1329 21.8712 11.3998 22.1478L19.1187 29.8859C19.373 30.152 19.7185 30.2944 20.0726 30.2944C20.4268 30.2944 20.7701 30.152 21.0265 29.8859L28.7508 22.1478C29.0199 21.8712 29.1432 21.564 29.1432 21.2216ZM29.1432 31.5505C29.1432 30.8293 28.6276 30.2944 27.916 30.2944H12.2464C11.5231 30.2944 11 30.8293 11 31.5505C11 32.2716 11.5231 32.8161 12.2464 32.8161H27.916C28.6276 32.8161 29.1432 32.2716 29.1432 31.5505Z"
        fill="#fff" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13626" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13626" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13626" result="effect2_dropShadow_718_13626" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13626" result="shape" />
      </filter>
    </defs>
  </svg>
);
Download.displayName = 'Download';
export default Download;
/* tslint:enable */
/* eslint-enable */
