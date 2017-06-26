/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HeaderBar from './HeaderBar';
import HeaderButton from '../HeaderButton';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

it('renders correctly', () => {
  const wrapper = mount(
    <HeaderBar icon="cactus" title="Cactus settings" />,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders with buttons', () => {
  const wrapper = mount(
    <HeaderBar icon="cactus" title="Cactus settings">
      <HeaderButton
        className="margin-r:7"
        label="Search"
        onClick={handler}
      />
      <HeaderButton label="Filter" onClick={handler} />
    </HeaderBar>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders with no border', () => {
  const wrapper = mount(
    <HeaderBar
      hideBorder={true}
      icon="cactus"
      title="Cactus settings"
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
