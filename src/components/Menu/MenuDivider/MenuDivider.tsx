import Divider from "../../Divider/Divider";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import { L3ComponentProps } from "../../../types";
import { FC } from "react";
import "./MenuDivider.scss";

interface MenuDividerProps extends L3ComponentProps {
  /** Backward compatibility for props naming **/
  className?: string;
}

const MenuDivider: FC<MenuDividerProps> & { isMenuChild?: boolean } = ({
  // Backward compatibility for props naming
  className
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className]);
  return <Divider className={`menu-child-divider ${overrideClassName}`} />;
};

Object.assign(MenuDivider, {
  isMenuChild: true
});

export default MenuDivider;
