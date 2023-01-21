import PropTypes from "prop-types";
import "./anchor-list-item.scss";

export const AnchorListItem = ({ children }) => {
  return <li className="l3-storybook-anchor-list-item">{children}</li>;
};
AnchorListItem.propTypes = {
  children: PropTypes.element
};

AnchorListItem.defaultProps = {
  children: null
};

export default AnchorListItem;
