/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HeaderControls from './HeaderControls';

it('renders correctly', () => {
  const wrapper = mount(
    <HeaderControls >
      <div>sample text</div>
    </HeaderControls>
  );

  expect(wrapper).toMatchSnapshot();
});
