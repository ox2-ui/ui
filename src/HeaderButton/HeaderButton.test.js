/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HeaderButton from './HeaderButton';

const handleOnClick = () => console.log('🍇'); // eslint-disable-line no-console

it('renders correctly', () => {
  const wrapper = mount(
    <HeaderButton onClick={handleOnClick} label="Add" />
  );

  expect(wrapper).toMatchSnapshot();
});
