import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuCard from './MenuCard';
import { items } from '../../data/Menu';

const handler = value => console.log('🍇', value); // eslint-disable-line no-console

const handlerSwitch = () => console.log('🐸'); // eslint-disable-line no-console

storiesOf('MenuCard', module)
  .add('default', () =>
    <MenuCard
      items={items.filter(x => x.moduleGroup === 'system')}
      onItemClick={handler}
      title={'System'}
    />,
  )
  .add('selected', () =>
    <MenuCard
      items={items.filter(x => x.moduleGroup === 'system')}
      onItemClick={handler}
      selectedValue={'/system/apps'}
      title={'System'}
    />,
  )
  .add('with context switch - app', () =>
    <MenuCard
      image={'http://imgur.com/abQ9EaG.png'}
      items={items.filter(x => x.moduleGroup === 'system')}
      onItemClick={handler}
      onSwitchClick={handlerSwitch}
      switchEnabled={true}
      title={'System'}
    />,
  )
  .add('with context switch - client', () =>
    <MenuCard
      image={'https://imgur.com/BCWOb1Y.jpg'}
      imageLandscape={true}
      items={items.filter(x => x.moduleGroup === 'system')}
      onItemClick={handler}
      onSwitchClick={handlerSwitch}
      switchEnabled={true}
      title={'System'}
    />,
  );
