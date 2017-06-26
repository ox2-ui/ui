/* eslint-disable react/no-multi-comp */
import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItem from './ListItem';
import FontIcon from '@ox2/icon/FontIcon';
import Button from '@ox2/button/Button';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

const handlerButtons = () => console.log('💋'); // eslint-disable-line no-console

const widget = () => {
  return (
    <FontIcon
      className={'text-color:critical margin:7'}
      group={'linear'}
      icon={'server'}
      size={'20px'}
    />
  );
};

const widgetBottom = () => {
  return (
    <div className="display:flex flex:content-end padding-x:10 padding-b:7">
      <Button
        btn="tiny outline neutral-dim"
        className="margin-r:7"
        onClick={handlerButtons}
      >
        {' '}Duplicate{' '}
      </Button>
      <Button
        btn="tiny outline neutral-dim"
        onClick={handlerButtons}
      >
        {' '}Preview{' '}
      </Button>
    </div>
  );
};

storiesOf('ListItem', module)
  .add('regular', () =>
    <ListItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      icon={'user'}
      iconGroup={'linear'}
      onClick={handler}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      title={'Jane Sanders'}
    />,
  )
  .add('one subtitle', () =>
    <ListItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      icon={'user'}
      iconGroup={'linear'}
      onClick={handler}
      subtitle1={'Ox2 Limited'}
      title={'Jane Sanders'}
    />,
  )
  .add('no subtitle', () =>
    <ListItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      icon={'user'}
      iconGroup={'linear'}
      onClick={handler}
      title={'Jane Sanders'}
    />,
  )
  .add('dark background', () =>
    <ListItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      icon={'user'}
      iconColor={'white'}
      iconGroup={'linear'}
      onClick={handler}
      pictureBgColor={'neutral'}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      title={'Jane Sanders'}
    />,
  )
  .add('image', () =>
    <ListItem
      _id={'2nNKyP6h6pMMjAyTMK'}
      icon={'user'}
      iconGroup={'linear'}
      image={
        'https://randomuser.me/api/portraits/women/21.jpg'
      }
      onClick={handler}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      title={'Jane Sanders'}
    />,
  )
  .add('widget', () =>
    <ListItem
      _id={'2nNKyP6h6pMMjAyTMK'}
      icon={'user'}
      iconGroup={'linear'}
      image={
        'https://randomuser.me/api/portraits/women/21.jpg'
      }
      onClick={handler}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      title={'Jane Sanders'}
      widget={widget}
    />,
  )
  .add('bottom widget', () =>
    <ListItem
      _id={'2nNKyP6h6pMMjAyTMK'}
      icon={'user'}
      iconGroup={'linear'}
      image={
        'https://randomuser.me/api/portraits/women/21.jpg'
      }
      onClick={handler}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      title={'Jane Sanders'}
      widgetBottom={widgetBottom}
    />,
  )
  .add('both widgets', () =>
    <ListItem
      _id={'2nNKyP6h6pMMjAyTMK'}
      icon={'user'}
      iconGroup={'linear'}
      image={
        'https://randomuser.me/api/portraits/women/21.jpg'
      }
      onClick={handler}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      title={'Jane Sanders'}
      widget={widget}
      widgetBottom={widgetBottom}
    />,
  );
