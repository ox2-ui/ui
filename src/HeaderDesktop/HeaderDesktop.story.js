import React from 'react';
import { storiesOf } from '@kadira/storybook';
import HeaderDesktop from './HeaderDesktop';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('HeaderDesktop', module)
  .add('default', () => (
    <div style={{height: '64px', position: 'relative'}}>
      <HeaderDesktop
        className="color:backdrop-alt"
        image={'http://imgur.com/abQ9EaG.png'}
        onHomeClick={handler}
        onSwitchClick={handler}
        onUserClick={handler}
      />
    </div>
  ))
  .add('no sewitch', () => (
    <div style={{height: '64px', position: 'relative'}}>
      <HeaderDesktop
        className="color:backdrop-alt"
        image={'http://imgur.com/abQ9EaG.png'}
        onHomeClick={handler}
        onUserClick={handler}
      />
    </div>
  ));
