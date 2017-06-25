/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HeaderDesktop from './HeaderDesktop';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <HeaderDesktop
      image={'http://imgur.com/abQ9EaG.png'}
      title={'Some title'}
      onHomeClick={handler}
      onSwitchClick={handler}
      onUserClick={handler}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
