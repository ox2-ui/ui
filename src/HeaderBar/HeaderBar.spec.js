/* eslint-env mocha */

import React from 'react';
import { shallow, mount } from 'enzyme';
import HeaderBar from './HeaderBar';
import { assert } from 'chai';

describe('HeaderBar', () => {
  it('should render a <HeaderBar> element', () => {
    const wrapper = shallow(
      <HeaderBar />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
