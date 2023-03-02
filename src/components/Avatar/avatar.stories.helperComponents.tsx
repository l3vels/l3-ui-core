import React from "react";
import Avatar from "./Avatar";
import { Avatars } from "./__stories__/assets/index";
import FlexLayout from "../storybook-helpers/flex-layout/flex-layout";
import DescriptionLabel from "../storybook-helpers/description-label/description-label";

export const AvatarsList = () => {
  return Avatars.map((avatar: any) => (
    <div key={avatar.name} className="avatar-story-container">
      <FlexLayout key={avatar.name}>
        <div key={avatar.name} className="avatar">
          <Avatar key={avatar.name} size={Avatar.sizes.LARGE} src={avatar.image} type={Avatar.types.IMG} rectangle />
        </div>
        <DescriptionLabel className="avatar-story-name">{avatar.name}</DescriptionLabel>
      </FlexLayout>
    </div>
  ));
};
console.log("avatars", AvatarsList());
