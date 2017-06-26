/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MenuItemBar from './MenuItemBar';
import Immutable from 'immutable';
import { items } from '../../data/Apps';

const handler = () => true;

const list = Immutable.List.of(...items);

it('renders correctly', () => {
  const wrapper = mount(
    <MenuItemBar
      items={list}
      onUpdate={handler}
      value="3nNKyP6h6pMMjAyTMK"
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
