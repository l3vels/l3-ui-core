import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { DirectionType } from "./DividerConstants";
import L3ComponentProps from "../../types/L3ComponentProps";
import "./Divider.scss";

interface DividerProps extends L3ComponentProps {
  direction?: DirectionType;
  classnames?: string;
}

const Divider = ({
  // Backward compatibility for props naming
  classnames: classnames,
  className = undefined,
  direction = DirectionType.HORIZONTAL
}: DividerProps) => {
  const overrideClassName = backwardCompatibilityForProperties([className, classnames]);
  return <div className={cx("l3-style-divider", overrideClassName, `l3-style-divider--${direction}`)} />;
};

Divider.directions = DirectionType;

Divider.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf([Divider.directions.HORIZONTAL, Divider.directions.VERTICAL])
};

export default Divider;
