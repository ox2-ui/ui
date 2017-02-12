import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MenuItem from './MenuItem';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('MenuItem', module)
  .add('default', () => (
    <MenuItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      title={'Settings'}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      icon={'cog'}
      iconColor={'brand'}
      pictureBgColor={'white'}
      onClick={handler}
    />
  ));
