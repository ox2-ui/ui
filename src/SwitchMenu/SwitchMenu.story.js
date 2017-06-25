import React from 'react';
import { storiesOf } from '@storybook/react';
import SwitchMenu from './SwitchMenu';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('SwitchMenu', module).add('default', () =>
  <SwitchMenu onDismiss={handler} />,
);
