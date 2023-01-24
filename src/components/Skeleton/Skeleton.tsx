import React, { FC } from "react";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import {
  SKELETON_ALLOWED_SIZES,
  SKELETON_ALLOWED_TYPES,
  SKELETON_CUSTOM_SIZE,
  SKELETON_SIZES,
  SKELETON_TYPES
} from "./SkeletonConstants";
import l3ComponentProps from "../../types/l3ComponentProps";
import "./Skeleton.scss";

const SKELETON_CSS_BASE_CLASS = "l3-style-skeleton";
const bemHelper = BEMClass(SKELETON_CSS_BASE_CLASS);

interface SkeletonProps extends l3ComponentProps {
  type?: keyof typeof SKELETON_TYPES;
  size?: keyof typeof SKELETON_ALLOWED_SIZES;
  width?: number;
  height?: number;
}

const Skeleton: FC<SkeletonProps> & {
  types?: typeof SKELETON_TYPES;
  sizes?: typeof SKELETON_SIZES;
} = ({ type = SKELETON_TYPES.RECTANGLE, size = SKELETON_SIZES.CUSTOM, className, width, height }) => {
  const skeletonType = SKELETON_ALLOWED_TYPES.indexOf(type) > -1 ? type : SKELETON_TYPES.RECTANGLE;
  const typeDescription = skeletonType.toUpperCase() as keyof typeof SKELETON_ALLOWED_SIZES;
  const skeletonSize = SKELETON_ALLOWED_SIZES[typeDescription].indexOf(size) > -1 ? size : SKELETON_CUSTOM_SIZE;
  return (
    <div className={SKELETON_CSS_BASE_CLASS}>
      <div
        className={cx(
          bemHelper({ element: skeletonType }),
          bemHelper({ element: skeletonType, state: skeletonSize }),
          className
        )}
        style={{ width, height }}
      />
    </div>
  );
};

Object.assign(Skeleton, {
  types: SKELETON_TYPES,
  sizes: SKELETON_SIZES
});

export default Skeleton;
