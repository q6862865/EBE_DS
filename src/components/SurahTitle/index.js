import React from 'react';
import PropTypes from 'prop-types';

import ThemeProvider from 'react-theme-provider';
import testSetCSS from '../../.themes/testSetCSS';

const SurahTitle = ({ chapterNumber, color, className, ...props }) => {
  const SurahSvg = require(`./Surahs/${chapterNumber}.js`).default; // eslint-disable-line
  return <ThemeProvider setCSS={testSetCSS} ><SurahSvg color={color} className={className} {...props} /></ThemeProvider>;
};

SurahTitle.defaultProps = {
  color: '#000000',
  className: '',
  chapterNumber: 1,
};

SurahTitle.propTypes = {
  chapterNumber: PropTypes.number.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default SurahTitle;
