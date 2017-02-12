/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MenuCard from './MenuCard';
import { menuItems } from '../../data/MenuItems';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <MenuCard
      title={'System'}
      onItemClick={handler}
      items={menuItems.filter(x => x.moduleGroup === 'system')}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders selected', () => {
  const wrapper = mount(
    <MenuCard
      title={'System'}
      onItemClick={handler}
      selectedValue={'/system/apps'}
      items={menuItems.filter(x => x.moduleGroup === 'system')}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders with context switch', () => {
  const wrapper = mount(
    <MenuCard
      title={'System'}
      onItemClick={handler}
      items={menuItems.filter(x => x.moduleGroup === 'system')}
      image={'http://imgur.com/abQ9EaG.png'}
      onSwitchClick={handler}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
