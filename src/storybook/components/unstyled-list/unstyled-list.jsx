import PropTypes from "prop-types";

export const UnstyledList = ({ children }) => {
  return <ul className="l3-storybook-unstyled-list">{children}</ul>;
};
UnstyledList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

UnstyledList.defaultProps = {
  children: null
};

export default UnstyledList;
