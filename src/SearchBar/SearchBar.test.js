/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SearchBar from './SearchBar';

const onSearchUpdate = () => console.log('🍇'); // eslint-disable-line no-console

it('renders correctly', () => {
  const wrapper = mount(
    <SearchBar
      onChange={onSearchUpdate}
      placeholder={'Search this...'}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
