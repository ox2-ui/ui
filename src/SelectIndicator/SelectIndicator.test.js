/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SelectIndicator from './SelectIndicator';

it('renders correctly', () => {
  const wrapper = mount(
    <SelectIndicator />
  );

  expect(wrapper).toMatchSnapshot();
});
