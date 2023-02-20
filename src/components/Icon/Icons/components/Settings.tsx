/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SettingsProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Settings: React.FC<SettingsProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13602)">
      <path d="M32 20C32 26.6274 26.6274 32 20 32C13.3726 32 8 26.6274 8 20C8 13.3726 13.3726 8 20 8C26.6274 8 32 13.3726 32 20ZM19.2827 11.6184C19.5012 11.4941 19.7483 11.4286 20 11.4286C20.2517 11.4286 20.4988 11.4941 20.7173 11.6184L26.9782 15.1809C27.2025 15.3086 27.3884 15.4935 27.5175 15.7161C27.6465 15.9388 27.7143 16.1915 27.7143 16.4485V23.5515C27.7143 23.8085 27.6465 24.0612 27.5175 24.2839C27.3884 24.5065 27.2025 24.6914 26.9782 24.8191L20.7173 28.3816C20.4988 28.5059 20.2517 28.5714 20 28.5714C19.7483 28.5714 19.5012 28.5059 19.2827 28.3816L13.0218 24.8191C12.7975 24.6914 12.6116 24.5065 12.4825 24.2839C12.3535 24.0612 12.2857 23.8085 12.2857 23.5515V16.4485C12.2857 16.1915 12.3535 15.9388 12.4825 15.7161C12.6116 15.4935 12.7975 15.3086 13.0218 15.1809L19.2827 11.6184ZM20 13.1827L14 16.5967V23.4033L20 26.8173L26 23.4033V16.5967L20 13.1827ZM18.1729 19.9987C18.1729 18.9749 18.9958 18.1547 19.999 18.1547C21.0021 18.1547 21.825 18.9749 21.825 19.9987C21.825 21.0226 21.0021 21.8428 19.999 21.8428C18.9958 21.8428 18.1729 21.0226 18.1729 19.9987ZM19.999 16.4404C18.0383 16.4404 16.4586 18.0389 16.4586 19.9987C16.4586 21.9586 18.0383 23.5571 19.999 23.5571C21.9596 23.5571 23.5393 21.9586 23.5393 19.9987C23.5393 18.0389 21.9596 16.4404 19.999 16.4404Z"
        fill="#fff" fillRule="evenodd" clipRule="evenodd" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13602" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13602" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13602" result="effect2_dropShadow_718_13602" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13602" result="shape" />
      </filter>
    </defs>
  </svg>
);
Settings.displayName = 'Settings';
export default Settings;
/* tslint:enable */
/* eslint-enable */
