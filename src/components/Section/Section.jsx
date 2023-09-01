import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  return (
    <Section>
      {/*{title ? <h1 className={`${classNameText}`}>{title}</h1> : null}*/}
      {children}
    </Section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
};
