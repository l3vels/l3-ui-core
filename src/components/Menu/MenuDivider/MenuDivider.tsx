import Divider from "../../Divider/Divider";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import { L3ComponentProps } from "../../../types";
import { FC } from "react";
import "./MenuDivider.scss";

interface MenuDividerProps extends L3ComponentProps {
  /** Backward compatibility for props naming **/
  classname?: string;
}

const MenuDivider: FC<MenuDividerProps> & { isMenuChild?: boolean } = ({
  // Backward compatibility for props naming
  classname,
  className
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, classname]);
  return <Divider classname={`menu-child-divider ${overrideClassName}`} />;
};

Object.assign(MenuDivider, {
  isMenuChild: true
});

export default MenuDivider;
