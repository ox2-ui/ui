import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderDesktop from './HeaderDesktop';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('HeaderDesktop', module)
  .add('default', () =>
    <div style={{ height: '64px', position: 'relative' }}>
      <HeaderDesktop
        className="color:backdrop-alt"
        image={'http://imgur.com/abQ9EaG.png'}
        title={'Some title'}
        onHomeClick={handler}
        onSwitchClick={handler}
        onUserClick={handler}
        showSwitchMenu={true}
      />
    </div>,
  )
  .add('no switch', () =>
    <div style={{ height: '64px', position: 'relative' }}>
      <HeaderDesktop
        className="color:backdrop-alt"
        title={'Some title'}
        image={'http://imgur.com/abQ9EaG.png'}
        onHomeClick={handler}
        onUserClick={handler}
      />
    </div>,
  );
