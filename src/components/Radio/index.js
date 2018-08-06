import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ThemeProvider from 'react-theme-provider';
import testSetCSS from '../../.themes/testSetCSS';

const size = 16;

const Label = styled.label`
  display: inline-block;
  padding-right: 20px;
  font-weight: 500;
  color: rgba(0,0,0,0.87);
  line-height: 20px;
  cursor: pointer;
  display: inline-block;

  &:hover .inner {
    -webkit-transform: scale(0.35);
    -ms-transform: scale(0.35);
    transform: scale(0.35);
    opacity: 0.54;
  }

  & .input {
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  & .input:checked + .outer .inner {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    background-color: ${props => props.theme.brandPrimary || '#B39350'};
    opacity: 1;
  }

  & .input:checked + .outer {
    border: 2px solid ${props => props.theme.brandPrimary || '#B39350'};
  }

  & .input:focus + .outer .inner {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    background-color: ${props => props.theme.brandPrimary || '#B39350'};
  }

  & .outer {
    width: ${size}px;
    height: ${size}px;
    display: block;
    float: left;
    margin: 0px 5px 0px 0px;
    border: 2px solid ${props => props.theme.brandPrimary || 'rgba(0,0,0,0.54)'};
    border-radius: 50%;
    background-color: #fff;
  }

  & .inner {
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    width: ${size / 4 * 3}px;
    height: ${size / 4 * 3}px;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    display: block;
    margin: ${size / 8 }px;
    border-radius: 50%;
    background-color: ${props => props.theme.brandPrimary || 'rgba(0,0,0,0.54)'};
    opacity: 0;
  }
`;

const Radio = ({ id, name, checked, handleChange, children }) => (
  <ThemeProvider setCSS={testSetCSS} >
    <Label htmlFor={id}>
      <input
        id={id}
        className="input"
        type="radio"
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <span className="outer">
        <span className="inner" />
      </span>
      {children}
    </Label>
  </ThemeProvider>
);

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Radio;
