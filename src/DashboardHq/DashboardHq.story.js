import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DashboardHq from './DashboardHq';
import { menuItems } from '../../data/MenuItems';
import { items as appItems } from '../../data/Apps';
import Immutable from 'immutable';

const handler = (value) => console.log('🍇', value); // eslint-disable-line no-console

const appList = Immutable.List.of(...appItems);

storiesOf('DashboardHq', module)
  .add('default', () => (
    <DashboardHq
      activeApp={'3nNKyP6h6pMMjAyTMK'}
      currentPath={'/'}
      recentApps={appList}
      onAppItemClick={handler}
      menuItems={menuItems}
      onMenuItemClick={handler}
    />
  ));
