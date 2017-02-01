import React from 'react';
import { storiesOf } from '@kadira/storybook';
import HeaderControls from './HeaderControls';

storiesOf('HeaderControls', module)
  .add('default', () => (
    <HeaderControls>
      <div>sample text</div>
    </HeaderControls>
  ));

