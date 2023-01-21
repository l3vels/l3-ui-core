import PropTypes from "prop-types";
import "./unstyled-list-item.scss";

export const UnstyledListItem = ({ children }) => {
  return <li className="l3-storybook-unstyled-list-item">{children}</li>;
};
UnstyledListItem.propTypes = {
  children: PropTypes.element
};

UnstyledListItem.defaultProps = {
  children: null
};

export default UnstyledListItem;
