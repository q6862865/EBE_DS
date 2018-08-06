import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';
import Box from '../Box/index';
import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('Button', module)
  .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
  .add(
    'Weis_button',
    withInfo('Test dynamic change colors')(() => (
      <Button onClick={action('clicked')} className="weiTestButton">Hello wei</Button>
    )),
  )
  .add(
    'size_buttons',
    withInfo('Test multiple buttons')(() => (
      <Box>
        <Box>
          <Button onClick={action('clicked')} className="">default Button</Button>
        </Box>
        <Box>
          <Button onClick={action('clicked')} className="" disabled>disabled Button</Button>
        </Box>
        <Box>
          <Button onClick={action('clicked')} className="" size ="small" >Small Button</Button>
        </Box>
        <Box>
          <Button onClick={action('clicked')} className="" size ="medium" >Medium Button</Button>
        </Box>
        <Box>
          <Button onClick={action('clicked')} className="" size ="large">Large Button</Button>
        </Box>

        <Box>
          <Button onClick={action('clicked')} className="" size ="small" fullWidth>Small Button</Button>
        </Box>
        <Box>
          <Button onClick={action('clicked')} className="" size ="medium" fullWidth>Medium Button</Button>
        </Box>
        <Box>
          <Button onClick={action('clicked')} className="" size ="large" fullWidth>Large Button</Button>
        </Box>
      </Box>
    )),
  )
  .add(
    'test test',
    withInfo('Test dynamic change colors')(() => {
      console.log("test");
      return (<Button onClick={function(){console.log("another test"); action('clicked')}} className="myTestButton">Hello Button</Button>);
    }),
  )
  .add(
    'simple info',
    withInfo('Basic usage of the button')(() => (
      <Button onClick={action('clicked')}>Hello Button</Button>
    )),
  )
  .add(
    'with some emoji',
    withInfo('Basic usage of the button')(() => (
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    )),
  )
  .add(
    'round',
    withInfo('Basic usage of the button')(() => (
      <Button onClick={action('clicked')} round>
        😀 😎 👍 💯
      </Button>
    )),
  )
  .add('disabled', withInfo('Basic usage of the button')(() => <Button disabled>Disabled</Button>))
  .add(
    'Inverted',
    withInfo('Basic usage of the button')(() => <Button color="inverted">Inverted</Button>),
  )
  .add(
    'With href',
    withInfo('Basic usage of the button')(() => (
      <Button href="http://Quran.com" target="_blank">
        😎 👍 💯 Quran.com
      </Button>
    )),
  )
  .add(
    'With href (disabled)',
    withInfo('Basic usage of the button')(() => (
      <Button href="http://Quran.com" target="_blank" disabled>
        😎 👍 💯 Quran.com
      </Button>
    )),
  );
