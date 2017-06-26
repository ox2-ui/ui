import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItem from './MenuItem';

const handler = value => console.log('🍇', value); // eslint-disable-line no-console

storiesOf('MenuItem', module).add('default', () =>
  <MenuItem
    icon={'cog'}
    iconColor={'brand'}
    iconGroup={'linear'}
    onClick={handler}
    pictureBgColor={'white'}
    title={'Settings'}
    value={'/system/status'}
  />,
);
