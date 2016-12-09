/* eslint-env mocha */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Thumb from './Thumb';
import { assert } from 'chai';

describe('Thumb', () => {
  it('should render a <Thumb> element', () => {
    const wrapper = shallow(
      <Thumb />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
