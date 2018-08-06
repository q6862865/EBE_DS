import React from 'react';
import { storiesOf } from '@storybook/react';
import Sites from './index';

import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('Sites', module)
  .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
  .addDecorator(story => (
    <div style={{ width: 500, textAlign: 'center', padding: 50 }}>
      {story()}
    </div>
  ))
  .add('default', withInfo('Basic usage of the sites')(() => (
    <Sites />
  )));
