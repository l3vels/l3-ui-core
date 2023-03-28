import React from "react";
import styles from "./DateNavigationItem.module.scss";
import { DropdownChevronRight } from "../../Icon/Icons";
import { DropdownChevronLeft } from "../../Icon/Icons";
import IconButton from "../../../components/IconButton/IconButton";

interface DateNavigationItemProps {
  kind: "prev" | "next";
  onClick?: () => void;
}
const DateNavigationItem = ({ kind, onClick }: DateNavigationItemProps) => {
  return (
    <div className={styles.navigationItemContainer}>
      <IconButton
        size={IconButton.sizes.XS}
        onClick={() => onClick && onClick()}
        icon={kind === "prev" ? DropdownChevronLeft : DropdownChevronRight}
      />
    </div>
  );
};

export default DateNavigationItem;
