import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Dashboard from './Dashboard';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('Dashboard', module)
  .add('default', () => (
    <Dashboard onDismiss={handler} />
  ));
