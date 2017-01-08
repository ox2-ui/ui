import React from 'react';
import { storiesOf } from '@kadira/storybook';
import IconBar from './IconBar';

const handleUpdate = (value) => console.log('🐳', value);

const menuItems = [
  {
    value: '@ox2/toggle',
    image: 'http://imgur.com/abQ9EaG.png',
  },
  {
    value: '@ox2/button',
    image: 'http://imgur.com/N2LoYmv.png',
  },
  {
    value: '@ox2/ui',
    image: 'http://imgur.com/BC6B8Bc.png',
  },
  {
    value: '@tapfuse/module-agenda',
    image: 'http://imgur.com/UmS4Irj.png',
  },
  {
    value: '@ox2/toggle',
    image: 'http://imgur.com/abQ9EaG.png',
  },
  {
    value: '@ox2/button',
    image: 'http://imgur.com/N2LoYmv.png',
  },
  {
    value: '@ox2/ui',
    image: 'http://imgur.com/BC6B8Bc.png',
  },
  {
    value: '@tapfuse/module-agenda',
    image: 'http://imgur.com/UmS4Irj.png',
  },
  {
    value: '@ox2/toggle',
    image: 'http://imgur.com/abQ9EaG.png',
  },
  {
    value: '@ox2/button',
    image: 'http://imgur.com/N2LoYmv.png',
  },
  {
    value: '@ox2/ui',
    image: 'http://imgur.com/BC6B8Bc.png',
  },
  {
    value: '@tapfuse/module-agenda',
    image: 'http://imgur.com/UmS4Irj.png',
  },
];

storiesOf('IconBar', module)
  .add('default', () => (
    <IconBar
      value="@ox2/button"
      items={menuItems}
      onUpdate={handleUpdate}
    />
  ));
