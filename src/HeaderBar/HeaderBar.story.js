import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderBar from './HeaderBar';
import HeaderButton from '../HeaderButton';

const handleOnClick = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('HeaderBar', module)
  .add('with image', () =>
    <HeaderBar
      title="Linda Sanders"
      image="https://randomuser.me/api/portraits/women/21.jpg"
    />,
  )
  .add('with icon', () =>
    <HeaderBar title="Cactus settings" icon="server" />,
  )
  .add('no border', () =>
    <HeaderBar
      title="Cactus settings"
      icon="server"
      hideBorder={true}
    />,
  )
  .add('with buttons', () =>
    <HeaderBar title="Cactus settings" icon="server">
      <HeaderButton
        onClick={handleOnClick}
        className="margin-r:7"
        label="Search"
      />
      <HeaderButton
        onClick={handleOnClick}
        label="Filter"
      />
    </HeaderBar>,
  );
