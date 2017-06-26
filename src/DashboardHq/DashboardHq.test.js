/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import DashboardHq from './DashboardHq';
import { items as menuItems } from '../../data/Menu';
import { items as appItems } from '../../data/Apps';
import Immutable from 'immutable';

const handler = () => true;

const appList = Immutable.List.of(...appItems);

it('renders correctly', () => {
  const wrapper = mount(
    <DashboardHq
      activeApp={'3nNKyP6h6pMMjAyTMK'}
      currentPath={'/'}
      menuItems={menuItems}
      onAppItemClick={handler}
      onMenuItemClick={handler}
      recentApps={appList}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
