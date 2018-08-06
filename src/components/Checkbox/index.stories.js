import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from './index';

import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';
import Box from '../Box';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('✔ Checkbox', module)
  .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
  .add('checkbox', withInfo('checkbox')(() => (
    <Box>
        <Box>
            <Checkbox key="translation1" id="translation1" name="type" handleChange={action('translation1')}>
            plain checkbox
            </Checkbox>
        </Box>
        <Box>
            <div style={{ width: 150 }}>
                <Checkbox key="translation2" id="translation2" name="type" handleChange={action('translation2')}>
                    With A Lot Of Texts
                </Checkbox>
            </div>
        </Box>
        <Box>
            <div style={{ width: 150 }}>
                <Checkbox
                    key="translation3"
                    id="translation3"
                    name="type"
                    handleChange={action('translation3')}
                    disabled
                >
                    I am disabled
                </Checkbox>
            </div>
        </Box>
    </Box>
  )))
  .add('Radio Buttons', withInfo('Radio Buttons')(() => (
    <Box>
    </Box>
  )))
  .add('Disabled', withInfo('Disabled')(() => (
      <Box>
      </Box>
  )));
