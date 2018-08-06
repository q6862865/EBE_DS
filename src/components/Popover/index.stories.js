import React from 'react';
import { storiesOf } from '@storybook/react';
import Popover from './index';
import Button from '../Button/index';

import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('Popover', module)
  .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
  .addDecorator(story => (
    <div style={{ width: 500, textAlign: 'center', padding: 50 }}>
      {story()}
    </div>
  ))
  .add('default', withInfo('Basic usage of the popover')(() => (
    <Popover trigger={<Button>I am a trigger</Button>}>
      <p>Text here</p>
    </Popover>
  )))
  .add('persist self', withInfo('Basic usage of the popover')(() => (
    <Popover persist="self" trigger={<Button>I am a trigger</Button>}>
      <p>Text here</p>
    </Popover>
  )));
