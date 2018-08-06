import React from 'react';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ThemeProvider from 'react-theme-provider';
import testSetCSS from '../../.themes/testSetCSS';

// const mycolor = "pink";
// <button mycolor = "pink"

const inverted = css`
  background: white;
  border-color: ${props => props.theme.brandPrimary || '#C2A974'};
  color: ${props => props.theme.brandPrimary || '#C2A974'};
  &:hover {
    color: white;
    background-color: ${props => props.theme.brandPrimary || '#C2A974'};
    border-color: white;
  }
`;

const disabled = css`
  background-color: #ccc;
  color: #6a6a6a;
  cursor: not-allowed;
`;

const small = css`
  padding: 8px 16px;
  font-size:12px;
  height: initial;
`;

const medium = css`
  padding: 12px 24px;
  font-size: 14px;
  height: initial;
`;

const large = css`
  padding: 16px 32px;
  font-size: 16px;
  height: initial;
`;

const StyledBase = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  padding: 12px 24px;
  background: none;
  cursor: pointer;
  width: ${props => (props.fullWidth ? '100%' : 'initial')};
  height: initial;
  border-radius: ${props => (props.round ? '50px' : 0)};
  border: 0px solid black;
  color: black;
  background-color: ${props => props.theme.brandPrimary || '#fff'};
  font-size: 14px;
  font-style: normal;
  font-stretch: normal;
  font-family: Gotham-Medium, Roboto, sans-serif;
  line-height:16px;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.brandPrimary || '#000'};
    border-color: ${props => props.theme.brandPrimary || '#C2A974'};
    background-color: #00000008;
  }

  &:disabled {
    ${disabled}
  }

  ${props => (props.color === 'inverted' ? inverted : '')}
  ${props => (props.disabled ? disabled : '')}

  ${(props) => {
      switch (props.size) {
      case 'small':
          return small;
      case 'medium':
          return medium;
      case 'large':
          return large;
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

function ButtonFlat({ className, color, children, fullWidth, size, disabled, href, ...props }) {
    if (href) {
        const attributes = props.disabled && {
            onClick: (event) => {
                event.preventDefault();
            },
        };

        return (
          <ThemeProvider setCSS={testSetCSS} >
            <StyledLink
              href={href}
              className={className}
              color={color}
              size={size}
              fullWidth={fullWidth}
              disabled={disabled}
              {...props}
              {...attributes}
            >
              {children}
            </StyledLink>
          </ThemeProvider>
        );
    }

    return (
      <ThemeProvider setCSS={testSetCSS} >
        <StyledBase className={className} color={color} size={size} disabled={disabled} fullWidth={fullWidth} {...props}>
          {children}
        </StyledBase>
      </ThemeProvider>
    );
}


ButtonFlat.propTypes = {
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

ButtonFlat.defaultProps = {
    className: '',
    color: '',
    disabled: false,
    href: null,
    square: false,
};

export default ButtonFlat;
