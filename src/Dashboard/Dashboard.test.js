/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Dashboard from './Dashboard';

const testHandler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <Dashboard onDismiss={testHandler} />
  );

  expect(wrapper).toMatchSnapshot();
});
