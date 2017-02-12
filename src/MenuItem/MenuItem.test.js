/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MenuItem from './MenuItem';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <MenuItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      icon={'user'}
      iconColor={'brand'}
      pictureBgColor={'white'}
      onClick={handler}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
