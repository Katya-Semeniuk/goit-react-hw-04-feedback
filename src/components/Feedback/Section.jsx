import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <>
    <h1 className="title">{title}</h1>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
