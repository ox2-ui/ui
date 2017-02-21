/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SelectFieldLabel from './SelectFieldLabel';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <SelectFieldLabel text="My label">
      <input type="text" />
    </SelectFieldLabel>
  );

  expect(wrapper).toMatchSnapshot();
});
