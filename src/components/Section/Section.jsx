// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;

Section.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
