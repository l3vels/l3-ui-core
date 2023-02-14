import { forwardRef } from "react";
import Typography from "../../../src/storybook/stand-alone-documentaion/typography/Typography";
import cx from "classnames";
import { L3Component } from "src/types";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import "./Card.scss";
import {
  TypographySizes,
  TypographyTypes
} from "../../../src/storybook/stand-alone-documentaion/typography/TypographyConstants";
import IconButton from "../IconButton/IconButton";
import { Add, Remove } from "../Icon/Icons";
import Avatar from "../Avatar/Avatar";

interface CardProps {
  title?: string;
  description?: string;
  hasButton?: boolean;
  onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  twoButton?: boolean;
  image?: string;
  defaultImage?: string;
  avatarSrc?: string;
  textColor?: string;
}

const Card: L3Component<CardProps, unknown> = forwardRef<unknown, CardProps>(
  ({ title, description, onButtonClick, image, defaultImage, hasButton, twoButton, avatarSrc, textColor }) => {
    let blend: unknown;
    let mainImage: string;
    if (image) {
      blend = { mixBlendMode: "normal" };
      mainImage = image;
    } else {
      blend = { mixBlendMode: "screen" };
      mainImage = defaultImage;
    }

    const overlayClassName = cx("overlay", { overlay_no_description: !description });

    return (
      <div className="main_wrapper">
        <img className="image" style={blend} src={mainImage} alt="" />
        <div className={overlayClassName}>
          <Heading type={Heading.types.h2} size={Heading.sizes.SMALL} value={title} />

          <div className="paragraph_wrapper">
            {avatarSrc && (
              <div className="avatar">
                <Avatar src={avatarSrc} size={Avatar.sizes.SMALL} type={Avatar.types.IMG} rectangle />
              </div>
            )}
            <Typography
              value={description}
              type={TypographyTypes.P}
              size={TypographySizes.sm}
              as={"p"}
              customColor={textColor}
            />
            {twoButton && (
              <div className="button_container">
                <IconButton icon={Remove} kind={IconButton.kinds.TERTIARY} size={Button.sizes.SMALL} />
                <IconButton icon={Add} kind={IconButton.kinds.TERTIARY} size={Button.sizes.SMALL} />
              </div>
            )}
            {hasButton && (
              <Button onClick={onButtonClick} kind={Button.kinds.SECONDARY} size={Button.sizes.SMALL}>
                Add
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
