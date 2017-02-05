import React from 'react';
import { storiesOf } from '@kadira/storybook';
import HeaderDesktop from './HeaderDesktop';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('HeaderDesktop', module)
  .add('default', () => (
    <HeaderDesktop
      onHomeClick={handler}
      onSwitchClick={handler}
      onUserClick={handler}
    />
  ));
