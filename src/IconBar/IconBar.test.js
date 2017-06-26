/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import IconBar from './IconBar';
import Immutable from 'immutable';
import { items } from '../../data/Apps';

const handler = value => console.log('🐳', value); // eslint-disable-line no-console

const list = Immutable.List.of(...items);

it('renders correctly', () => {
  const wrapper = mount(
    <IconBar
      items={list}
      onUpdate={handler}
      value="3nNKyP6h6pMMjAyTMK"
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
