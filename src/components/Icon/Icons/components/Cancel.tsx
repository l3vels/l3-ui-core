/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CancelProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Cancel: React.FC<CancelProps> = ({size, ...props}) => (
  <svg viewBox="0 0 28 28" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <path d="M3.29289 24.3404C2.90237 23.9499 2.90237 23.3167 3.29289 22.9262L22.8787 3.34041C23.2692 2.94988 23.9024 2.94988 24.2929 3.34041C24.6834 3.73093 24.6834 4.3641 24.2929 4.75462L4.70711 24.3404C4.31658 24.7309 3.68342 24.7309 3.29289 24.3404Z"
      fill="#fff" fillRule="evenodd" clipRule="evenodd" />
    <path d="M3.70711 3.34041C4.09763 2.94988 4.7308 2.94988 5.12132 3.34041L24.7071 22.9262C25.0976 23.3167 25.0976 23.9499 24.7071 24.3404C24.3166 24.7309 23.6834 24.7309 23.2929 24.3404L3.70711 4.75462C3.31658 4.3641 3.31658 3.73093 3.70711 3.34041Z"
      fill="#fff" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Cancel.displayName = 'Cancel';
export default Cancel;
/* tslint:enable */
/* eslint-enable */
