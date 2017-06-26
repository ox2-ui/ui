import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderBar from './HeaderBar';
import HeaderButton from '../HeaderButton';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('HeaderBar', module)
  .add('with image', () =>
    <HeaderBar
      image="https://randomuser.me/api/portraits/women/21.jpg"
      title="Linda Sanders"
    />,
  )
  .add('with icon', () =>
    <HeaderBar icon="server" title="Cactus settings" />,
  )
  .add('no border', () =>
    <HeaderBar
      hideBorder={true}
      icon="server"
      title="Cactus settings"
    />,
  )
  .add('with buttons', () =>
    <HeaderBar icon="server" title="Cactus settings">
      <HeaderButton
        className="margin-r:7"
        label="Search"
        onClick={handler}
      />
      <HeaderButton
        label="Filter"
        onClick={handler}
      />
    </HeaderBar>,
  );
