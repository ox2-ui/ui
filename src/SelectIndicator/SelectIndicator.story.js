import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SelectIndicator from './SelectIndicator';

storiesOf('SelectIndicator', module)
  .add('default', () => (
    <SelectIndicator />
  ));
