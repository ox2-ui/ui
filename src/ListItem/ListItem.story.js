import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ListItem from './ListItem';
import Icon from '@ox2/icon/Icon';
import Button from '@ox2/button/Button';

const handleOnClick = () => console.log('🍇'); // eslint-disable-line no-console

const handleOnClickButtons = () => console.log('💋'); // eslint-disable-line no-console

const widget = () => {
  return <Icon icon={'server'} size={'20px'} className={'text-color:critical margin:7'} />;
};

const widgetBottom = () => {
  return (
    <div className="display:flex flex:content-end padding-x:10 padding-b:7">
      <Button onClick={handleOnClickButtons} btn="tiny outline neutral-dim" className="margin-r:7"> Duplicate </Button>
      <Button onClick={handleOnClickButtons} btn="tiny outline neutral-dim"> Preview </Button>
    </div>
  );
};

storiesOf('ListItem', module)
  .add('regular', () => (
    <ListItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      icon={'user'}
      onClick={handleOnClick}
    />
  ))
  .add('one subtitle', () => (
    <ListItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle={'Ox2 Limited'}
      icon={'user'}
      onClick={handleOnClick}
    />
  ))
  .add('no subtitle', () => (
    <ListItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      icon={'user'}
      onClick={handleOnClick}
    />
  ))
  .add('colored icon', () => (
    <ListItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      icon={'user'}
      imageBgColor={'white'}
      iconColor={'neutral-light'}
      onClick={handleOnClick}
    />
  ))
  .add('image', () => (
    <ListItem
      _id={'2nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      image={'https://randomuser.me/api/portraits/women/21.jpg'}
      icon={'user'}
      onClick={handleOnClick}
    />
  ))
  .add('widget', () => (
    <ListItem
      _id={'2nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      image={'https://randomuser.me/api/portraits/women/21.jpg'}
      icon={'user'}
      onClick={handleOnClick}
      widget={widget}
    />
  ))
  .add('bottom widget', () => (
    <ListItem
      _id={'2nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      image={'https://randomuser.me/api/portraits/women/21.jpg'}
      icon={'user'}
      onClick={handleOnClick}
      widgetBottom={widgetBottom}
    />
  ))
  .add('both widgets', () => (
    <ListItem
      _id={'2nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      image={'https://randomuser.me/api/portraits/women/21.jpg'}
      icon={'user'}
      onClick={handleOnClick}
      widget={widget}
      widgetBottom={widgetBottom}
    />
  ));
