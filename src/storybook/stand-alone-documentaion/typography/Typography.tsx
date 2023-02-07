import { CSSProperties } from "react";
import L3ComponentProps from "../../../types/L3ComponentProps";
import { TypographySizes, TypographyTypes } from "./TypographyConstants";
import useStyle from "../../../hooks/useStyle";
import "./typography.scss";
import cx from "classnames";

export interface TypographyProps extends L3ComponentProps {
  value?: string;
  size?: TypographySizes;
  //   highlightTerm?: string;
  customColor?: string;
  type?: TypographyTypes;
  style?: CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({ value, type = "paragraph", size = "large", customColor, style }) => {
  const finalStyle = useStyle(style, { color: customColor });

  const typograpghClassName = `${type}_${size}`;
  console.log(typograpghClassName);
  return (
    <div style={finalStyle} className={cx(typograpghClassName)}>
      {value}
    </div>
  );
};

export default Typography;
