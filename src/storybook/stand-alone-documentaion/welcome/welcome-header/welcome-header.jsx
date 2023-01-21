import { ComponentName } from "../../../components";
import "./welcome-header.scss";

const BASE_CLASS = "l3-storybook-welcome-header";
export const WelcomeHeader = () => (
  <ComponentName className={BASE_CLASS}>
    <span className={`${BASE_CLASS}_text`}>
      Design System
      <br /> by l3vels.xyz
    </span>
  </ComponentName>
);
