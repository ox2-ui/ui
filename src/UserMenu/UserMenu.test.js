/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import UserMenu from './UserMenu';

const testHandler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <UserMenu onDismiss={testHandler} />,
  );

  expect(wrapper).toMatchSnapshot();
});
