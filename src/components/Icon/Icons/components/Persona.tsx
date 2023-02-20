/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface PersonaProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Persona: React.FC<PersonaProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <g filter="url(#filter0_bd_718_13617)">
      <path d="M12.1051 30.5752H27.6977C29.0148 30.5752 29.8007 29.9512 29.8007 28.9153C29.8007 25.9003 25.9776 21.7537 19.8955 21.7537C13.8252 21.7537 10 25.9003 10 28.9153C10 29.9512 10.788 30.5752 12.1051 30.5752ZM19.9052 19.673C22.4594 19.673 24.6327 17.4019 24.6327 14.4659C24.6327 11.584 22.453 9.39093 19.9052 9.39093C17.3573 9.39093 15.1755 11.6245 15.1797 14.4872C15.1818 17.4019 17.3434 19.673 19.9052 19.673Z"
        fill="#fff" />
    </g>
    <defs>
      <filter id="filter0_bd_718_13617" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_718_13617" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="effect1_backgroundBlur_718_13617" result="effect2_dropShadow_718_13617" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_718_13617" result="shape" />
      </filter>
    </defs>
  </svg>
);
Persona.displayName = 'Persona';
export default Persona;
/* tslint:enable */
/* eslint-enable */
