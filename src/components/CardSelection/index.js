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

const StyledBase = styled.button`
  display: inline-block;
  outline: 0;
  background: none;
  cursor: pointer;
  border: 1px solid #ffffff22;
  box-shadow: 0px 0px 4px #00000022;
  border-radius: 2px;
  padding: 24px;
  color: black;
  background-color: ${props => props.theme.brandPrimary || '#fff'};
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  width: ${props => props.fullWidth ? props.fullWidth : 'initial'};

  &:hover {
    text-decoration: none;
    border: 1px solid #00000022;
    background-color: white;
  }

  &:active {
    border: 1px solid #00000088;
  }

  &:focus {
    border: 1px solid #00000022;
    box-shadow: 0 0 4px #B39350;
  }  
  &:disabled {
    ${disabled}
  }

  ${props => (props.color === 'inverted' ? inverted : '')}
  ${props => (props.disabled ? disabled : '')}
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

const StyledLink = StyledBase.withComponent('a').extend`
  text-align: center;
  line-height: 40px;
  text-decoration: none;
`;

function CardSelection({ className, color, children, href, ...props }) {
  return (
    <ThemeProvider setCSS={testSetCSS} >
      <StyledBase className={className} color={color} {...props}>
        {children}
      </StyledBase>
    </ThemeProvider>
  );
}

CardSelection.propTypes = {
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
    PropTypes.string
  ]).isRequired
};

CardSelection.defaultProps = {
  fullWidth: false,
  className: '',
  color: '',
  disabled: false,
  href: null,
  square: false
};

export default CardSelection;
