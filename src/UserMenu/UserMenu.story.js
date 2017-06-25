import React from 'react';
import { storiesOf } from '@storybook/react';
import UserMenu from './UserMenu';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('UserMenu', module).add('default', () =>
  <UserMenu onDismiss={handler} />,
);
