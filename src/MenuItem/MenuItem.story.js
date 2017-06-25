import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItem from './MenuItem';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('MenuItem', module).add('default', () =>
  <MenuItem
    value={'/system/status'}
    title={'Settings'}
    icon={'cog'}
    iconGroup={'linear'}
    iconColor={'brand'}
    pictureBgColor={'white'}
    onClick={handler}
  />,
);
