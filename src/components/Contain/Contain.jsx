import React from 'react';
import PropTypes from 'prop-types';

export const Contain = ({ children }) => {
  return (
    <Contain>
      {/*{title ? <h1 className={`${classNameText}`}>{title}</h1> : null}*/}
      {children}
    </Contain>
  );
};

Contain.propTypes = {
  children: PropTypes.node,
};
