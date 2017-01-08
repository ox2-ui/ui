/* eslint-env mocha */

import React from 'react';
import { shallow, mount } from 'enzyme';
import IconBar from './IconBar';
import { assert } from 'chai';

describe('IconBar', () => {
  it('should render a <IconBar> element', () => {
    const wrapper = shallow(
      <IconBar />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
