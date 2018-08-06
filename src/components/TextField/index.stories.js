import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextField from './index';
import Box from '../Box/index';

import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('✔ TextField', module)
  .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
  .add('line', withInfo('Basic usage of the button')(() => (
  	<Box>
	  	<Box>
	    	<TextField type="search" onChange={action} placeholder label="Your Name" />
	    </Box>
      	<Box>
	    	<TextField type="search" onChange={action} placeholder label="Your Email" />
	    </Box>
      	<Box>
	    	<TextField type="search" onChange={action} placeholder label="Receipient's Email" />
	    </Box>
      	<Box>
	    	<TextField type="search" onChange={action} placeholder label="Confirm Receipient's Email" />
	    </Box>
      	<Box>
	    	<TextField type="password" onChange={action} label="Your password" />
	    </Box>
    </Box>
  )))
  .add('area', withInfo('text')(() => <TextField type="text" onChange={action} placeholder="type here .." />));
