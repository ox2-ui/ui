/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MenuItem from './MenuItem';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <MenuItem
      icon={'cog'}
      iconColor={'brand'}
      onClick={handler}
      pictureBgColor={'white'}
      title={'Settings'}
      value={'/system/status'}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
