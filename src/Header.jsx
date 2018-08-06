import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

const defaultProps = {
    title: 'Welcome to React-Theming',
    subtitle: 'Storybook Boilerplate Project',
};

const contextTypes = {
    muiTheme: PropTypes.object,
};

class Header extends React.Component {
    render() {
        const { palette } = this.context.muiTheme;
        const styleTitle = {
            color: palette.secondaryTextColor,
        };
        const styleSubtitle = {
            color: palette.alternate1Color,
        };
        const styleHeader = {
            backgroundColor: palette.alternateСanvasColor,
        };
        return (
          <div className="App App-header" style={styleHeader} >
            <img src={logo} className="App-logo" alt="logo" />
            <h2 style={styleTitle} >{this.props.title}</h2>
            <h3 style={styleSubtitle} >{this.props.subtitle}</h3>
          </div>
        );
    }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.contextTypes = contextTypes;

export default Header;
