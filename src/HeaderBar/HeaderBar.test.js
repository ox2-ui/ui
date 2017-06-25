/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HeaderBar from './HeaderBar';
import HeaderButton from '../HeaderButton';

const handleOnClick = () => console.log('🍇'); // eslint-disable-line no-console

it('renders correctly', () => {
  const wrapper = mount(
    <HeaderBar title="Cactus settings" icon="cactus" />,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders with buttons', () => {
  const wrapper = mount(
    <HeaderBar title="Cactus settings" icon="cactus">
      <HeaderButton
        onClick={handleOnClick}
        className="margin-r:7"
        label="Search"
      />
      <HeaderButton
        onClick={handleOnClick}
        label="Filter"
      />
    </HeaderBar>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders with no border', () => {
  const wrapper = mount(
    <HeaderBar
      title="Cactus settings"
      icon="cactus"
      hideBorder={true}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
