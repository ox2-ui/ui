import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SelectFieldLabel from './SelectFieldLabel';

storiesOf('SelectFieldLabel', module)
  .add('default', () => (
    <SelectFieldLabel text="My label">
      <input type="text" />
    </SelectFieldLabel>
  ));
