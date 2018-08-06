import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ThemeProvider from 'react-theme-provider';
import testSetCSS from '../../.themes/testSetCSS';

const Label = styled.label`
  cursor: pointer;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  -webkit-transition: all 0.05s ease-in-out;
  transition: all 0.05s ease-in-out;
  background-color: #fafafa;
  border: 2px solid rgba(0,0,0,0.54);
  padding: 8px;
  border-radius: 2px;
  display: inline-block;
  height: 10px;
  width: 10px;
  outline: none;
  margin: 0px;
  position: relative;
  margin-right: 12px;
  vertical-align: bottom;
  color: #fff;
  &:hover {
    cursor: pointer;
    border: 2px solid rgba(0,0,0,0.87);
    background-color: ${props => props.theme.brandPrimary || '#fff'};
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  }
  &:disabled {
    border: 2px solid #ccc;
    background-image: linear-gradient(to bottom, #d8d8d8, #d8d8d8);
    box-shadow: none;
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 1px rgba(194, 169, 116, 1);
  }
  &:checked {
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
    
    background-color: ${props => props.theme.brandPrimary || '#B39350'};
    border: 2px solid #B39350;
    box-shadow: 0 1px 2px rgba(194, 169, 116, 1), inset 0px -15px 10px -12px rgba(194, 169, 116, 1),
    inset 15px 10px -12px rgba(255, 255, 255, 0.1);
    color: #fff;
    &:active {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05), inset 0px 1px 2px rgba(0, 0, 0, 0.1);
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 1px rgba(0, 126, 255, 0.1);
    }
    &:after {
      content: '✔';
      font-size: 13px;
      margin: 0.1em 0 0.1em 0;
      line-height: 1.2em;
      font-weight: 300;
      position: absolute;
      top: 0px;
      right: 2px;
    }
  }
`;

const Checkbox = ({ id, name, checked, className, handleChange, children, disabled,  ...props }) => (

  <ThemeProvider setCSS={testSetCSS} >
    <Label htmlFor={id} disabled={disabled}>
      <Input
        id={id}
        className={className}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
      {children}
    </Label>
  </ThemeProvider>
);

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
    className: '',
    disabled: false,
};

export default Checkbox;
