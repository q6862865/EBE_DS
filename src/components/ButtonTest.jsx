import React from 'react';
import PropTypes from 'prop-types';

import './ButtonTest.css';

const propTypes = {
    title: PropTypes.string,
};

const defaultProps = {
    title: 'test button',
};

const contextTypes = {
    muiTheme: PropTypes.object,
};

class ButtonTest extends React.Component {
    render() {
        const { palette } = this.context.muiTheme;
        const styleButton = {
            color: palette.secondaryTextColor,
            background: palette.alternateСanvasColor
        };
        return <button className="test-button" style={styleButton} >{this.props.title}</button>;
    }
}

ButtonTest.propTypes = propTypes;
ButtonTest.defaultProps = defaultProps;
ButtonTest.contextTypes = contextTypes;

export default ButtonTest;
