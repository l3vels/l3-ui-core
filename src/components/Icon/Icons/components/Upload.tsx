/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface UploadProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Upload: React.FC<UploadProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13633)">
      <path d="M19.9845 30.0103C20.7394 30.0103 21.2637 29.4776 21.2637 28.7079V17.7979L21.1522 15.3302L24.283 18.7722L26.6928 21.1469C26.9225 21.3766 27.2481 21.5285 27.6116 21.5285C28.3177 21.5285 28.8462 20.9988 28.8462 20.2631C28.8462 19.9355 28.7059 19.6144 28.4251 19.3303L20.9384 11.9184C20.6799 11.6545 20.3417 11.4961 19.9845 11.4961C19.6198 11.4961 19.2891 11.6545 19.0306 11.9184L11.5365 19.3303C11.2674 19.6144 11.127 19.9355 11.127 20.2631C11.127 20.9988 11.6459 21.5285 12.3617 21.5285C12.7252 21.5285 13.0369 21.3808 13.2805 21.1469L15.6882 18.7722L18.8169 15.3206L18.6978 17.7979V28.7079C18.6978 29.4776 19.22 30.0103 19.9845 30.0103ZM12.2272 11.5216H27.7131C28.4363 11.5216 28.9616 10.9847 28.9616 10.2656C28.9616 9.54445 28.4363 9 27.7131 9H12.2272C11.5135 9 11 9.54445 11 10.2656C11 10.9847 11.5135 11.5216 12.2272 11.5216Z"
        fill="#fff" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13633" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13633" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13633" result="effect2_dropShadow_718_13633" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13633" result="shape" />
      </filter>
    </defs>
  </svg>
);
Upload.displayName = 'Upload';
export default Upload;
/* tslint:enable */
/* eslint-enable */
