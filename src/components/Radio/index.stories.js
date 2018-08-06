import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Radio from './index';
import Box from '../Box/index';

import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('✔ Radio Button', module)
  .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
  .add('with text', withInfo('with text')(() => (
    <div>
      {['translation', 'transliteration'].map(type => (
        <Box>
            <Radio key={type} id={type} name="type" handleChange={() => action(type)}>
              {type.toUpperCase()}
            </Radio>
        </Box>
      ))}
    </div>
  )))
  .add('default checked', withInfo('default checked')(() => (
    <div>
      {['translation', 'transliteration', 'test1', 'test2'].map(type => (
        <Radio
          key={type}
          id={type}
          name="type"
          checked={type === 'translation'}
          handleChange={() => action(type)}
        >
          {type.toUpperCase()}
        </Radio>
      ))}
    </div>
  )));
