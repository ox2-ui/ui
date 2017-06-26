/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MenuCard from './MenuCard';
import { items } from '../../data/Menu';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <MenuCard
      items={items.filter(x => x.moduleGroup === 'system')}
      onItemClick={handler}
      title={'System'}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders selected', () => {
  const wrapper = mount(
    <MenuCard
      items={items.filter(x => x.moduleGroup === 'system')}
      onItemClick={handler}
      selectedValue={'/system/apps'}
      title={'System'}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders with context switch', () => {
  const wrapper = mount(
    <MenuCard
      image={'http://imgur.com/abQ9EaG.png'}
      items={items.filter(x => x.moduleGroup === 'system')}
      onItemClick={handler}
      onSwitchClick={handler}
      switchEnabled={true}
      title={'System'}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
