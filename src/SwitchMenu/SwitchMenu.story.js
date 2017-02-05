import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SwitchMenu from './SwitchMenu';

const handleOnClick = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('SwitchMenu', module)
  .add('default', () => (
    <SwitchMenu />
  ));
