/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ListItem from './ListItem';

const handler = () => console.log('🍇'); // eslint-disable-line no-console


it('renders correctly', () => {
  const wrapper = mount(
    <ListItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      icon={'user'}
      onClick={handler}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
