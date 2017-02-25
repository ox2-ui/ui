import React from 'react';
import { storiesOf } from '@kadira/storybook';
import WrapperLabel from './WrapperLabel';

storiesOf('WrapperLabel', module)
  .add('default', () => (
    <WrapperLabel text="My label">
      <input type="text" />
    </WrapperLabel>
  ));
