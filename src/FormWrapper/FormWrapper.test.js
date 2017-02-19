/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import FormWrapper from './FormWrapper';

const handler = () => true;

const promptWidget = () => <div>PromptWidget</div>;

it('renders correctly', () => {
  const wrapper = mount(
    <FormWrapper
      dirty={false}
      submitSucceeded={false}
      submitting={false}
      pristine={true}
      reset={handler}
      handleSubmit={handler}
      promptWidget={promptWidget}
    >
      <div>Children</div>
    </FormWrapper>
  );

  expect(wrapper).toMatchSnapshot();
});
