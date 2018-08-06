import * as storybook from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

storybook.setAddon(infoAddon);

setOptions({
    name: 'React Theming',
    url: 'https://github.com/sm-react/react-theming',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: true,
    showSearchBox: false,
    downPanelInRight: false,
});


const req = require.context('../src/components', true, /.stories.js$/);
//TODO: test textfield with area

storybook.configure(
    () => {
      // require('../src/stories');
      // require('../src/ThemeSwitcher.story');
      // require('../src/MaterialUI/index.story');
      req.keys().forEach(filename => req(filename));
    },
    module
);
