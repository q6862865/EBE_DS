import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ThemeProvider from 'react-theme-provider';
import testSetCSS from '../../.themes/testSetCSS';

const List = styled.ul`
  padding-left: 0px;

  ${props => (props.bordered ? 'border: 1px solid #777;' : '')};
`;

export { default as MenuItem } from './MenuItem.js';

const Menu = ({ children, bordered, className, ...props }) => (
  <ThemeProvider setCSS={testSetCSS} >
    <List bordered={bordered} className={className} {...props}>
      {children}
    </List>
  </ThemeProvider>
);

Menu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  bordered: PropTypes.bool,
  className: PropTypes.string,
};

Menu.defaultProps = {
  children: [],
  bordered: false,
  className: '',
};

export default Menu;
