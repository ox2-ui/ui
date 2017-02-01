import React from 'react';
import { storiesOf } from '@kadira/storybook';
import HeaderBar from './HeaderBar';
import Button from '@ox2/button/Button';
import HeaderButton from '../HeaderButton';

const handleOnClick = () => console.log('🍇'); // eslint-disable-line no-console

const handleOnClickBottom = () => console.log('💋'); // eslint-disable-line no-console


const widget = () => {
  return (
    <div className="display:flex">
      <HeaderButton onClick={handleOnClick} className="margin-r:7" label="Search" />
      <HeaderButton onClick={handleOnClick} label="Filter" />
    </div>
  );
};

const widgetBottom = () => {
  return (
    <div className="display:flex flex:content-center padding-x:10 padding-b:7">
      <Button onClick={handleOnClickBottom} btn="tiny outline neutral-dim" className="margin-r:7"> Action </Button>
      <Button onClick={handleOnClickBottom} btn="tiny outline neutral-dim"> Other </Button>
    </div>
  );
};

storiesOf('HeaderBar', module)
  .add('with image', () => (
    <HeaderBar
      title="Linda Sanders"
      image="https://randomuser.me/api/portraits/women/21.jpg"
    />
  ))
  .add('with icon', () => (
    <HeaderBar
      title="Cactus settings"
      icon="cactus"
    />
  ))
  .add('with widget', () => (
    <HeaderBar
      title="Cactus settings"
      icon="cactus"
      widget={widget}
    />
  ))
  .add('with widgetBottom', () => (
    <HeaderBar
      title="Cactus settings"
      icon="cactus"
      widgetBottom={widgetBottom}
    />
  ));
