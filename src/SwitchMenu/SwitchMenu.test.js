/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SwitchMenu from './SwitchMenu';

const testHandler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <SwitchMenu onDismiss={testHandler} />,
  );

  expect(wrapper).toMatchSnapshot();
});
