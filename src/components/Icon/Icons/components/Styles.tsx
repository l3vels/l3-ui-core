/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface StylesProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Styles: React.FC<StylesProps> = ({size, ...props}) => (
  <svg viewBox="0 0 32 32" fill="currentColor" width={ size || "32" } height={ size || "32" } {...props}>
    <path d="M13.9387 10.1453L13.7117 10.5908L13.9387 10.1453ZM14.5213 10.728L14.0758 10.955L14.5213 10.728ZM10.728 10.1453L10.955 10.5908L10.728 10.1453ZM10.1453 10.728L10.5908 10.955L10.1453 10.728ZM21.8547 21.272L22.3002 21.499V21.499L21.8547 21.272ZM21.272 21.8547L21.499 22.3002L21.272 21.8547ZM21.8547 18.0613L22.3002 17.8343V17.8343L21.8547 18.0613ZM21.272 17.4787L21.045 17.9242L21.272 17.4787ZM19.0104 12.7066L19.364 12.3531V12.3531L19.0104 12.7066ZM19.2932 12.9895L18.9397 13.343H18.9397L19.2932 12.9895ZM19.2932 16.0065L19.6468 16.36L19.2932 16.0065ZM13.9664 21.3333L13.6128 20.9798L13.9664 21.3333ZM11.0201 20.9798C10.8248 20.7845 10.5083 20.7845 10.313 20.9798C10.1177 21.175 10.1177 21.4916 10.313 21.6869L11.0201 20.9798ZM20.1842 14.0859L19.7087 14.2404V14.2404L20.1842 14.0859ZM20.1842 14.91L19.7087 14.7555V14.7555L20.1842 14.91ZM17.9139 11.8157L18.0684 11.3401H18.0684L17.9139 11.8157ZM15.9934 12.7066L16.347 13.0602L15.9934 12.7066ZM17.0899 11.8157L16.9354 11.3401L17.0899 11.8157ZM12.2083 19.0416C11.9321 19.0416 11.7083 19.2655 11.7083 19.5416C11.7083 19.8178 11.9321 20.0416 12.2083 20.0416V19.0416ZM12.4583 20.0416C12.7344 20.0416 12.9583 19.8178 12.9583 19.5416C12.9583 19.2655 12.7344 19.0416 12.4583 19.0416V20.0416ZM12.2083 19.2916C11.9321 19.2916 11.7083 19.5155 11.7083 19.7916C11.7083 20.0678 11.9321 20.2916 12.2083 20.2916V19.2916ZM12.4583 20.2916C12.7344 20.2916 12.9583 20.0678 12.9583 19.7916C12.9583 19.5155 12.7344 19.2916 12.4583 19.2916V20.2916ZM12.1333 10.5H12.5333V9.5H12.1333V10.5ZM14.1667 12.1333V19.6667H15.1667V12.1333H14.1667ZM10.5 19.6667V12.1333H9.5V19.6667H10.5ZM12.3333 21.5C11.3208 21.5 10.5 20.6792 10.5 19.6667H9.5C9.5 21.2315 10.7685 22.5 12.3333 22.5V21.5ZM14.1667 19.6667C14.1667 20.6792 13.3459 21.5 12.3333 21.5V22.5C13.8981 22.5 15.1667 21.2315 15.1667 19.6667H14.1667ZM12.5333 10.5C12.915 10.5 13.1711 10.5004 13.3683 10.5165C13.5598 10.5321 13.6513 10.5601 13.7117 10.5908L14.1656 9.69982C13.9408 9.58526 13.703 9.54052 13.4498 9.51983C13.2024 9.49961 12.8985 9.5 12.5333 9.5V10.5ZM15.1667 12.1333C15.1667 11.7682 15.1671 11.4643 15.1468 11.2169C15.1261 10.9636 15.0814 10.7259 14.9668 10.501L14.0758 10.955C14.1066 11.0154 14.1345 11.1069 14.1502 11.2983C14.1663 11.4956 14.1667 11.7517 14.1667 12.1333H15.1667ZM13.7117 10.5908C13.8685 10.6707 13.9959 10.7982 14.0758 10.955L14.9668 10.501C14.7911 10.1561 14.5106 9.87559 14.1656 9.69982L13.7117 10.5908ZM12.1333 9.5C11.7682 9.5 11.4643 9.49961 11.2169 9.51983C10.9636 9.54052 10.7259 9.58526 10.501 9.69982L10.955 10.5908C11.0154 10.5601 11.1069 10.5321 11.2983 10.5165C11.4956 10.5004 11.7517 10.5 12.1333 10.5V9.5ZM10.5 12.1333C10.5 11.7517 10.5004 11.4956 10.5165 11.2983C10.5321 11.1069 10.5601 11.0154 10.5908 10.955L9.69982 10.501C9.58526 10.7259 9.54052 10.9636 9.51983 11.2169C9.49961 11.4643 9.5 11.7682 9.5 12.1333H10.5ZM10.501 9.69982C10.1561 9.87559 9.87559 10.1561 9.69982 10.501L10.5908 10.955C10.6707 10.7982 10.7982 10.6707 10.955 10.5908L10.501 9.69982ZM21.5 19.4667V19.8667H22.5V19.4667H21.5ZM19.8667 21.5H12.3333V22.5H19.8667V21.5ZM21.5 19.8667C21.5 20.2483 21.4996 20.5044 21.4835 20.7017C21.4679 20.8931 21.4399 20.9846 21.4092 21.045L22.3002 21.499C22.4147 21.2741 22.4595 21.0364 22.4802 20.7831C22.5004 20.5357 22.5 20.2318 22.5 19.8667H21.5ZM19.8667 22.5C20.2318 22.5 20.5357 22.5004 20.7831 22.4802C21.0364 22.4595 21.2741 22.4147 21.499 22.3002L21.045 21.4092C20.9846 21.4399 20.8931 21.4678 20.7017 21.4835C20.5044 21.4996 20.2483 21.5 19.8667 21.5V22.5ZM21.4092 21.045C21.3293 21.2018 21.2018 21.3293 21.045 21.4092L21.499 22.3002C21.8439 22.1244 22.1244 21.8439 22.3002 21.499L21.4092 21.045ZM22.5 19.4667C22.5 19.1015 22.5004 18.7976 22.4802 18.5502C22.4595 18.297 22.4147 18.0592 22.3002 17.8343L21.4092 18.2883C21.4399 18.3487 21.4679 18.4402 21.4835 18.6316C21.4996 18.8289 21.5 19.085 21.5 19.4667H22.5ZM19.8667 17.8333C20.2483 17.8333 20.5044 17.8337 20.7017 17.8498C20.8931 17.8655 20.9846 17.8934 21.045 17.9242L21.499 17.0332C21.2741 16.9186 21.0364 16.8738 20.7831 16.8532C20.5357 16.8329 20.2318 16.8333 19.8667 16.8333V17.8333ZM22.3002 17.8343C22.1244 17.4894 21.8439 17.2089 21.499 17.0332L21.045 17.9242C21.2018 18.0041 21.3293 18.1315 21.4092 18.2883L22.3002 17.8343ZM18 17.8333H19.8667V16.8333H18V17.8333ZM18.6569 13.0602L18.9397 13.343L19.6468 12.6359L19.364 12.3531L18.6569 13.0602ZM18.9397 15.6529L13.6128 20.9798L14.3199 21.6869L19.6468 16.36L18.9397 15.6529ZM13.6128 20.9798C12.8969 21.6957 11.7361 21.6957 11.0201 20.9798L10.313 21.6869C11.4195 22.7934 13.2134 22.7934 14.3199 21.6869L13.6128 20.9798ZM18.9397 13.343C19.2095 13.6129 19.3904 13.7943 19.5185 13.9451C19.6428 14.0915 19.6877 14.176 19.7087 14.2404L20.6597 13.9314C20.5817 13.6914 20.4453 13.4917 20.2808 13.298C20.1201 13.1087 19.905 12.8941 19.6468 12.6359L18.9397 13.343ZM19.6468 16.36C19.905 16.1018 20.1202 15.8872 20.2808 15.698C20.4453 15.5043 20.5817 15.3045 20.6597 15.0645L19.7087 14.7555C19.6877 14.8199 19.6428 14.9044 19.5185 15.0508C19.3904 15.2017 19.2095 15.3831 18.9397 15.6529L19.6468 16.36ZM19.7087 14.2404C19.7631 14.4078 19.7631 14.5881 19.7087 14.7555L20.6597 15.0645C20.7794 14.6963 20.7794 14.2996 20.6597 13.9314L19.7087 14.2404ZM19.364 12.3531C19.1058 12.0949 18.8912 11.8797 18.7019 11.7191C18.5082 11.5546 18.3084 11.4181 18.0684 11.3401L17.7594 12.2912C17.8239 12.3121 17.9083 12.3571 18.0547 12.4814C18.2056 12.6095 18.387 12.7903 18.6569 13.0602L19.364 12.3531ZM16.347 13.0602C16.6168 12.7903 16.7982 12.6095 16.9491 12.4814C17.0955 12.3571 17.18 12.3121 17.2444 12.2912L16.9354 11.3401C16.6954 11.4181 16.4956 11.5546 16.3019 11.7191C16.1127 11.8797 15.898 12.0949 15.6399 12.3531L16.347 13.0602ZM18.0684 11.3401C17.7002 11.2205 17.3036 11.2205 16.9354 11.3401L17.2444 12.2912C17.4118 12.2368 17.5921 12.2368 17.7594 12.2912L18.0684 11.3401ZM15.0203 14.3869L16.347 13.0602L15.6399 12.3531L14.3132 13.6798L15.0203 14.3869ZM12.1667 19.6667C12.1667 19.5746 12.2413 19.5 12.3333 19.5V20.5C12.7936 20.5 13.1667 20.1269 13.1667 19.6667H12.1667ZM12.3333 19.5C12.4254 19.5 12.5 19.5746 12.5 19.6667H11.5C11.5 20.1269 11.8731 20.5 12.3333 20.5V19.5ZM12.5 19.6667C12.5 19.7587 12.4254 19.8333 12.3333 19.8333V18.8333C11.8731 18.8333 11.5 19.2064 11.5 19.6667H12.5ZM12.3333 19.8333C12.2413 19.8333 12.1667 19.7587 12.1667 19.6667H13.1667C13.1667 19.2064 12.7936 18.8333 12.3333 18.8333V19.8333ZM12.2083 20.0416H12.4583V19.0416H12.2083V20.0416ZM12.2083 20.2916H12.4583V19.2916H12.2083V20.2916Z"
      fill="#fff" />
  </svg>
);
Styles.displayName = 'Styles';
export default Styles;
/* tslint:enable */
/* eslint-enable */
