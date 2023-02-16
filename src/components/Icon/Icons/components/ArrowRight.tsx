/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ArrowRightProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ArrowRight: React.FC<ArrowRightProps> = ({size, ...props}) => (
  <svg viewBox="0 0 8 14" fill="currentColor" width={ size || "8" } height={ size || "14" } {...props}>
    <path d="M1 1L6.29289 6.29289C6.68342 6.68342 6.68342 7.31658 6.29289 7.70711L1 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
ArrowRight.displayName = 'ArrowRight';
export default ArrowRight;
/* tslint:enable */
/* eslint-enable */
