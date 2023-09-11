import React from 'react';
import PropTypes from 'prop-types';

export const Contain = ({ children }) => {
  return <Contain>{children}</Contain>;
};

Contain.propTypes = {
  children: PropTypes.node,
};
