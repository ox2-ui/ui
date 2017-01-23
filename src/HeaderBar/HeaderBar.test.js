/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HeaderBar from './HeaderBar';

const handleOnClick = () => console.log('🍇'); // eslint-disable-line no-console


it('renders correctly', () => {
  const wrapper = mount(
    <HeaderBar
      title="Cactus settings"
      icon="cactus"
      buttonHandler={handleOnClick}
      buttonLabel={'Filter'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
