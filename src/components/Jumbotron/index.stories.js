import React from 'react';
import { storiesOf } from '@storybook/react';
import Jumbotron from './index';

import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('Jumbotron', module)
  .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
  .add('default', withInfo('default')(() => (
    <Jumbotron>
      Hello world
    </Jumbotron>
  )))
  .add('with props', withInfo('with props')(() => (
    <Jumbotron className="quranJumbo" style={{ height: '200px' }} id="header">
      Hello world
    </Jumbotron>
  )));
