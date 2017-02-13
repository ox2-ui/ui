import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MenuCard from './MenuCard';
import { items } from '../../data/Menu';

const handler = (value) => console.log('🍇', value); // eslint-disable-line no-console

const handlerSwitch = () => console.log('🐸'); // eslint-disable-line no-console

storiesOf('MenuCard', module)
  .add('default', () => (
    <MenuCard
      title={'System'}
      onItemClick={handler}
      items={items.filter(x => x.moduleGroup === 'system')}
    />
  ))
  .add('selected', () => (
    <MenuCard
      title={'System'}
      onItemClick={handler}
      items={items.filter(x => x.moduleGroup === 'system')}
      selectedValue={'/system/apps'}
    />
  ))
  .add('with context switch - app', () => (
    <MenuCard
      title={'System'}
      onItemClick={handler}
      items={items.filter(x => x.moduleGroup === 'system')}
      image={'http://imgur.com/abQ9EaG.png'}
      onSwitchClick={handlerSwitch}
    />
  ))
  .add('with context switch - client', () => (
    <MenuCard
      title={'System'}
      onItemClick={handler}
      items={items.filter(x => x.moduleGroup === 'system')}
      imageLandscape={true}
      image={'https://imgur.com/BCWOb1Y.jpg'}
      onSwitchClick={handlerSwitch}
    />
  ));
