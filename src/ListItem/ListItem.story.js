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
      group={'linear'}
      icon={'server'}
      size={'20px'}
      className={'text-color:critical margin:7'}
    />
  );
};

const widgetBottom = () => {
  return (
    <div className="display:flex flex:content-end padding-x:10 padding-b:7">
      <Button
        onClick={handlerButtons}
        btn="tiny outline neutral-dim"
        className="margin-r:7"
      >
        {' '}Duplicate{' '}
      </Button>
      <Button
        onClick={handlerButtons}
        btn="tiny outline neutral-dim"
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
      title={'Jane Sanders'}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      icon={'user'}
      iconGroup={'linear'}
      onClick={handler}
    />,
  )
  .add('one subtitle', () =>
    <ListItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle1={'Ox2 Limited'}
      icon={'user'}
      iconGroup={'linear'}
      onClick={handler}
    />,
  )
  .add('no subtitle', () =>
    <ListItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      icon={'user'}
      iconGroup={'linear'}
      onClick={handler}
    />,
  )
  .add('dark background', () =>
    <ListItem
      _id={'1nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      icon={'user'}
      iconGroup={'linear'}
      iconColor={'white'}
      pictureBgColor={'neutral'}
      onClick={handler}
    />,
  )
  .add('image', () =>
    <ListItem
      _id={'2nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      image={
        'https://randomuser.me/api/portraits/women/21.jpg'
      }
      icon={'user'}
      iconGroup={'linear'}
      onClick={handler}
    />,
  )
  .add('widget', () =>
    <ListItem
      _id={'2nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      image={
        'https://randomuser.me/api/portraits/women/21.jpg'
      }
      icon={'user'}
      iconGroup={'linear'}
      onClick={handler}
      widget={widget}
    />,
  )
  .add('bottom widget', () =>
    <ListItem
      _id={'2nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      image={
        'https://randomuser.me/api/portraits/women/21.jpg'
      }
      icon={'user'}
      iconGroup={'linear'}
      onClick={handler}
      widgetBottom={widgetBottom}
    />,
  )
  .add('both widgets', () =>
    <ListItem
      _id={'2nNKyP6h6pMMjAyTMK'}
      title={'Jane Sanders'}
      subtitle1={'Ox2 Limited'}
      subtitle2={'Marketing Manager'}
      image={
        'https://randomuser.me/api/portraits/women/21.jpg'
      }
      icon={'user'}
      iconGroup={'linear'}
      onClick={handler}
      widget={widget}
      widgetBottom={widgetBottom}
    />,
  );
