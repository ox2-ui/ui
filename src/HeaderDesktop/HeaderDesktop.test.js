/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HeaderDesktop from './HeaderDesktop';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <HeaderDesktop
      onHomeClick={handler}
      onSwitchClick={handler}
      onUserClick={handler}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
