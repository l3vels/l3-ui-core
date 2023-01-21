import cx from "classnames";
import Button, { ButtonProps } from "../../Button/Button";
import React from "react";
import "./AlertBannerButton.scss";

export interface AlertBannerButtonProps extends ButtonProps {
  isDarkBackground?: boolean;
}

const AlertBannerButton = ({
  marginLeft = false,
  isDarkBackground = false,
  ...buttonProps
}: AlertBannerButtonProps) => {
  const overrideButtonProps = { ...Button.defaultProps, ...buttonProps };

  const classNames = cx({
    "l3-style-alert-banner-button-margin-left": marginLeft,
    "l3-style-alert-banner-button-dark-background": isDarkBackground
  });

  return (
    <div className={classNames}>
      <Button
        {...overrideButtonProps}
        size={Button.sizes.SMALL}
        className="l3-style-alert-banner-button"
        color={Button.colors.ON_PRIMARY_COLOR}
      />
    </div>
  );
};

Object.assign(AlertBannerButton, {
  isAlertBannerItem: true
});

export default AlertBannerButton;
