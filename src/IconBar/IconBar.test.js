/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import IconBar from './IconBar';
import { items } from '../../data/MenuItems';

const handleUpdate = (value) => console.log('🐳', value); // eslint-disable-line no-console

it('renders correctly', () => {
  const wrapper = mount(
    <IconBar
      value="@ox2/button"
      items={items}
      onUpdate={handleUpdate}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
