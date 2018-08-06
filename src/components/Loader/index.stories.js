import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from './index';
import Button from '../Button/index';

import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('Loader', module)
  .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
 .add('isActive - true ', withInfo('isActive - true ')(() => (<Loading isActive> <Button>Loading</Button></Loading>)))
 .add('isActive - false ', withInfo('isActive - false ')(() => (<Loading isActive={false}> <Button>Not Loading</Button></Loading>)))
 .add('isActive - relative ', withInfo('isActive - relative ')(() => (
   <div>
     <Loading isActive relative />
   </div>
 )));
