import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Toggle from './index';
import Box from '../Box/index';

import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('✔ Toggle', module)
  .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
  .add('basic', withInfo('basic')(() => (
      <Box>
          <Box><Toggle id="some-toggle-switch-1" onChange={action} /></Box>
          <Box><Toggle id="some-toggle-switch-2" onChange={action} checked /></Box>
      </Box>
  )))
  .add('flat checked', withInfo('flat checked')(() => (
      <Box>
          <Box><Toggle id="some-toggle-switch-3" onChange={action} flat /></Box>
          <Box><Toggle id="some-toggle-switch-4" onChange={action} checked flat /></Box>
      </Box>
  )));
