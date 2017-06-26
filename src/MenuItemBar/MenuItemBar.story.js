import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemBar from './MenuItemBar';
import Immutable from 'immutable';
import { items } from '../../data/Apps';

const handler = value => console.log('🐳', value); // eslint-disable-line no-console

const list = Immutable.List.of(...items);

storiesOf('MenuItemBar', module).add('default', () =>
  <MenuItemBar
    items={list}
    onUpdate={handler}
    value="3nNKyP6h6pMMjAyTMK"
  />,
);
