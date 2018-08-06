import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './index';

import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';
import Box from '../Box/index';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('Icon', module)
  .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
  .add('with type', withInfo('with type')(() => (
    <Box>
        <Icon type="calendar" />
    </Box>
  )))
  .add('with text', withInfo('with text')(() => (
    <Box>
        <Icon type="calendar">
          Calendar
        </Icon>
    </Box>
  )));
