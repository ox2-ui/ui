import React from 'react';
import { storiesOf } from '@kadira/storybook';
import HeaderBar from './HeaderBar';

const handleOnClick = () => console.log('🍇'); // eslint-disable-line no-console


storiesOf('HeaderBar', module)
  .add('with image', () => (
    <HeaderBar
      title="Linda Sanders"
      image="https://randomuser.me/api/portraits/women/21.jpg"
    />
  ))
  .add('with icon', () => (
    <HeaderBar
      title="Cactus settings"
      icon="cactus"
    />
  ))
  .add('with button', () => (
    <HeaderBar
      title="Cactus settings"
      icon="cactus"
      buttonHandler={handleOnClick}
      buttonLabel={'Filter'}
    />
  ));
