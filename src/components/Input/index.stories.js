import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './index';

import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('Input', module)
  .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
  .add('search', withInfo('Basic usage of the button')(() => (
    <Input type="search" onChange={action} placeholder="search .." />
  )))
  .add('text', withInfo('text')(() => <Input type="text" onChange={action} placeholder="type here .." />));
