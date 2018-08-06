import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CardSelection from './index';
import Box from '../Box/index'
import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf("CardSelection", module)
  .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
  .add(
    'simple card',
    withInfo('simple card')(() => (
      <Box>
        <CardSelection onClick={action('clicked')} className="cardSelectionBase">Hello wei</CardSelection>
      </Box>
    )),
  )
  .add(
    '2 cardSelection',
    withInfo('Test dynamic change colors')(() => (
        <CardSelection onClick={action('clicked')} className="cardSelectionBase" fullWidth="80%" >Hello wei</CardSelection>
    )),
  );
