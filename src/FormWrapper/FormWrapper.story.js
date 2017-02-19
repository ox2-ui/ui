import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FormWrapper from './FormWrapper';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('FormWrapper', module)
  .add('default', () => (
    <FormWrapper
      dirty={false}
      submitSucceeded={false}
      submitting={false}
      pristine={true}
      reset={handler}
      handleSubmit={handler}
    >
      <div style={{marginTop: '20px'}}>Children</div>
    </FormWrapper>
  ));
