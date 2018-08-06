import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ThemeProvider from 'react-theme-provider';
import testSetCSS from '../../.themes/testSetCSS';

const height = 24;
const width = 42;

const Switch = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const roundStyle = css`
  & + .label {
    padding: 0px;
    width: ${width}px;
    height: ${height}px;
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: ${height}px;
    transition: background 0.4s;
  }

  & + .label:before,
  & + .label:after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: "";
  }

  & + .label:before {
    right: 1px;
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: ${height}px;
    transition: background 0.4s;
  }

  & + .label:after {
    width: ${height - 2}px;
    height: ${height - 2}px;
    background-color: #fff;
    border-radius: ${height - 2}px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    transition: margin 0.4s;
    position: relative;
    top: 1px;
  }

  &:checked + .label:before {
    background-color: ${props => props.theme.brandPrimary || '#36BF6B'};
  }

  &:checked + .label:after {
    margin-left: ${width / 2}px;
  }
`;

const flatStyle = css`
  & + .label {
    padding: 1px;
    width: ${width}px;
    height: ${height}px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: ${height}px;
    transition: background 0.4s;
  }
  & + .label:before,
  & + .label:after {
    display: block;
    position: absolute;
    content: "";
  }
  & + .label:before {
    top: 1px;
    left: 1px;
    bottom: 1px;
    right: 1px;
    background-color: #fff;
    border-radius: ${height}px;
    transition: background 0.4s;
  }
  & + .label:after {
    top: 3px;
    left: 3px;
    bottom: 3px;
    width: ${height - 4}px;
    height: ${height - 4}px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: ${height - 4}px;
    transition: margin 0.4s, background 0.4s;
  }
  &:checked + .label {
    background-color: ${props => props.theme.brandPrimary || '#36BF6B'};
  }
  &:checked + .label:after {
    margin-left: ${width - height }px;
    background-color: ${props => props.theme.brandPrimary || '#36BF6B'};
  }
`;

const Toggle = styled.input`
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;

  & + .label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
    margin-bottom: 0px;
  }

  ${props => (props.toggleStyle === 'flat' ? flatStyle : roundStyle)}
`;

const SwitchToggle = ({ id, flat, onToggle, ...otherProps }) => (
  <ThemeProvider setCSS={testSetCSS} >
    <Switch className="switch">
      <Toggle
        id={id}
        toggleStyle={flat ? 'flat' : 'round'}
        type="checkbox"
        onChange={onToggle}
        {...otherProps}
      />
      <label htmlFor={id} className="label" />
    </Switch>
  </ThemeProvider>
);

SwitchToggle.propTypes = {
  id: PropTypes.string,
  flat: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};

SwitchToggle.defaultProps = {
  flat: false,
  id: '',
};

export default SwitchToggle;
