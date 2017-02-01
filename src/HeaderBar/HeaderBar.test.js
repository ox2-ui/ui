/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HeaderBar from './HeaderBar';
import HeaderButton from '../HeaderButton';

const handleOnClick = () => console.log('🍇'); // eslint-disable-line no-console

const widget = () => {
  return (
    <div className="display:flex">
      <HeaderButton onClick={handleOnClick} className="margin-r:7" label="Search" />
      <HeaderButton onClick={handleOnClick} label="Filter" />
    </div>
  );
};

it('renders correctly', () => {
  const wrapper = mount(
    <HeaderBar
      title="Cactus settings"
      icon="cactus"
      widget={widget}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
