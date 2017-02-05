import React from 'react';
import { storiesOf } from '@kadira/storybook';
import UserMenu from './UserMenu';

const handleOnClick = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('UserMenu', module)
  .add('default', () => (
    <UserMenu />
  ));
