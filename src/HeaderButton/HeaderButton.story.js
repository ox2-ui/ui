import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderButton from './HeaderButton';

const handleOnClick = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('HeaderButton', module).add('default', () =>
  <HeaderButton onClick={handleOnClick} label="Add" />,
);
