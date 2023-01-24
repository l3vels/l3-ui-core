import React, { ForwardedRef, forwardRef, useCallback } from "react";
import MenuItem, { MenuItemProps } from "./MenuItem";
import Avatar, { AvatarProps } from "../../Avatar/Avatar";
import l3ComponentProps from "../../../types/l3ComponentProps";

interface AvatarMenuItemProps extends l3ComponentProps {
  avatarProps?: AvatarProps;
  menuItemProps?: MenuItemProps;
}

/**
 * MenuItem with Avatar instead of Icon
 */
const AvatarMenuItem: React.FC<AvatarMenuItemProps & { isMenuChild?: boolean; isSelectable?: boolean }> = forwardRef(
  ({ avatarProps, menuItemProps, ...embeddedMenuItemProps }, ref: ForwardedRef<HTMLElement>) => {
    const renderAvatar = useCallback(() => <Avatar {...avatarProps} />, [avatarProps]);
    return <MenuItem {...embeddedMenuItemProps} {...menuItemProps} icon={renderAvatar} ref={ref} />;
  }
);

Object.assign(AvatarMenuItem, {
  isMenuChild: true,
  isSelectable: true
});

export default AvatarMenuItem;
