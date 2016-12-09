import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import HeaderBar from './HeaderBar';


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
      buttonHandler={action('button clicked')}
      buttonLabel={'Filter'}
    />
  ));
