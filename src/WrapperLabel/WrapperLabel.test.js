/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import WrapperLabel from './WrapperLabel';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <WrapperLabel text="My label">
      <input type="text" />
    </WrapperLabel>
  );

  expect(wrapper).toMatchSnapshot();
});
