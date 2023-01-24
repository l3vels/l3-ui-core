import React, { FC, ReactElement } from "react";
import cx from "classnames";
import l3ComponentProps from "../../types/l3ComponentProps";
import classes from "./ModalFooter.module.scss";

interface ModalFooterProps extends l3ComponentProps {
  children: ReactElement | ReactElement[] | string;
}

const ModalFooter: FC<ModalFooterProps> = ({ className, children }) => {
  return <div className={cx(classes.container, className)}>{children}</div>;
};

Object.assign(ModalFooter, {
  displayName: "ModalFooter"
});

export default ModalFooter;
