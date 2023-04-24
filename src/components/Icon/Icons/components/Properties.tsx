/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface PropertiesProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Properties: React.FC<PropertiesProps> = ({size, ...props}) => (
  <svg viewBox="0 0 32 32" fill="currentColor" width={ size || "32" } height={ size || "32" } {...props}>
    <path d="M10 14.3636C10 12.8362 10 12.0725 10.2973 11.4891C10.5587 10.9759 10.9759 10.5587 11.4891 10.2973C12.0725 10 12.8362 10 14.3636 10H17.6364C19.1638 10 19.9275 10 20.5109 10.2973C21.0241 10.5587 21.4413 10.9759 21.7027 11.4891C22 12.0725 22 12.8362 22 14.3636V17.6364C22 19.1638 22 19.9275 21.7027 20.5109C21.4413 21.0241 21.0241 21.4413 20.5109 21.7027C19.9275 22 19.1638 22 17.6364 22H14.3636C12.8362 22 12.0725 22 11.4891 21.7027C10.9759 21.4413 10.5587 21.0241 10.2973 20.5109C10 19.9275 10 19.1638 10 17.6364V14.3636Z"
      stroke="#fff" strokeWidth="1.091" />
    <path d="M13.8182 15.5636C13.8182 14.9527 13.8182 14.6472 13.9371 14.4138C14.0417 14.2086 14.2086 14.0417 14.4138 13.9371C14.6472 13.8182 14.9527 13.8182 15.5636 13.8182H16.4364C17.0473 13.8182 17.3528 13.8182 17.5862 13.9371C17.7914 14.0417 17.9583 14.2086 18.0629 14.4138C18.1818 14.6472 18.1818 14.9527 18.1818 15.5636V16.4364C18.1818 17.0473 18.1818 17.3528 18.0629 17.5862C17.9583 17.7914 17.7914 17.9583 17.5862 18.0629C17.3528 18.1818 17.0473 18.1818 16.4364 18.1818H15.5636C14.9527 18.1818 14.6472 18.1818 14.4138 18.0629C14.2086 17.9583 14.0417 17.7914 13.9371 17.5862C13.8182 17.3528 13.8182 17.0473 13.8182 16.4364V15.5636Z"
      stroke="#fff" strokeWidth="1.091" />
  </svg>
);
Properties.displayName = 'Properties';
export default Properties;
/* tslint:enable */
/* eslint-enable */
