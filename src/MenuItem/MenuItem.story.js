import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MenuItem from './MenuItem';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('MenuItem', module)
  .add('default', () => (
    <MenuItem
      value={'/system/status'}
      title={'Settings'}
      icon={'cog'}
      iconColor={'brand'}
      pictureBgColor={'white'}
      onClick={handler}
    />
  ));
