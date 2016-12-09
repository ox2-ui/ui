import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import DynamicThemeLoader from '@ox2/theming/DynamicThemeLoader';
import { default as theme } from '@tapfuse/theme-spark';
import '@ox2/css-font-roboto-condensed';
import '@ox2/css-font-roboto';
import '@tapfuse/css-icons-linear';
import '@ox2/ycss';
import '@ox2/button-css';


const req = require.context('../src/', true, /.story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

// Custom storybook options
setOptions({
  name: 'ui',
});

DynamicThemeLoader({theme});

configure(loadStories, module);
