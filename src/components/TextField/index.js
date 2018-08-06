import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';

import ThemeProvider from 'react-theme-provider';
import testSetCSS from '../../.themes/testSetCSS';

const styles = {
  floatingLabelStyle: {
    color: '#000000',
    opacity: .7
  },
  floatingLabelFocusStyle:{
    opacity: 1
  },
  underlineStyle:{
    borderColor: '#aaa',
  },
  underlineFocusStyle:{
    borderColor:'#C2A974'
  },
};

const Input = ({ type, label, onChange, placeholder,  ...props }) => (
  <ThemeProvider setCSS={testSetCSS} >
    <div style = {{borderWidth: "1px", borderColor: "#00000011" }}>
      <TextField
        hintText={placeholder}
        type={type}
        floatingLabelText={label}
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle ={styles.floatingLabelFocusStyle}
        underlineStyle={styles.underlineStyle}
        underlineFocusStyle={styles.underlineFocusStyle}

      />
    </div>
  </ThemeProvider>
);

Input.defaultProps = {
  placeholder: 'type here ...'
};

Input.propsTypes = {
  placeholder: PropTypes.string.isRequired
};

export default Input;
