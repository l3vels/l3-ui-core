/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DoneProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Done: React.FC<DoneProps> = ({size, ...props}) => (
  <svg viewBox="0 0 72 72" fill="currentColor" width={ size || "72" } height={ size || "72" } {...props}>
    <path d="M36.0002 54.8889C46.4323 54.8889 54.8891 46.432 54.8891 36C54.8891 25.568 46.4323 17.1111 36.0002 17.1111C25.5682 17.1111 17.1113 25.568 17.1113 36C17.1113 46.432 25.5682 54.8889 36.0002 54.8889Z"
      fill="#fff" />
    <path d="M36.0004 52.3148C45.0108 52.3148 52.3152 45.0104 52.3152 36C52.3152 26.9896 45.0108 19.6852 36.0004 19.6852C26.9899 19.6852 19.6855 26.9896 19.6855 36C19.6855 45.0104 26.9899 52.3148 36.0004 52.3148Z"
      fill="#000" />
    <path d="M33.9268 41.972L28.8657 36.9109L30.6875 35.0891L33.9268 38.3285L41.3163 30.9389L43.1381 32.7607L33.9268 41.972Z" fill="#fff" />
  </svg>
);
Done.displayName = 'Done';
export default Done;
/* tslint:enable */
/* eslint-enable */
