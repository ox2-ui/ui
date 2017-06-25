import React from 'react';
import { storiesOf } from '@storybook/react';
import IconBar from './IconBar';
import Immutable from 'immutable';
import { items } from '../../data/Apps';

const handleUpdate = value => console.log('🐳', value); // eslint-disable-line no-console

const list = Immutable.List.of(...items);

storiesOf('IconBar', module).add('default', () =>
  <IconBar
    value="3nNKyP6h6pMMjAyTMK"
    items={list}
    onUpdate={handleUpdate}
  />,
);
