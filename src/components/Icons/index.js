import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ThemeProvider from 'react-theme-provider';
import testSetCSS from '../../.themes/testSetCSS';

import iconPaths from './selection.js';// the file exported from IcoMoon
import {ICONS} from './iconConst';

function getPath(iconName) {
    const icon = iconPaths.icons.find(icon => icon.properties.name === iconName);

    if (icon) {
        return icon.icon.paths.join(' ');
    }
    console.warn(`icon ${iconName} does not exist.`);
    return '';
}

function getPath2(iconName) {
    const icon = iconPaths.icons.find(icon => icon.properties.name === iconName);
    return {
        [icon.properties.name]: icon.icon.paths[0],
    };
}

const styles = {
        display: 'inline-block',
        verticalAlign: 'middle',
};

const Icon = ({ size, color, bgColor, children, ...props }) => (
  <ThemeProvider setCSS={testSetCSS}>
    <span  {...props}>
      <svg style={{backgroundColor: bgColor, verticalAlign: 'middle'}}
           width={`${size}px`}
           height={`${size}px`}
           backgroundColor={bgColor}
           viewBox="0 0 1024 1024">
        <path fill={color} d={getPath(props.icon)} />
      </svg>
      {children}
    </span>
  </ThemeProvider>
);

// for test, can delete
const AllIcons1 = ({ size, children, ...props }) => {
    const keys = Object.keys(ICONS);
    var x,txt = "";
    let elements = [];

    for (x in ICONS) {
        elements.push(<svg width={`${size}px`} height={`${size}px`} viewBox="0 0 1024 1024"><path d={' + ICONS[x] + '} /> </svg>);
        // txt = txt + '<svg width={`${size}px`} height={`${size}px`} viewBox="0 0 1024 1024"><path d={' + ICONS[x] + '} /> </svg>'
    };
    // console.log("lalalala", typeof(txt) + ' ' + typeof(keys));
    console.log(elements);
    return (
        <ThemeProvider setCSS={testSetCSS}>
            <span {...props}>
                {elements[0]}
                {children}
            </span>
        </ThemeProvider>
    );
}

const AllIcons = ({ size, children, ...props }) => (
    <ThemeProvider setCSS={testSetCSS}>
        <span {...props}>
            {Object.values(ICONS).map(k => (
                <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 1024 1024">
                    <path d={k} />
                </svg>
            ))}
            {children}
        </span>
    </ThemeProvider>
)

//the full version of AllIcons
const AllIcons2 = ({ size, children, ...props }) => {
    const keys = Object.keys(ICONS);
    const renderedIcons = keys.map(k => {
        const path = ICONS[k];
         // console.log('kaka', (JSON.parse(JSON.stringify(ICONS)) == ICONS));
//        console.log('icon path', path);
        return (
            <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 1024 1024">
                <path d={ICONS[k]} />
            </svg>
        );
    });
    return (
        <ThemeProvider setCSS={testSetCSS}>
            <span {...props}>
                {renderedIcons}
                {children}
            </span>
        </ThemeProvider>
    );
}

Icon.propTypes = {
//  type: PropTypes.string.isRequired,
    children: PropTypes.element,
    size: PropTypes.number,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    bgColor: PropTypes.string
};

Icon.defaultProps = {
    size: 24,
    children: null
};

export default Icon;
export { AllIcons };
