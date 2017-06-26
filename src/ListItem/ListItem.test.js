/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ListItem from './ListItem';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

it('renders correctly', () => {
  const wrapper = mount(
    <ListItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      icon={'user'}
      onClick={handler}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      title={'Jane Sanders'}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
