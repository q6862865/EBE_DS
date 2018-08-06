import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ButtonFlat from './index';
import FlatButton from 'material-ui/FlatButton';
import Box from '../Box/index';
import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('✔ ButtonFlat', module)
  .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
  .add(
    'simple Mui FlatButton',
    withInfo('Test dynamic change colors')(() => (
      <FlatButton onClick={action('clicked')} label="Default" />
    )),
  )
  .add(
    'Mui FlatButton',
    withInfo('Test dynamic change colors')(() => (
      <Box>
        <Box>
          <FlatButton onClick={action('clicked')} label="Default" />
        </Box>
        <Box>
          <FlatButton onClick={action('clicked')} label="FlatButton" />
        </Box>
      </Box>
    )),
  )
  .add(
    'size_buttonFlats',
    withInfo('Test multiple buttonFlats')(() => (
      <Box>
        <Box>
          <ButtonFlat onClick={action('clicked')} className="">default ButtonFlat</ButtonFlat>
        </Box>
        <Box>
          <ButtonFlat onClick={action('clicked')} className="" disabled>disabled ButtonFlat</ButtonFlat>
        </Box>
        <Box>
          <ButtonFlat onClick={action('clicked')} className="" size="small" >Small ButtonFlat</ButtonFlat>
        </Box>
        <Box>
          <ButtonFlat onClick={action('clicked')} className="" size="medium" >Medium ButtonFlat</ButtonFlat>
        </Box>
        <Box>
          <ButtonFlat onClick={action('clicked')} className="" size="large">Large ButtonFlat</ButtonFlat>
        </Box>

        <Box>
          <ButtonFlat onClick={action('clicked')} className="" size="small" fullWidth>Small ButtonFlat</ButtonFlat>
        </Box>
        <Box>
          <ButtonFlat onClick={action('clicked')} className="" size="medium" fullWidth>Medium ButtonFlat</ButtonFlat>
        </Box>
        <Box>
          <ButtonFlat onClick={action('clicked')} className="" size="large" fullWidth>Large ButtonFlat</ButtonFlat>
        </Box>
      </Box>
    )),
  );
