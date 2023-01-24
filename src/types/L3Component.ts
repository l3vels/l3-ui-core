import React from "react";
type l3Component<T, P = HTMLElement> = React.ForwardRefExoticComponent<T & React.RefAttributes<P>> & {
  defaultTestId?: string;
};

export default l3Component;
