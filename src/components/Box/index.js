import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';


import ThemeProvider from 'react-theme-provider';
import testSetCSS from '../../.themes/testSetCSS';

// const mycolor = "pink";
// <button mycolor="pink"

const inverted = css`
  background: white;
  border-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
  color: ${props => props.theme.brandPrimary || '#2CA4AB'};
  &:hover {
    color: white;
    background-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
    border-color: "white";
  }
`;

const disabled = css`
  background-color: #ccc;
  color: #6a6a6a;
  cursor: not-allowed;
`;

const StyledBase = styled.div`
  border: 1px solid Black;
  width: ${props => (props.fullWidth ? 'initial' : 'fit-content')};

  ${(props) => {
      switch (props.size) {
      case 'small':
          return 'padding: 12px;';
      case 'medium':
          return 'padding: 24px;';
      case 'large':
          return 'padding: 48px;';
      default:
          return '';
      }
  }}
`;


function Box({ className, color, children, size, fullWidth, href, ...props }) {
    return (
      <ThemeProvider setCSS={testSetCSS} >
        <StyledBase className={className} color={color} size={size} fullWidth={fullWidth} {...props}>
          {children}
        </StyledBase>
      </ThemeProvider>
    );
}

Box.propTypes = {
    size: PropTypes.string,
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.string,
    href: PropTypes.string,
    square: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
};

Box.defaultProps = {
    fullWidth: true,
    className: '',
    color: '',
    size: 'medium',
    disabled: false,
    href: null,
    square: false,
};

export default Box;
