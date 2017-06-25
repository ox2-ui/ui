/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MenuItem from './MenuItem';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <MenuItem
      value={'/system/status'}
      title={'Settings'}
      icon={'cog'}
      iconColor={'brand'}
      pictureBgColor={'white'}
      onClick={handler}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
