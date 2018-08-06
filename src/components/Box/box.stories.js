import React from 'react';
const {PropTypes} = React;

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from './index';
import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('✔ Box', module)
  .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
  .add(
    'Structure Box',
    withInfo('Test Box')(() => (
      <div>
        <Box>
          <Box onClick={action('clicked')} fullWidth={false} >default fit-content box</Box>
          <Box onClick={action('clicked')}>default full width box</Box>
        </Box>

        <Box>
          <Box onClick={action('clicked')} size='small' fullWidth={false} >small fit-content box</Box>
          <Box onClick={action('clicked')} size='small'>small full width box</Box>

          <Box onClick={action('clicked')} size='medium' fullWidth={false} >medium fit-content box</Box>
          <Box onClick={action('clicked')} size='medium' disabled>medium full width box</Box>

          <Box onClick={action('clicked')} size='large' fullWidth={false} >large fit-content box</Box>
          <Box onClick={action('clicked')} size='large' disabled>large full width box</Box>
        </Box>
        <Box>
            <h1>This is h1 tag.</h1>
        </Box>
      </div>
    )),
  )
    .add(
        'Text Box',
        withInfo('Text Box')(() => (
            <div>
                <Box>
                    <Box><h1>This is h1 tag.</h1></Box>
                    <Box><h2>This is h2 tag.</h2></Box>
                    <Box><h3>This is h3 tag.</h3></Box>
                    <Box><h4>This is h4 tag.</h4></Box>
                    <Box><h5>This is h5 tag.</h5></Box>
                    <Box><h6>This is h6 tag.</h6></Box>
                    <Box><p>This is p tag.</p></Box>
                    <Box>No tag.</Box>
                </Box>
            </div>
        )),
    );
